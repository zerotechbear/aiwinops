import { useHistory } from 'react-router-dom';

import { Layout, Button } from 'antd';
import classes from '../../../styles/ProjectPanel/Projects/ProjectContent.module.css';

import ProjectList from './ProjectList';

const ProjectContent = () => {
  const { Content } = Layout;

  const history = useHistory();

  const newProjectHandler = () => {
    history.push('/new-project');
  };

  return (
    <Layout style={{ backgroundColor: '#fff'}} >
      <Content className={classes.content} style={{ width: '100%'}}>
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
    </Layout>
  );
};

export default ProjectContent;
