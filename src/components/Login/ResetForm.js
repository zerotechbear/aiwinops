import { useRef } from 'react';
import { useHistory } from 'react-router-dom';

import { Input } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import classes from '../../styles/Login/ResetForm.module.css';

import Card from '../UI/Layout/Card';

const ResetForm = (props) => {
  const resetRef = useRef();
  const history = useHistory();

  // TODO: 發送重設密碼信件給已註冊的使用者
  const submitResetHandler = (event) => {
    event.preventDefault();

    // Send Reset Request...
    
    history.push('/');
  }

  return (
    <section className={classes.reset}>
      <Card>
        <form
          className={classes.form}
          onSubmit={submitResetHandler}>
          <div className={classes.form__control}>
            <h3>Reset Password</h3>
            <Input
              className={classes.input}
              type='text'
              prefix={<MailOutlined />}
              placeholder='name@domain.com'
              ref={resetRef}
              required
            />
          </div>
          <div className={classes.form__submit}>
            <button type='submit'>Send</button>
          </div>
        </form>
      </Card>
    </section>
  );
}

export default ResetForm;