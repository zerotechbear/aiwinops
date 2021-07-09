import { useHistory } from "react-router-dom";

import { Button, Checkbox, Form, Input, message } from "antd";
import classes from "../../../styles/Panel/User/NewUser.module.scss";

import PanelLayout from "../../UI/Layout/PanelLayout";

// 目前使用 Firebase Realtime Database 模擬會員資料
const MEMBER_URL = "https://aiwinops-default-rtdb.firebaseio.com/members.json";

// const FIREBASE_KEY = 'AIzaSyAaf6guV8zB9_4R5xwuDDiQM0zaNzQWuWA';
// const SIGN_UP_API = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_KEY}`;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 16,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const NewUser = () => {
  const [form] = Form.useForm();
  const history = useHistory();

  // TODO: 新增會員資料 -> POST/MemberData
  const registerNewMember = (values) => {
    console.log("Received values of form: ", values);
    fetch(MEMBER_URL, {
      method: "POST",
      body: JSON.stringify({
        register_time: new Date().toISOString().toString().slice(0, -5),
        email: values.email,
        password: values.password,
        username: values.username,
        level: values.level,
        status: true,
        agreement: values.agreement,
        returnSecureToken: true,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (response.ok) {
          message.success("You have created a new member!");
          return response.json();
        } else {
          return message.warning("Failed to create new member!");
        }
      })
      .catch((error) => {
        throw new Error(error);
      });

    setTimeout(() => {
      history.replace("/users");
    }, 1000);
  };

  const onCancelUser = () => {
    history.push("/users");
  };

  return (
    <PanelLayout>
      <section className={classes.form}>
        <h2>新增成員</h2>
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={registerNewMember}
          scrollToFirstError
        >
          <Form.Item
            name="username"
            label="Username"
            rules={[
              {
                required: true,
                message: "Please enter username!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "The email format is invalid!",
              },
              {
                required: true,
                message: "Please enter email!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password autoComplete="password" />
          </Form.Item>
          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Passwords are not match!"));
                },
              }),
            ]}
          >
            <Input.Password autoComplete="confirm" />
          </Form.Item>
          {/* <Form.Item
            name='level'
            label='Level'
            initialValue='Owner'
            rules={[
              {
                required: true,
                message: 'Please provide authorization to the member!',
              },
            ]}>
            <Select>
              <Option value='Owner'>Owner</Option>
              <Option value='Manager'>Manager</Option>
              其他的權限設定
            </Select>
          </Form.Item> */}
          <Form.Item
            {...tailFormItemLayout}
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error("Please read the agreement!")),
              },
            ]}
          >
            <Checkbox>
              我已經閱讀
              <a
                href="https://www.zerodimension.com.tw/html/HDUT%20PBL%20PRIVACY.htm"
                target="_blank"
                rel="noreferrer"
              >
                相關聲明
              </a>
            </Checkbox>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button
              type="default"
              danger
              onClick={onCancelUser}
              style={{ marginRight: "7rem" }}
            >
              取消
            </Button>
            <Button type="primary" htmlType="submit">
              新增會員
            </Button>
          </Form.Item>
        </Form>
      </section>
    </PanelLayout>
  );
};

export default NewUser;
