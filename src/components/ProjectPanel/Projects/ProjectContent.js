import { useHistory } from 'react-router-dom';

import classes from '../../../styles/ProjectPanel/Projects/ProjectContent.module.css';
import { Layout, Button } from 'antd';

import ProjectList from './ProjectList';

const ProjectContent = () => {
  const { Content } = Layout;

  const history = useHistory();

  const newProjectHandler = () => {
    history.push('/new-project');
  };

  return (
    <Content style={{ margin: '0 30px'}}>
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
  );
};

export default ProjectContent;
