import { Fragment } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';

import classes from '../../../styles/Panel/Projects/ProjectContent.module.css';
import { Layout, Button } from 'antd';


import QuotaList from './QuotaList';

const QuotaContent = () => {
  const { Content } = Layout;

  const { url } = useRouteMatch();

  const history = useHistory();

  const quotaUpgrade = () => {
    console.log(url);
    history.push(`${url}/quota-upgrade`);
  };

  return (
    <Fragment>
      <Content style={{ margin: '0 30px' }}>
        <div className={classes.title}>
          <h3>Quota</h3>
          <Button
            type='primary'
            onClick={quotaUpgrade}
            style={{ fontWeight: '700' }}>
            Upgrade
          </Button>
        </div>
        <QuotaList />
      </Content>
    </Fragment>
  );
};

export default QuotaContent;
