import { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import classes from '../../styles/Login/LoginForm.module.scss';

import {
  Button,
  Card,
  Checkbox,
  Form,
  Input,
  Space,
  Typography,
  message,
} from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';

import AuthContext from '../../store/auth-context';

// 目前使用 Firebase Authentication模擬登入
const FIREBASE_KEY = 'AIzaSyAaf6guV8zB9_4R5xwuDDiQM0zaNzQWuWA';
const SIGN_IN_API = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_KEY}`;

const LoginForm = () => {
  const [form] = Form.useForm();
  const history = useHistory();

  const authCtx = useContext(AuthContext);

  // TODO: 驗證USER登入 -> POST/auth/login
  const loginAuthHandler = (values) => {
    fetch(SIGN_IN_API, {
      method: 'POST',
      body: JSON.stringify({
        email: values.email,
        password: values.password,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(
          message.error('The email is invalid or password is incorrect!'),
        );
      })
      .then((data) => {
        authCtx.login(data.idToken);
        message.success('Login!');
        authCtx.userInfoHandler(data.email, '');
        if (data.email === 'owner@owner.com') {
          authCtx.userInfoHandler(data.email, 'owner');
          message.success('You are logged in as Owner!');
        }
        history.replace(`/project/${data.email}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const checkRemeberEmail = (e) => {
    // 若核可 -> 儲存Email到Cookies
    if(e.target.checked) {
      //...
    }
  };

  return (
    <Card
      size='small'
      hoverable
      style={{ width: '50rem', height: '100%', margin: '10rem auto' }}>
      <span className={classes.logo} />
      <Form
        form={form}
        name='login'
        onFinish={loginAuthHandler}
        scrollToFirstError
        style={{
          width: '45%',
          left: '50%',
          marginTop: '3.5rem',
          backgroundColor: '#fff',
          position: 'relative',
        }}>
        <Form.Item
          name='email'
          rules={[
            {
              type: 'email',
              message: 'The email format is invalid!',
            },
            {
              required: true,
              message: 'The email is empty!',
            },
          ]}>
          <Input prefix={<MailOutlined />} placeholder='Email@domain.com' />
        </Form.Item>
        <Form.Item
          name='password'
          rules={[
            {
              required: true,
              message: 'The password is empty!',
            },
          ]}>
          <Input.Password
            placeholder='PASSWORD'
            autoComplete='on'
            prefix={<LockOutlined />}
          />
        </Form.Item>
        <Form.Item>
          <Checkbox onChange={checkRemeberEmail}>Remember Me</Checkbox>
        </Form.Item>
        <Form.Item>
          <Button
            type='primary'
            htmlType='submit'
            style={{
              width: '100%',
              fontWeight: '600',
              borderRadius: '5px',
            }}>
            LOGIN
          </Button>
        </Form.Item>
        <Space size={160}>
          <Typography.Link
            href='https://www.zerodimension.com.tw/default.aspx#contact'
            target='_blank'
            rel='noreferrer'>
            <Button type='link' style={{ width: '100%', color: '#03a9f4' }}>
              HELP
            </Button>
          </Typography.Link>
          <Link to='/reset'>
            <Button type='link'>Find Password</Button>
          </Link>
        </Space>
      </Form>
    </Card>
  );
};

export default LoginForm;
