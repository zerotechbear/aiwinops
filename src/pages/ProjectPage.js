import { Route, Switch, useRouteMatch } from "react-router-dom";

import ProjectPanel from "../components/Panel/Projects/ProjectPanel";
import NewProject from "../components/Panel/Projects/NewProject";

const ProjectPage = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      {/* 根據路徑渲染 exact 不能在父組件使用exact，會造成路徑條件不同 */}
      <Route path={`${path}`} exact>
        <ProjectPanel />
      </Route>
      <Route path={`${path}/create`}>
        <NewProject />
      </Route>
      <Route path={`${path}/:projectId`}>
        <ProjectPanel />
      </Route>
    </Switch>
  );
};

export default ProjectPage;
