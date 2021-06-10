import { useHistory } from 'react-router-dom';

import classes from '../../../styles/ProjectPanel/Projects/NewProject.module.css';

import NavHeader from '../../UI/Layout/Header';

const QuotaUpgrade = () => {
  const history = useHistory();

  return (
    <div>
      <NavHeader />
      <section className={classes.project}>
        <h2>調整專案額度</h2>
      </section>
    </div>
  );
};

export default QuotaUpgrade;
