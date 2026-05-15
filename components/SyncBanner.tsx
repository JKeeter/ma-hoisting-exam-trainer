'use client';

import { RefreshCw, Check, CloudOff } from 'lucide-react';
import { useAuth, isAuthConfigured } from './AuthProvider';

export function SyncBanner() {
  const { user, syncStatus, signOut } = useAuth();

  if (!isAuthConfigured || !user) return null;

  return (
    <div className="flex items-center gap-2 text-xs text-slate-500 justify-end">
      {syncStatus === 'syncing' && (
        <>
          <RefreshCw size={12} className="animate-spin" />
          <span>Syncing…</span>
        </>
      )}
      {syncStatus === 'synced' && (
        <>
          <Check size={12} className="text-green-600" />
          <span>Synced</span>
        </>
      )}
      {syncStatus === 'error' && (
        <>
          <CloudOff size={12} className="text-red-500" />
          <span>Sync failed</span>
        </>
      )}
      <span className="text-slate-300">·</span>
      <button
        onClick={signOut}
        className="text-slate-400 hover:text-slate-600 transition-colors"
      >
        Sign out
      </button>
    </div>
  );
}
