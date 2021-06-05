import { useState, useRef, Fragment } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Input } from 'antd';
import {
  MailOutlined,
  LockOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
} from '@ant-design/icons';
import classes from '../../styles/Login/LoginForm.module.css';

import Card from '../UI/Layout/Card';
import LoadingSpinner from '../UI/Modal/LoadingSpinner';

const LoginForm = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();

  const history = useHistory();

  // TODO: 驗證USER登入
  const submitLoginHandler = (event) => {
    event.preventDefault();


    history.replace('/home');
  };

  return (
    <Fragment>
      <section className={classes.login}>
        <Card>
          <span className={classes.logo} />
          <form className={classes.form} onSubmit={submitLoginHandler}>
            <div className={classes.form__field}>
              <h3>Member Login</h3>
              <Input
                className={classes.email}
                type='text'
                prefix={<MailOutlined />}
                placeholder='Email@domain.com'
                ref={emailRef}
                required
              />
              <Input.Password
                placeholder='Password'
                prefix={<LockOutlined />}
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </div>
            <div className={classes.form__submit}>
              {!isLoading ? (
                <button type='submit'>LOGIN</button>
              ) : (
                <LoadingSpinner />
              )}
            </div>
            <div className={classes.form__help}>
              <button type='button'>Help</button>
              <button type='button'>
                <Link to='/reset' style={{ width: '100%' }}>
                  Forget Password?
                </Link>
              </button>
            </div>
          </form>
        </Card>
      </section>
    </Fragment>
  );
};

export default LoginForm;
