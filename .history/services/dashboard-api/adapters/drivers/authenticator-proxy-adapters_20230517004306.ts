import { AuthenticatedUser, ForAuthenticating, User } from "../../ports/drivers";

export class authenticatorProxyAdapetrs implements ForAuthenticating{

  constructor(private readonl)

  login: (email: string, password: string) => Promise<AuthenticatedUser>;
  register: (user: User, password: string) => Promise<AuthenticatedUser>;
}