import { ControlAuthenticatorStub, RepoQuerierStub } from "../adapters/drivens";
import { AuthenticatorProxyAdapters } from "../adapters/drivers";
import { DashboardApi } from "./dashboard-api";

const compositionMock =()=> {
  const controlAuthenticatorStub = new ControlAuthenticatorStub();

  const repoQuerierStub = new RepoQuerierStub();

  const dashboardApiMock = new DashboardApi( controlAuthenticatorStub, repoQuerierStub);

  const authenticatorProxyAdapter = new AuthenticatorProxyAdapters( dashboardApiMock, authenticationMock);
  return {
    authenticatorProxyAdapter,
  }
}