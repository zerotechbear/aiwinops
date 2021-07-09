import { useHistory } from "react-router-dom";

import { Button } from "antd";
import classes from "../../../styles/Panel/Projects/NewProject.module.scss";

import PanelLayout from "../../UI/Layout/PanelLayout";

const QuotaUpgrade = () => {
  const history = useHistory();

  const onCancelUpgrade = () => {
    history.push('/quota')
  }

  return (
    <PanelLayout>
      <section className={classes.create}>
        <h2>調整專案額度</h2>
        <p>Upgrade</p>
        <p>Upgrade</p>
        <p>Upgrade</p>
        <p>Upgrade</p>
        <p>Upgrade</p>
        <p>Upgrade</p>
        <p>Upgrade</p>
        <p>Upgrade</p>
        <p>Upgrade</p>
        <p>Upgrade</p>
        <Button danger type="default" onClick={onCancelUpgrade}>
          Cancel
        </Button>
      </section>
    </PanelLayout>
  );
};

export default QuotaUpgrade;
