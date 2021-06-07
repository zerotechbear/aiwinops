import { useContext } from 'react';

import classes from '../../../styles/ProjectPanel/Member/Settings.module.css';
import { Form, Upload, Input, Avatar, Button } from 'antd';
import { UploadOutlined, UserOutlined } from '@ant-design/icons';

import NavHeader from '../../UI/Layout/Header';
import AuthContext from '../../../store/auth-context';

// 目前使用 Firebase Authentication模擬修改使用者資訊
const FIREBASE_KEY = 'AIzaSyAaf6guV8zB9_4R5xwuDDiQM0zaNzQWuWA';
const UPDATE_API = `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${FIREBASE_KEY}`;

const Settings = () => {
  const [form] = Form.useForm();
  const authCtx = useContext(AuthContext);

  const avatarFile = (e) => {
    return e && e.fileList;
  };

  // TODO: 更新使用者資訊 POST/uid/uinfo
  const updateProfile = (values) => {
    fetch(UPDATE_API, {
      method: 'POST',
      body: JSON.stringify({
        idToken: authCtx.token,
        displayName: values.username,
        photoUrl: values.avatar,
        email: values.email
      })
    })
  };

  return (
    <div>
      <NavHeader />
      <section className={classes.settings}>
        <h2>Settings</h2>
        <Form
          form={form}
          name='settings'
          onFinish={updateProfile}
          scrollToFirstError>
          <div className={classes.avatar}>
            <section className='left'>
              <h3>Public Avatar</h3>
              <p>
                You can change your avatar here or remove the current avatar to
                revert to UserOutlined.
              </p>
            </section>

            <section className='right'>
              <Avatar size={90} icon={<UserOutlined />} />
              <Form.Item
                name='upload'
                label='Upload Avatar'
                valuePropName='fileList'
                getValueFromEvent={avatarFile}>
                <Upload name='avatar' action='/upload.do' listType='picture'>
                  <Button icon={<UploadOutlined />}>Upload</Button>
                </Upload>
              </Form.Item>
            </section>
          </div>
          <div className={classes.main}>
            <section className='left'>
              <h3>Main Settings</h3>
              <p>This information will appear on your profile</p>
            </section>
            <section className='right'>
              <Form.Item name='username' label='Username'>
                <Input />
              </Form.Item>
              <Form.Item name='email' label='E-mail'>
                <Input />
              </Form.Item>
            </section>
          </div>
          <div className={classes.password}>
            <section className='left'>
              <h3>Change Password</h3>
              <p>
                You will be directed to the login page after you update your
                password
              </p>
            </section>
            <section className='right'>
              <Form.Item name='current_password' label='Current Password'>
                <Input.Password />
              </Form.Item>
              <Form.Item name='password' label='New Password'>
                <Input.Password />
              </Form.Item>
              <Form.Item
                name='confirm'
                label='Confirm Password'
                dependencies={['password']}
                hasFeedback
                rules={[
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error('New Passwords are not match!'),
                      );
                    },
                  }),
                ]}>
                <Input.Password />
              </Form.Item>
            </section>
          </div>
          <section className={classes.update}>
            <Form.Item>
              <Button type='primary' htmlType='submit'>
                更新個人資料
              </Button>
            </Form.Item>
          </section>
        </Form>
      </section>
    </div>
  );
};

export default Settings;
