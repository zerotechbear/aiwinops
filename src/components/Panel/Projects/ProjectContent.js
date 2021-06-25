import { useContext } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';

import classes from '../../../styles/Panel/Title.module.scss';

import { Button } from 'antd';

import ProjectList from './ProjectList';

import AuthContext from '../../../store/auth-context';

const ProjectContent = () => {
  const { url } = useRouteMatch();
  const history = useHistory();

  const authCtx = useContext(AuthContext);

  const newProjectHandler = () => {
    console.log(url);
    history.push(`${url}/new-project`);
  };
  
  return (
    <div>
      <div className={classes.title}>
        <h3>Projects</h3>
        {authCtx.userInfo.level === 'owner' ? (
          <Button
            type='primary'
            onClick={newProjectHandler}
            style={{ fontWeight: '700' }}>
            +新專案
          </Button>
        ) : (
          ''
        )}
      </div>
      <ProjectList />
    </div>
  );
};

export default ProjectContent;
