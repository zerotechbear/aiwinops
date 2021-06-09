import { useHistory } from 'react-router-dom';

import { Form, Input, Checkbox, Button, Select } from 'antd';
import classes from '../../../styles/ProjectPanel/Member/NewMember.module.css';

import NavHeader from '../../UI/Layout/Header';

// 目前使用 Firebase Realtime Database 模擬會員資料
const MEMBER_URL = 'https://aiwinops-default-rtdb.firebaseio.com/members.json';

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

const NewMember = () => {
  const [form] = Form.useForm();
  const history = useHistory();

  const { Option } = Select;

  // TODO: 新增會員資料 -> POST/MemberData
  const registerNewMember = (values) => {
    console.log('Received values of form: ', values);
    fetch(MEMBER_URL, {
      method: 'POST',
      body: JSON.stringify({
        email: values.email,
        password: values.password,
        username: values.username,
        level: values.level,
        status: true,
        agreement: values.agreement,
        returnSecureToken: true,
      }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        throw new Error(error);
      });
    history.replace('/members');
  };

  return (
    <div>
      <NavHeader />
      <section className={classes.form}>
        <h2>New Member</h2>
        <Form
          {...formItemLayout}
          form={form}
          name='register'
          onFinish={registerNewMember}
          scrollToFirstError>
          <Form.Item
            name='username'
            label='Username'
            rules={[
              {
                required: true,
                message: 'Please enter username!',
              },
            ]}>
            <Input />
          </Form.Item>
          <Form.Item
            name='email'
            label='E-mail'
            rules={[
              {
                type: 'email',
                message: 'The email format is invalid!',
              },
              {
                required: true,
                message: 'Please enter email!',
              },
            ]}>
            <Input />
          </Form.Item>
          <Form.Item
            name='password'
            label='Password'
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}>
            <Input.Password />
          </Form.Item>
          <Form.Item
            name='confirm'
            label='Confirm Password'
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Passwords are not match!'));
                },
              }),
            ]}>
            <Input.Password />
          </Form.Item>
          <Form.Item
            name='level'
            label='Level'
            rules={[
              {
                required: true,
                message: 'Please provide authorization to the member!',
              },
            ]}>
            <Select defaultValue='Annotator'>
              <Option value='Owner'>Owner</Option>
              <Option value='Manager'>Manager</Option>
              {/* 其他的權限設定 */}
            </Select>
          </Form.Item>
          <Form.Item
            {...tailFormItemLayout}
            name='agreement'
            valuePropName='checked'
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error('Please read the agreement!')),
              },
            ]}>
            <Checkbox>
              我已經閱讀
              <a href='https://www.cathaysite.com.tw/uploads/11datademand/02/1816_1.pdf'>
                相關聲明
              </a>
            </Checkbox>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type='primary' htmlType='submit'>
              新增會員
            </Button>
          </Form.Item>
        </Form>
      </section>
    </div>
  );
};

export default NewMember;
