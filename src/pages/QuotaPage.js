import { Route, Switch, useRouteMatch } from 'react-router-dom';

import QuotaPanel from '../components/ProjectPanel/Quota/QuotaPanel';
import QuotaUpgrade from '../components/ProjectPanel/Quota/QuotaUpgrade';

const QuotaPage = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}`} exact>
        <QuotaPanel />
      </Route>
      <Route path={`${path}/quota-upgrade`}>
        <QuotaUpgrade />
      </Route>
    </Switch>
  );
};

export default QuotaPage;
