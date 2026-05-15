import { signUp as awsSignUp, confirmSignUp as awsConfirmSignUp, signIn as awsSignIn, signOut as awsSignOut, getCurrentUser as awsGetCurrentUser, fetchAuthSession } from 'aws-amplify/auth';

export type AuthUser = { userId: string; email: string };

export async function signUp(email: string, password: string): Promise<void> {
  await awsSignUp({ username: email, password, options: { userAttributes: { email } } });
}

export async function confirmSignUp(email: string, code: string): Promise<void> {
  await awsConfirmSignUp({ username: email, confirmationCode: code });
}

export async function signIn(email: string, password: string): Promise<AuthUser> {
  await awsSignIn({ username: email, password });
  const user = await awsGetCurrentUser();
  return { userId: user.userId, email: user.signInDetails?.loginId ?? email };
}

export async function signOut(): Promise<void> {
  await awsSignOut();
}

export async function getCurrentUser(): Promise<AuthUser | null> {
  try {
    const user = await awsGetCurrentUser();
    return { userId: user.userId, email: user.signInDetails?.loginId ?? '' };
  } catch {
    return null;
  }
}

export async function getIdToken(): Promise<string | null> {
  try {
    const session = await fetchAuthSession();
    return session.tokens?.idToken?.toString() ?? null;
  } catch {
    return null;
  }
}
