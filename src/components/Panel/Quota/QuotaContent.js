import { useRouteMatch, useHistory } from 'react-router-dom';

import classes from '../../../styles/Panel/Title.module.scss';
import { Button } from 'antd';

import QuotaList from './QuotaList';

const QuotaContent = () => {
  const { url } = useRouteMatch();
  const history = useHistory();

  const quotaUpgrade = () => {
    console.log(url);
    history.push(`${url}/quota-upgrade`);
  };

  return (
    <>
      <div className={classes.title}>
        <h3>Quota</h3>
        <Button
          type='primary'
          onClick={quotaUpgrade}
          style={{ fontWeight: '700' }}>
          升級額度
        </Button>
      </div>
      <div style={{ width: '100%', height: '550px', overflowY: 'scroll' }}>
        <QuotaList />
      </div>
    </>
  );
};

export default QuotaContent;
