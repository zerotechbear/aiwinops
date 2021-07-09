import { Route, Switch, useRouteMatch } from "react-router-dom";

import UserPanel from "../components/Panel/Users/UserPanel";
import NewUser from "../components/Panel/Users/NewUser";
import Settings from "../components/Panel/Users/Settings";

const UserPage = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}`} exact>
        <UserPanel />
      </Route>
      <Route path={`${path}/create`}>
        <NewUser />
      </Route>
      <Route path={`${path}/settings`}>
        <Settings />
      </Route>
      <Route path={`${path}/:username`}>
        <UserPanel />
      </Route>
    </Switch>
  );
};

export default UserPage;
