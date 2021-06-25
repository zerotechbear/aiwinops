// import { useHistory } from 'react-router-dom';

import classes from '../../../styles/Panel/Projects/NewProject.module.scss';

import PanelLayout from '../../UI/Layout/PanelLayout';

const QuotaUpgrade = () => {
  // const history = useHistory();
  
  return (
    <PanelLayout>
      <section className={classes.project}>
        <h2>調整專案額度</h2>
      </section>
    </PanelLayout>
  );
};

export default QuotaUpgrade;
