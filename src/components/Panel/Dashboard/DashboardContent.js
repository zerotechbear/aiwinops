import classes from '../../../styles/Panel/Title.module.scss';

import DashboardGraph from './DashboardGraph';

const DashboardContent = () => {
  return (
    <>
      <div className={classes.title}>
        <h3>儀錶板</h3>
      </div>
      <div
        style={{
          width: '100%',
          height: '75vh',
          overflowY: 'scroll',
          padding: '15px 20px',
          backgroundColor: '#fff',
        }}>
        <DashboardGraph />
      </div>
    </>
  );
};

export default DashboardContent;
