import { useContext } from "react";

import { Link } from "react-router-dom";

import { Avatar, Button, Form, Input, Upload, Row, Col, message } from "antd";
import { ArrowLeftOutlined, UploadOutlined } from "@ant-design/icons";
import classes from "../../../styles/Panel/User/Settings.module.scss";

import tempAvatar from "../../../assets/icons/avatar.ico";

import PanelLayout from "../../UI/Layout/PanelLayout";
import AuthContext from "../../../store/auth-context";

// Firebase Authentication模擬Update使用者資訊
const FIREBASE_KEY = "AIzaSyAaf6guV8zB9_4R5xwuDDiQM0zaNzQWuWA";
const UPDATE_API = `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${FIREBASE_KEY}`;

const Settings = () => {
  const [form] = Form.useForm();
  const authCtx = useContext(AuthContext);

  // TODO: 更新使用者資訊 POST /user/:uid
  const onUpdateUser = (values) => {
    fetch(UPDATE_API, {
      method: "POST",
      body: JSON.stringify({
        idToken: authCtx.token,
        displayName: values.username,
        photoUrl: values.avatar,
        email: values.email,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (response.ok) {
          message.success("成功更新個人資訊!");
        } else {
          message.error("無法更新個人資訊!");
        }
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  const avatarFile = (e) => {
    return e && e.fileList;
  };

  return (
    <PanelLayout>
      <div className={classes.update}>
        <h2>個人設定</h2>
        <Form
          form={form}
          name="settings"
          onFinish={onUpdateUser}
          scrollToFirstError
        >
          <Row style={{ marginBottom: "1rem", borderBottom: "1px solid #eee" }}>
            <Col span={12}>
              <h3>大頭照</h3>
              <p>上傳新的照片或移除當前的照片</p>
            </Col>
            <Col span={12}>
              <Avatar
                src={tempAvatar}
                size={60}
                style={{ marginBottom: "1rem" }}
              />
              <Form.Item
                name="upload"
                valuePropName="fileList"
                getValueFromEvent={avatarFile}
              >
                <Upload
                  name="avatar"
                  action="/upload.do"
                  listType="picture"
                  maxCount={1}
                >
                  <Button icon={<UploadOutlined />}>上傳照片</Button>
                </Upload>
              </Form.Item>
            </Col>
          </Row>
          <Row
            style={{
              marginBottom: "1rem",
              padding: "1rem 0",
              borderBottom: "1px solid #eee",
            }}
          >
            <Col span={12}>
              <h3>主設定</h3>
              <p>資訊將會顯示在個人簡介中</p>
            </Col>
            <Col span={12}>
              <Form.Item name="username" label="Username">
                <Input />
              </Form.Item>
              <Form.Item name="email" label="E-mail">
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row
            style={{
              marginBottom: "1rem",
              padding: "1rem 0 2rem 0",
              borderBottom: "1px solid #eee",
            }}
          >
            <Col span={12}>
              <h3>重設密碼</h3>
              <section style={{ paddingRight: "6rem" }}>
                英文大小寫限制、符號、數字等，密碼設定長度至少為8個字元的字串，應使用數字、大小寫字母及符號
                <br />
                (例如：# % 混合穿插的密碼字串)
              </section>
              <br/>
              <b>成功更新密碼後將返回登入頁面</b>
            </Col>
            <Col span={12}>
              <Form.Item name="current_password" label="Current Password">
                <Input.Password />
              </Form.Item>
              <Form.Item name="password" label="New Password">
                <Input.Password />
              </Form.Item>
              <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={["password"]}
                hasFeedback
                rules={[
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error("New Passwords are not match!")
                      );
                    },
                  }),
                ]}
              >
                <Input.Password />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Form.Item>
              <Link to="/users">
                <Button
                  danger
                  type="default"
                  style={{
                    color: "#000",
                    border: "1px solid #ccc",
                    marginRight: '41.5rem'
                  }}
                >
                  <ArrowLeftOutlined />
                  返回列表
                </Button>
              </Link>
              <Button
                type="primary"
                htmlType="submit"
                style={{ fontWeight: "600" }}
              >
                更新個人資料
              </Button>
            </Form.Item>
          </Row>
        </Form>
      </div>
    </PanelLayout>
  );
};

export default Settings;
