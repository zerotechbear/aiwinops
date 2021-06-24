import classes from '../../../styles/Panel/Title.module.scss';

import DashboardGraph from './DashboardGraph';

const DashboardContent = () => {
  return (
    <>
      <div className={classes.title}>
        <h3>Dashboard</h3>
      </div>
      <div
        style={{
          width: '100%',
          height: '560px',
          overflowY: 'scroll',
          padding: '20px',
          backgroundColor: '#fff',
        }}>
        <DashboardGraph />
      </div>
    </>
  );
};

export default DashboardContent;
