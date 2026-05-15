'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { X } from 'lucide-react';
import { useAuth } from './AuthProvider';

type View = 'sign-in' | 'sign-up' | 'verify';
type SignInFields = { email: string; password: string };
type SignUpFields = { email: string; password: string };
type VerifyFields = { code: string };

export function AuthModal({ onClose }: { onClose: () => void }) {
  const { signIn, signUp, confirmSignUp } = useAuth();
  const [view, setView] = useState<View>('sign-in');
  const [pendingEmail, setPendingEmail] = useState('');
  const [pendingPassword, setPendingPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const signInForm = useForm<SignInFields>();
  const signUpForm = useForm<SignUpFields>();
  const verifyForm = useForm<VerifyFields>();

  const inputClass =
    'w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-safety';

  const handleSignIn = signInForm.handleSubmit(async ({ email, password }) => {
    setError('');
    setIsSubmitting(true);
    try {
      await signIn(email, password);
      onClose();
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Sign in failed');
    } finally {
      setIsSubmitting(false);
    }
  });

  const handleSignUp = signUpForm.handleSubmit(async ({ email, password }) => {
    setError('');
    setIsSubmitting(true);
    try {
      await signUp(email, password);
      setPendingEmail(email);
      setPendingPassword(password);
      setView('verify');
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Sign up failed');
    } finally {
      setIsSubmitting(false);
    }
  });

  const handleVerify = verifyForm.handleSubmit(async ({ code }) => {
    setError('');
    setIsSubmitting(true);
    try {
      await confirmSignUp(pendingEmail, code);
      await signIn(pendingEmail, pendingPassword);
      onClose();
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Verification failed');
    } finally {
      setIsSubmitting(false);
    }
  });

  const switchView = (next: View) => {
    setView(next);
    setError('');
  };

  const title = view === 'sign-in' ? 'Sign in' : view === 'sign-up' ? 'Create account' : 'Verify email';

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="card max-w-sm w-full p-6 space-y-5">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition-colors">
            <X size={20} />
          </button>
        </div>

        {view === 'sign-in' && (
          <form onSubmit={handleSignIn} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
              <input
                type="email"
                autoComplete="email"
                className={inputClass}
                {...signInForm.register('email', { required: true })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
              <input
                type="password"
                autoComplete="current-password"
                className={inputClass}
                {...signInForm.register('password', { required: true })}
              />
            </div>
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-safety text-slate-900 font-semibold py-2 rounded-lg hover:bg-yellow-400 transition-colors disabled:opacity-50"
            >
              {isSubmitting ? 'Signing in…' : 'Sign in'}
            </button>
            <p className="text-center text-sm text-slate-600">
              No account?{' '}
              <button type="button" onClick={() => switchView('sign-up')} className="font-semibold underline">
                Create one
              </button>
            </p>
          </form>
        )}

        {view === 'sign-up' && (
          <form onSubmit={handleSignUp} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
              <input
                type="email"
                autoComplete="email"
                className={inputClass}
                {...signUpForm.register('email', { required: true })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
              <input
                type="password"
                autoComplete="new-password"
                className={inputClass}
                {...signUpForm.register('password', { required: true, minLength: 8 })}
              />
              <p className="text-xs text-slate-500 mt-1">At least 8 characters including a number</p>
            </div>
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-safety text-slate-900 font-semibold py-2 rounded-lg hover:bg-yellow-400 transition-colors disabled:opacity-50"
            >
              {isSubmitting ? 'Creating account…' : 'Create account'}
            </button>
            <p className="text-center text-sm text-slate-600">
              Already have one?{' '}
              <button type="button" onClick={() => switchView('sign-in')} className="font-semibold underline">
                Sign in
              </button>
            </p>
          </form>
        )}

        {view === 'verify' && (
          <form onSubmit={handleVerify} className="space-y-4">
            <p className="text-sm text-slate-600">
              We sent a code to <strong>{pendingEmail}</strong>. Enter it below to verify your email.
            </p>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Verification code</label>
              <input
                type="text"
                inputMode="numeric"
                autoComplete="one-time-code"
                className={`${inputClass} tracking-widest text-center text-lg`}
                {...verifyForm.register('code', { required: true })}
              />
            </div>
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-safety text-slate-900 font-semibold py-2 rounded-lg hover:bg-yellow-400 transition-colors disabled:opacity-50"
            >
              {isSubmitting ? 'Verifying…' : 'Verify email'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
