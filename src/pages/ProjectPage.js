import { Route, Switch, useRouteMatch } from 'react-router-dom';
import NewProject from '../components/ProjectPanel/Projects/NewProject';
import ProjectPanel from '../components/ProjectPanel/Projects/ProjectPanel';

const ProjectPage = () => {
  const { path } = useRouteMatch();  
  return (
    <Switch>
      <Route path={`${path}`} exact>
        <ProjectPanel />
      </Route>
      <Route path={`${path}/new-project`}>
        <NewProject />
      </Route>
    </Switch>
  );
};

export default ProjectPage;
