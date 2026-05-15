'use client';

import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { Amplify } from 'aws-amplify';
import * as auth from '@/lib/auth';
import { syncOnLogin } from '@/lib/syncProgress';
import { saveCloudProgress } from '@/lib/cloudStorage';
import { UserProgress } from '@/lib/types';

const userPoolId = process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID;
const userPoolClientId = process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID;

if (userPoolId && userPoolClientId) {
  Amplify.configure({
    Auth: {
      Cognito: {
        userPoolId,
        userPoolClientId,
      },
    },
  });
}

export const isAuthConfigured = !!(userPoolId && userPoolClientId);

export type SyncStatus = 'idle' | 'syncing' | 'synced' | 'error';

type AuthContextType = {
  user: auth.AuthUser | null;
  isLoading: boolean;
  syncStatus: SyncStatus;
  latestProgress: UserProgress | null;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  confirmSignUp: (email: string, code: string) => Promise<void>;
  signOut: () => Promise<void>;
  triggerCloudSave: (progress: UserProgress) => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<auth.AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [syncStatus, setSyncStatus] = useState<SyncStatus>('idle');
  const [latestProgress, setLatestProgress] = useState<UserProgress | null>(null);

  const runSync = useCallback(async () => {
    setSyncStatus('syncing');
    try {
      const merged = await syncOnLogin();
      setLatestProgress(merged);
      setSyncStatus('synced');
    } catch {
      setSyncStatus('error');
    }
  }, []);

  useEffect(() => {
    if (!isAuthConfigured) {
      setIsLoading(false);
      return;
    }
    auth.getCurrentUser().then(async (u) => {
      setUser(u);
      if (u) await runSync();
      setIsLoading(false);
    });
  }, [runSync]);

  const signIn = useCallback(async (email: string, password: string) => {
    const u = await auth.signIn(email, password);
    setUser(u);
    await runSync();
  }, [runSync]);

  const signUp = useCallback(async (email: string, password: string) => {
    await auth.signUp(email, password);
  }, []);

  const confirmSignUp = useCallback(async (email: string, code: string) => {
    await auth.confirmSignUp(email, code);
  }, []);

  const signOut = useCallback(async () => {
    await auth.signOut();
    setUser(null);
    setSyncStatus('idle');
    setLatestProgress(null);
  }, []);

  const triggerCloudSave = useCallback((progress: UserProgress) => {
    if (!user) return;
    saveCloudProgress(progress).catch(() => {});
  }, [user]);

  return (
    <AuthContext.Provider
      value={{ user, isLoading, syncStatus, latestProgress, signIn, signUp, confirmSignUp, signOut, triggerCloudSave }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextType {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
