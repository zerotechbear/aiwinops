import { useState } from "react";
import { useHistory } from "react-router-dom";
import { CirclePicker } from "react-color";

import { Button, Checkbox, Drawer, Form, Input, message } from "antd";
import classes from "../../../styles/Panel/Projects/NewProject.module.scss";

import PanelLayout from "../../UI/Layout/PanelLayout";

const PROJECT_URL =
  "https://aiwinops-default-rtdb.firebaseio.com/projects.json";

const NewProject = () => {
  const [form] = Form.useForm();
  const [projectColor, setProjectColor] = useState("#fff");
  const [showDrawer, setShowDrawer] = useState(false);
  const history = useHistory();

  const { TextArea } = Input;

  const onGetColor = (color) => {
    setProjectColor(color.hex);
  };

  // TODO: 新增專案 POST /projects/create
  const onNewProject = (values) => {
    fetch(PROJECT_URL, {
      method: "POST",
      body: JSON.stringify({
        build_time: new Date().toISOString().toString().slice(0, -5).trim("T"),
        name: values.project_name,
        manager: values.project_manager,
        color: values.project_color.hex,
        description: values.project_description,
        agreement: values.project_agreement,
        status: "In Progress",
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (response.ok) {
          message.success("You have created a new project!");
          return response.json();
        } else {
          return message.warning("Failed to create new project!");
        }
      })
      .catch((error) => {
        throw new Error(error);
      });

    setTimeout(() => {
      history.push(`/projects`);
    }, 1000);
  };

  const onShowDrawer = () => {
    setShowDrawer(true);
  };

  const onNotShowDrawer = () => {
    setShowDrawer(false);
  };

  const onCancelProject = () => {
    history.push(`/projects`);
  };

  return (
    <PanelLayout>
      <section className={classes.create}>
        <h2>新專案</h2>
        <Form
          form={form}
          name="project"
          onFinish={onNewProject}
          scrollToFirstError
        >
          <div className={classes.fileds}>
            <h4>專案名稱</h4>
            <Form.Item
              name="project_name"
              rules={[
                {
                  required: true,
                  message: "Project name should not be empty!",
                },
              ]}
            >
              <Input placeholder="Project Name" allowClear />
            </Form.Item>
            <h4>管理者</h4>
            <Form.Item
              name="project_manager"
              rules={[
                {
                  required: true,
                  message: "Project manager should be provided!",
                },
              ]}
            >
              <Input placeholder="Project Manager" allowClear />
            </Form.Item>
            <h4>專案顏色</h4>
            <Form.Item
              name="project_color"
              rules={[
                {
                  required: true,
                  message: "Choose color for new project!",
                },
              ]}
            >
              <CirclePicker
                width={300}
                color={projectColor}
                onChangeComplete={onGetColor}
              />
            </Form.Item>
            <h4>專案描述(Optional)</h4>
            <Form.Item name="project_description">
              <TextArea
                placeholder="Project Description"
                rows={5}
                maxLength={300}
                showCount
                allowClear
                style={{ marginBottom: "1.5rem" }}
              />
            </Form.Item>
          </div>
          <Form.Item
            name="project_agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error("使用服務前請先閱讀說明")),
              },
            ]}
          >
            <div className={classes.protocol}>
              <h1>資料協議</h1>
              <section>
                請您在開始使用AIWin系列產品(以下簡稱"本產品")前，務必仔細閱讀並同意《用戶協議》(以下簡稱"本協議")
                中規定的所有權利和限制。
              </section>
              <Button type="ghost" onClick={onShowDrawer}>
                資料協議
              </Button>
              <Drawer
                title="資料協議"
                width={720}
                onClose={onNotShowDrawer}
                visible={showDrawer}
                headerStyle={{ fontWeight: 700 }}
                bodyStyle={{ padding: 20 }}
                footer={
                  <div style={{ margin: "1rem" }}>
                    <Button type="primary" onClick={onNotShowDrawer}>
                      Confirm
                    </Button>
                  </div>
                }
              ></Drawer>
              <Checkbox style={{ marginLeft: "2rem" }}>接受</Checkbox>
            </div>
          </Form.Item>
          <Form.Item noStyle>
            <div className={classes.action}>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  fontWeight: "550",
                  backgroundColor: "#096dd9",
                  borderColor: "#096dd9",
                }}
              >
                建立專案
              </Button>
              <Button
                type="default"
                danger
                onClick={onCancelProject}
                style={{ marginLeft: "1rem" }}
              >
                取消
              </Button>
            </div>
          </Form.Item>
        </Form>
      </section>
    </PanelLayout>
  );
};

export default NewProject;
