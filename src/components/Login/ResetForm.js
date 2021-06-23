import { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

import classes from '../../styles/Login/ResetForm.module.scss';

import { Button, Card, Form, Input, message } from 'antd';
import { MailOutlined, ArrowLeftOutlined } from '@ant-design/icons';

// import Card from '../UI/Layout/Card';

// 目前使用 Firebase Authentication模擬登出
const FIREBASE_KEY = 'AIzaSyAaf6guV8zB9_4R5xwuDDiQM0zaNzQWuWA';
const RESET_API = `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${FIREBASE_KEY}`;

const ResetForm = (props) => {
  const [form] = Form.useForm();
  const history = useHistory();

  const [isExist, setIsExist] = useState(true);

  // TODO: 驗證USER登入 -> POST/auth/reset -> 發送重設密碼信件給已註冊的使用者
  const resetPasswordHandler = (values) => {
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
          message.success('Reset email is sent, please check your email.');
          setTimeout(() => {
            history.push('/');
          }, 2000);
        } else {
          message.error('Email account does not exist!');
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
    <Card
      title='Reset Password'
      hoverable
      headStyle={{
        textAlign: 'center',
        fontSize: '1.25rem',
      }}
      style={{
        width: '25rem',
        margin: '10rem auto',
      }}>
      <Form
        form={form}
        onValuesChange={emailEnter}
        onFinish={resetPasswordHandler}
        style={{
          width: '80%',
          margin: 'auto',
        }}>
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
          <Input prefix={<MailOutlined />} placeholder='Email@domain.com' />
        </Form.Item>
        <div className={classes.send}>
          <Form.Item>
            <Link to='/'>
              <Button type='default' style={{ color: '#000' }}>
                <ArrowLeftOutlined />
                LOGIN
              </Button>
            </Link>
          </Form.Item>
          <Form.Item>
            <Button type='primary' htmlType='submit'>
              SEND
            </Button>
          </Form.Item>
        </div>
      </Form>
    </Card>
  );
};

export default ResetForm;
