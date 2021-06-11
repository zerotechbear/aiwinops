import { Route, Switch, useRouteMatch } from 'react-router-dom';

import MemberPanel from '../components/Panel/Members/MemberPanel';
import NewMember from '../components/Panel/Members/NewMember';
import Settings from '../components/Panel/Members/Settings';

const MemberPage = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}`} exact>
        <MemberPanel />
      </Route>
      <Route path={`${path}/new-member`}>
        <NewMember />
      </Route>
      <Route path={`${path}/settings`}>
        <Settings />
      </Route>
    </Switch>
  );
};

export default MemberPage;
