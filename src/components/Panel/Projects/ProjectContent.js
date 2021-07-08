import { withRouter } from "react-router";
import { Link, useRouteMatch } from "react-router-dom";

import { Button, Breadcrumb } from "antd";
import { PieChartOutlined } from "@ant-design/icons";
import classes from "../../../styles/Panel/Title.module.scss";

import ProjectList from "./ProjectList";

const breadcrumbMap = {
  "/projects": "專案",
  "/projects/Theta": "專案內容",
  "/projects/new-project:": "新增專案",
};

const ProjectContent = withRouter((props) => {
  const { url } = useRouteMatch();

  const { location, history } = props;
  const locationPath = location.pathname.split("/").filter((i) => i);
  const dynamicBreadcrumbItems = locationPath.map((_, index) => {
    const breadUrl = `/${locationPath.slice(0, index + 1).join("/")}`;
    return (
      <Breadcrumb.Item key={breadUrl}>
        <Link to={breadUrl}>{breadcrumbMap[breadUrl]}</Link>
      </Breadcrumb.Item>
    );
  });

  // const BreadcrumbItems = [].concat(dynamicBreadcrumbItems)

  const onNewProject = () => {
    history.push(`${url}/create`);
  };

  return (
    <div>
      <Breadcrumb><PieChartOutlined style={{fontSize: '120%'}} />  {dynamicBreadcrumbItems}</Breadcrumb>
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
});

export default ProjectContent;
