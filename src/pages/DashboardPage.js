import { Route, Switch, useRouteMatch } from 'react-router-dom';
import DashboardPanel from '../components/ProjectPanel/Dashboard/DashboardPanel';

const DashboardPage = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}`} exact>
        <DashboardPanel />;
      </Route>
    </Switch>
  );
};

export default DashboardPage;
