import { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import classes from '../../styles/Login/LoginForm.module.css';
import { Form, Input, Button, message } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';

import Card from '../UI/Layout/Card';

import AuthContext from '../../store/auth-context';

// 目前使用 Firebase Authentication模擬登入
const FIREBASE_KEY = 'AIzaSyAaf6guV8zB9_4R5xwuDDiQM0zaNzQWuWA';
const SIGN_IN_API = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_KEY}`;

const LoginForm = () => {
  const [form] = Form.useForm();

  const authCtx = useContext(AuthContext);
  const history = useHistory();

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

  return (
    <section className={classes.login}>
      <Card>
        <span className={classes.logo} />
        <section className={classes.form}>
          <h2>Member Login</h2>
          <Form
            form={form}
            name='login'
            onFinish={loginAuthHandler}
            scrollToFirstError>
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
                placeholder='Password'
                autoComplete='on'
                prefix={<LockOutlined />}
              />
            </Form.Item>
            <div className={classes.submit}>
              <Button type='primary' htmlType='submit'>
                LOGIN
              </Button>
            </div>
            <div className={classes.help}>
              <a
                href='https://www.zerodimension.com.tw/default.aspx#contact'
                target='_blank'
                rel='noreferrer'>
                <Button type='default'>Help</Button>
              </a>
              <Link to='/reset'>
                <Button>Forget Password?</Button>
              </Link>
            </div>
          </Form>
        </section>
      </Card>
    </section>
  );
};

export default LoginForm;
