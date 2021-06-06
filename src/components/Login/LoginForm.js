import { useState, Fragment } from 'react';
import { Link, useHistory } from 'react-router-dom';

import classes from '../../styles/Login/LoginForm.module.css';
import { Form, Input, Button } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';

import Card from '../UI/Layout/Card';
import Error from '../UI/Modal/Error';

const FIREBASE_KEY = 'AIzaSyAaf6guV8zB9_4R5xwuDDiQM0zaNzQWuWA';
const SIGN_IN_API = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_KEY}`;

const LoginForm = (props) => {
  const [isLoginFail, setIsLoginFail] = useState(false);


  const [form] = Form.useForm();

  const history = useHistory();

  const closeModal = () => {
    setIsLoginFail(false);
  };

  // TODO: 驗證USER登入 -> Email/Password
  const loginAuthHandler = (values) => {
    console.log('Login Auth: ', values);

    fetch(SIGN_IN_API, {
      method: 'POST',
      body: JSON.stringify({
        email: values.email,
        password: values.password,
        returnSecureToken: true
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          history.replace('/home');
          return response.json();
        } else {
          setIsLoginFail(true);
          console.log('Wrong');
        }
      })
      .catch((error) => {
        throw new Error(error);
      });
  };

  return (
    <Fragment>
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
                <Input
                  prefix={<MailOutlined />}
                  placeholder='Email@domain.com'
                />
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
                <Button type='default'>
                  <Link to='/reset'>Forget Password?</Link>
                </Button>
              </div>
            </Form>
            {isLoginFail && (
              <Error onCloseModal={closeModal}>
                The email or password is invalid{' '}
              </Error>
            )}
          </section>
        </Card>
      </section>
    </Fragment>
  );
};

export default LoginForm;
