import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Form, Input, Button } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import classes from '../../styles/Login/ResetForm.module.css';

import Card from '../UI/Layout/Card';
import Message from '../UI/Modal/Message';

const FIREBASE_KEY = 'AIzaSyAaf6guV8zB9_4R5xwuDDiQM0zaNzQWuWA';
const RESET_API = `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${FIREBASE_KEY}`;

const ResetForm = (props) => {
  const [form] = Form.useForm();
  const history = useHistory();

  const [isExist, setIsExist] = useState(true);

  // TODO: 發送重設密碼信件給已註冊的使用者
  const submitResetHandler = (values) => {
    console.log(values);
    fetch(RESET_API, {
      method: 'POST',
      body: JSON.stringify({
        email: values.email,
        requestType: 'PASSWORD_RESET',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log('Send');
          history.push('/');
        } else {
          setIsExist(false);
        }
      })
      .catch((error) => {
        throw new Error(error);
      });
  };

  const emailEnter = () => {
    setIsExist(true);
  };

  return (
    <section className={classes.reset}>
      {!isExist && <Message>Email does not exist!</Message> }
      <Card>
        <section className={classes.form}>
          <Form
            form={form}
            onValuesChange={emailEnter}
            onFinish={submitResetHandler}>
            <h3>Reset Password</h3>
            <Form.Item
              name='email'
              rules={[
                {
                  required: true,
                  message: 'Please enter your email to reset!',
                },
                {
                  type: 'email',
                  message: 'The email format is invalid!',
                },
                {
                  validator: async (_, value) => {
                    if (!isExist) {
                      throw new Error('Email does not exist!');
                    }
                  },
                },
              ]}>
              <Input prefix={<MailOutlined />} placeholder='name@domain.com' />
            </Form.Item>
            <div className={classes.form__submit}>
              <Form.Item>
                <Button type='primary' htmlType='submit'>
                  Send
                </Button>
              </Form.Item>
            </div>
          </Form>
        </section>
      </Card>
    </section>
  );
};

export default ResetForm;
