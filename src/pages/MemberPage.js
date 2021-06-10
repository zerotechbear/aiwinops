import { Route, Switch, useRouteMatch } from 'react-router-dom';

import MemberPanel from '../components/ProjectPanel/Members/MemberPanel';
import NewMember from '../components/ProjectPanel/Members/NewMember';
import Settings from '../components/ProjectPanel/Members/Settings';

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
