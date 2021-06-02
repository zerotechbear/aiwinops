import { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import classes from '../../../styles/UI/Login/LoginForm.module.css';

import Card from '../Layout/Card';
import LoadingSpinner from '../Layout/LoadingSpinner';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();

  const history = useHistory();

  const showPasswordHandler = () => {
    setShowPassword((showPassword) => !showPassword);
  };

  const submitLoginHandler = (event) => {
    event.preventDefault();

    // const emailInput = emailRef.current.value;
    // const passwordInput = passwordRef.current.value;

    setIsLoading(true);
    // Authenticate User ...

    setIsLoading(false);
  };

  const resetFormHandler = () => {
    history.push('/reset');
  }

  return (
    <section className={classes.login}>
      <Card>
        <form
          className={classes.form}
          onSubmit={submitLoginHandler}>
          <div className={classes.form__control}>
            <h3>Log in With Email Account</h3>
            <label htmlFor='email'>Email</label>
            <input
              type='text'
              id='email'
              placeholder='name@domain.com'
              ref={emailRef}
              required
            />
            <label htmlFor='password'>Password</label>
            {showPassword ? (
              <input
                type='text'
                id='text'
                placeholder='Password'
                ref={passwordRef}
                required
              />
            ) : (
              <input
                type='password'
                id='password'
                placeholder='Password'
                ref={passwordRef}
                required
              />
            )}
          </div>
          <div className={classes.form__check}>
            <input
              type='checkbox'
              id='checkpsd'
              onClick={showPasswordHandler}
            />
            <label htmlFor='checkpsd'>Show Password</label>
          </div>
          <div className={classes.form__submit}>
            {!isLoading && (
              <button type='submit'>Login</button>
            )}
            {isLoading && <LoadingSpinner />}
          </div>
          <div className={classes.form__help}>
            <button
              type='button'
              onClick={resetFormHandler}>
              Forget Your Password?
            </button>
            <button type='button'>Help</button>
          </div>
        </form>
      </Card>
    </section>
  );
};

export default LoginForm;
