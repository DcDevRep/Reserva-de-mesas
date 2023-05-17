export interface AuthenticatedUser{
  id: string;
  foto: string;
  name: string;
  email: string;
  password: string;
  role: string;
  token: string;
  refreshToken: string;
  createdAt: Date;
  updatedAt: Date;
}

export type User = Pick<AuthenticatedUser, 'email' | 'name'>

export interface ForAuthenticating {
  login:(email: string, password: string) => Promise<AuthenticatedUser>;
  register:(user: string, password: string) => Promise<AuthenticatedUser>;
}