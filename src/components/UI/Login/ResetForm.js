import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import classes from '../../../styles/UI/Login/ResetForm.module.css';

import Card from '../Layout/Card';

const ResetForm = (props) => {
  const resetRef = useRef();
  const history = useHistory();

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
            <label htmlFor='email'>Email</label>
            <input
              type='text'
              id='email'
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