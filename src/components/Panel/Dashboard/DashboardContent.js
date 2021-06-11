import { Fragment } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';

import classes from '../../../styles/Panel/Projects/ProjectContent.module.css';
import { Layout } from 'antd';

import DashboardGraph from './DashboardGraph';

const DashboardContent = () => {
  const { Content } = Layout;

  const { url } = useRouteMatch();

  const history = useHistory();
  console.log(url);
  console.log(history);

  return (
    <Fragment>
      <Content style={{ margin: '0 30px' }}>
        <div className={classes.title}>
          <h3>Dashboard</h3>
        </div>
        <DashboardGraph />
      </Content>
    </Fragment>
  );
};

export default DashboardContent;
