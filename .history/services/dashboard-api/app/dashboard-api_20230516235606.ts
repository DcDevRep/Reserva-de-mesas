import { ForControlAuthenticating } from "../ports/drivens/for-control-authenticating";
import { ControlAuthentoicator } from '../../../.history/services/dashboard-api/adapters/drivens/control-authenticator-stub_20230516225344';


export class DashboardApi implements ForControlAuthenticating {
  constructor(private readonly ControlAuthentoicator)
}