

export interface ForAuthenticating {
  login:(email: string, password: string) => Promise<AuthenticatedUser>;
  register:(user: User, password: string) => Promise<AuthenticatedUser>;
}