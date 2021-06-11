import { Route, Switch, useRouteMatch } from 'react-router-dom';

import ReportPanel from '../components/Panel/Report/ReportPanel';

const ReportPage = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}`} exact>
        <ReportPanel />
      </Route>
    </Switch>
  );
};

export default ReportPage;
