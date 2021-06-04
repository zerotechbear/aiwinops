import { useState, useRef, Fragment } from 'react';
import { useHistory } from 'react-router-dom';

import {  Input, Checkbox } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import classes from '../../styles/Login/LoginForm.module.css';

import Card from '../UI/Layout/Card';
import LoadingSpinner from '../UI/Layout/LoadingSpinner';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();

  const history = useHistory();

  // 顯示/不顯示密碼
  const showPasswordHandler = () => {
    setShowPassword((showPassword) => !showPassword);
  };

  // 提交表單
  const submitLoginHandler = (event) => {
    event.preventDefault();

    const emailInput = emailRef.current.value;
    const passwordInput = passwordRef.current.value;

    // 驗證使用者登入

    history.push('/home');
  };

  const resetFormHandler = () => {
    history.push('/reset');
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
              {showPassword ? (
                <Input
                  type='text'
                  prefix={<LockOutlined />}
                  placeholder='Password'
                  ref={passwordRef}
                  required
                />
              ) : (
                <Input
                  type='password'
                  prefix={<LockOutlined />}
                  placeholder='Password'
                  ref={passwordRef}
                  required
                />
              )}
            </div>
            <div className={classes.form__check}>
              <Checkbox
                type='checkbox'
                id='checkpsd'
                onClick={showPasswordHandler}
              />
              <label htmlFor='checkpsd'>Show Password</label>
              <button type='button' onClick={resetFormHandler}>
                Forget Password?
              </button>
            </div>
            <div className={classes.form__submit}>
              {!isLoading && <button type='submit'>LOGIN</button>}
              {isLoading && <LoadingSpinner />}
            </div>
            <div className={classes.form__help}>
              <button type='button'>Help</button>
            </div>
          </form>
        </Card>
      </section>
    </Fragment>
  );
};

export default LoginForm;
