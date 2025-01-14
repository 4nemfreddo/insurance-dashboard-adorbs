export type AuthUser = {
  id: string;
  email: string;
  role: 'admin' | 'user';
};

export type AuthError = {
  message: string;
};

export type AuthResponse = {
  user: AuthUser | null;
  error: AuthError | null;
};

export type SignInCredentials = {
  email: string;
  password: string;
};

export type SignUpCredentials = SignInCredentials & {
  full_name?: string;
  company_name?: string;
};