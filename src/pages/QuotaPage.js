import { Route, Switch, useRouteMatch } from 'react-router-dom';

import QuotaPanel from '../components/Panel/Quota/QuotaPanel';
import QuotaUpgrade from '../components/Panel/Quota/QuotaUpgrade';

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
