import classes from '../../../styles/Panel/Title.module.scss';

import DashboardGraph from './DashboardGraph';

const DashboardContent = () => {
  return (
    <>
      <div className={classes.title}>
        <h3>Dashboard</h3>
      </div>
      <DashboardGraph />
    </>
  );
};

export default DashboardContent;
