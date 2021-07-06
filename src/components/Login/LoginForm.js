import { useContext, useRef } from 'react';
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

import ReCAPTCHA from 'react-google-recaptcha';

import AuthContext from '../../store/auth-context';

// 目前使用 Firebase Authentication模擬登入
const FIREBASE_KEY = 'AIzaSyAaf6guV8zB9_4R5xwuDDiQM0zaNzQWuWA';
const SIGN_IN_API = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_KEY}`;

const LoginForm = () => {
  const [form] = Form.useForm();
  const history = useHistory();

  const authCtx = useContext(AuthContext);

  const recaptchaRef = useRef();

  // TODO: 驗證USER登入 -> POST/auth/login
  const onLoginAuth = (values) => {
    // Google ReCaptcha人機驗證 
    recaptchaRef.current.execute();
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
    if (e.target.checked) {
      //...
    }
  };

  const onRecapcha = (value) => {
    console.log('Captcha: ', value);
  };

  return (
    <Card
      size='small'
      hoverable
      style={{ width: '50rem', height: '100%', margin: '10rem auto' }}>
      <span className={classes.logo} />
      <Form
        name='login'
        form={form}
        onFinish={onLoginAuth}
        style={{
          width: '50%',
          left: '50%',
          margin: '2rem 0 1rem 0',
          padding: '0.5rem',
          backgroundColor: '#fff',
        }}>
        <Form.Item
          name='email'
          rules={[
            {
              type: 'email',
              message: 'The email is invalid!',
            },
            {
              required: true,
              message: 'The email field should not be empty!',
            },
          ]}>
          <Input prefix={<MailOutlined />} placeholder='Email@domain.com' />
        </Form.Item>
        <Form.Item
          name='password'
          rules={[
            {
              required: true,
              message: 'The password field shoud not be empty!',
            },
            {
              min: 6,
              message: 'The password should at least contain 6 characters!'
            }
          ]}>
          <Input.Password
            placeholder='Password'
            prefix={<LockOutlined />}
          />
        </Form.Item>
        <Form.Item>
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey='6LdhtHcbAAAAAHDJsSvNZY1foj0BdpIo4CofBPib'
            theme='light'
            size='invisible'
            onChange={onRecapcha}
          />
        </Form.Item>
        <Form.Item>
          <Checkbox onChange={checkRemeberEmail}>記住我</Checkbox>
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
        <Space size={155}>
          <Typography.Link
            href='https://www.zerodimension.com.tw/default.aspx#contact'
            target='_blank'
            rel='noreferrer'>
            <Button
              type='link'
              style={{
                width: '100%',
                border: '1px solid #03a9f4',
                borderRadius: '5px',
              }}>
              HELP
            </Button>
          </Typography.Link>
          <Link to='/reset'>
            <Button
              type='link'
              style={{
                width: '100%',
                border: '1px solid #03a9f4',
                borderRadius: '5px',
              }}>
              Forgot Password?
            </Button>
          </Link>
        </Space>
      </Form>
    </Card>
  );
};

export default LoginForm;
