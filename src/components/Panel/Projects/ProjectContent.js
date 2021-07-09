import { useHistory } from "react-router";
import { Button } from "antd";
import classes from "../../../styles/Panel/Title.module.scss";

import ProjectList from "./ProjectList";

const ProjectContent = (props) => {
  const history = useHistory();

  const onNewProject = () => {
    history.push("projects/create");
  };

  return (
    <div>
      <div className={classes.title}>
        <h3>專案</h3>
        {localStorage.getItem("level") === "owner" ? (
          <Button
            type="primary"
            onClick={onNewProject}
            style={{ fontWeight: "700" }}
          >
            +新專案
          </Button>
        ) : (
          ""
        )}
      </div>
      <ProjectList />
    </div>
  );
};

export default ProjectContent;
