import {
  useRouteMatch,
  useHistory,
} from 'react-router-dom';

import classes from '../../../styles/Panel/Projects/ProjectContent.module.css';
import { Layout, Button } from 'antd';

import ProjectList from './ProjectList';
import { Fragment } from 'react';

const ProjectContent = () => {
  const { Content } = Layout;

  const { url } = useRouteMatch();

  const history = useHistory();

  const newProjectHandler = () => {
    console.log(url);
    history.push(`${url}/new-project`);
  };

  return (
    <Fragment>
      <Content style={{ margin: '0 30px' }}>
        <div className={classes.title}>
          <h3>Projects</h3>
          <Button
            type='primary'
            onClick={newProjectHandler}
            style={{ fontWeight: '700' }}>
            +新專案
          </Button>
        </div>
        <ProjectList />
      </Content>
    </Fragment>
  );
};

export default ProjectContent;
