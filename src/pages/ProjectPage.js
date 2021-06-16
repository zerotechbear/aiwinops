import { Route, Switch, useRouteMatch } from 'react-router-dom';
import NewProject from '../components/Panel/Projects/NewProject';
import ProjectPanel from '../components/Panel/Projects/ProjectPanel';

const ProjectPage = () => {
  
  const { path } = useRouteMatch();  
  console.log(path);
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
