import { ControlAuthenticatorStub, RepoQuerierStub } from "../adapters/drivens";
import { AuthenticatorProxyAdapters } from "../adapters/drivers";
import { DashboardApi } from "./dashboard-api";

const compositionMock =()=> {
  const controlAuthenticatorStub = new ControlAuthenticatorStub();
  const repoQuerierStub = new RepoQuerierStub();
  const dashboardApiMock = new DashboardApi(controlAuthenticatorStub, repoQuerierStub);
  const authenticatorProxyAdapter = new AuthenticatorProxyAdapters( dashboardApiMock);
  return {
    authenticatorProxyAdapter,
  };
};

export const { authenticatorProxyAdapter } = compositionMock();

const registerMock={
  name: 'Cj Crop',
  email: 'cjcroptk@gmail.com',
}

authenticatorProxyAdapter.login('cjcroptk@gmail.com', '123456');
authenticatorProxyAdapter.register(registerMock, '123456');