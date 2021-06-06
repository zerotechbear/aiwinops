import { useHistory } from 'react-router-dom';

import { Form, Input, Checkbox, Button } from 'antd';
import classes from '../../../styles/ProjectPanel/Member/NewMember.module.css';

import NavHeader from '../../UI/Layout/Header';


const FIREBASE_KEY = 'AIzaSyAaf6guV8zB9_4R5xwuDDiQM0zaNzQWuWA';
const SIGN_UP_API = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_KEY}`;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 16,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const NewMember = () => {
  const [form] = Form.useForm();
  const history = useHistory();

  // TODO: 新增會員資料 -> POST/MemberData
  const registerNewMember = (values) => {
    console.log('Received values of form: ', values);
    fetch(SIGN_UP_API, {
      method: 'POST',
      body: JSON.stringify({
        email: values.email,
        password: values.password,
        name: values.username,
        returnSecureToken: true,
      }),
      headers: { 'Content-Type': 'application/json' },
    }).then(response => {
      return response.json();
    }).catch((error) => {
      throw new Error(error);
    });
    history.replace('/members');
  };

  return (
    <div>
      <NavHeader />
      <section className={classes.form}>
        <h2>New Member</h2>
        <Form
          {...formItemLayout}
          form={form}
          name='register'
          onFinish={registerNewMember}
          scrollToFirstError>
          <Form.Item
            name='username'
            label='Username'
            rules={[
              {
                required: true,
                message: 'Please enter username!',
              },
            ]}>
            <Input />
          </Form.Item>
          <Form.Item
            name='email'
            label='E-mail'
            rules={[
              {
                type: 'email',
                message: 'The email format is invalid!',
              },
              {
                required: true,
                message: 'Please enter email!',
              },
            ]}>
            <Input />
          </Form.Item>
          <Form.Item
            name='password'
            label='Password'
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}>
            <Input.Password />
          </Form.Item>
          <Form.Item
            name='confirm'
            label='Confirm Password'
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Passwords are not match!'));
                },
              }),
            ]}>
            <Input.Password />
          </Form.Item>

          <Form.Item
            {...tailFormItemLayout}
            name='agreement'
            valuePropName='checked'
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error('Please read the agreement!')),
              },
            ]}>
            <Checkbox>
              我已經閱讀
              <a href='https://www.cathaysite.com.tw/uploads/11datademand/02/1816_1.pdf'>
                相關聲明
              </a>
            </Checkbox>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type='primary' htmlType='submit'>
              新增會員
            </Button>
          </Form.Item>
        </Form>
      </section>
    </div>
  );

  // return (
  //   <div>
  //     <NavHeader />
  //     <form class={classes.form} onSubmit={newMemberHandler}>
  //       <h2>New Member</h2>
  //       <div className={classes.control}>
  //         <label htmlFor='username'>Username</label>
  //         <Input
  //           prefix={<UserOutlined />}
  //           placeholder='Enter username'
  //           id='username'
  //           allowClear
  //           required
  //         />
  //       </div>
  //       <div className={classes.control}>
  //         <label htmlFor='email'>Email</label>
  //         <Input
  //           prefix={<MailOutlined />}
  //           placeholder='Enter email'
  //           type='email'
  //           id='email'
  //           allowClear
  //           required
  //         />
  //       </div>
  //       <div className={classes.control}>
  //         <label htmlFor='password'>Password</label>
  //         <Input
  //           prefix={<LockOutlined />}
  //           placeholder='Enter password'
  //           id='password'
  //           allowClear
  //           required
  //         />
  //       </div>
  //       <div className={classes.control}>
  //         <label htmlFor='confirm'>Confirm Password</label>
  //         <Input
  //           prefix={<LockOutlined />}
  //           placeholder='Confirm password'
  //           id='confirm'
  //           allowClear
  //           required
  //         />
  //       </div>
  //       <div className={classes.action}>
  //         <button type='submit'>新增會員</button>
  //       </div>
  //     </form>
  //   </div>
  // );
};

export default NewMember;
