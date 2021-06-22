import { useContext } from 'react';

import { Link } from 'react-router-dom';

import classes from '../../../styles/Panel/Member/Settings.module.css';
import { Avatar, Button, Form, Input, Upload, message } from 'antd';
import {
  ArrowLeftOutlined,
  UploadOutlined,
  UserOutlined,
} from '@ant-design/icons';

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
        email: values.email,
      }),
      headers: { 'Content-Type': 'application/json'}
    }).then(response => {
      if(response.ok){
        message.success('成功更新個人資訊!');
      } else {
        message.error('無法更新個人資訊!');
      }
    });
  };

  return (
    <div>
      <NavHeader />
      <section className={classes.settings}>
        <h2>個人設定</h2>
        <Form
          form={form}
          name='settings'
          onFinish={updateProfile}
          scrollToFirstError>
          <div className={classes.avatar}>
            <section className='left'>
              <h3>大頭照</h3>
              <p>
                上傳新的照片或移除當前的照片
              </p>
            </section>

            <section className='right'>
              <Avatar size={80} icon={<UserOutlined />} style={{marginBottom: '1rem'}}/>
              <Form.Item
                name='upload'
                valuePropName='fileList'
                getValueFromEvent={avatarFile}>
                <Upload
                  name='avatar'
                  action='/upload.do'
                  listType='picture'
                  maxCount={1}>
                  <Button icon={<UploadOutlined />}>上傳</Button>
                </Upload>
              </Form.Item>
            </section>
          </div>
          <div className={classes.main}>
            <section className='left'>
              <h3>主設定</h3>
              <p>資訊將會顯示在人物簡介中</p>
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
              <h3>更換密碼</h3>
              <p>
                成功更新密碼後將返回登入頁面
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
          <section className={classes.btn}>
            <Form.Item>
              <Link to={`/project/${authCtx.userInfo.email}`}>
                <Button
                  type='link'
                  style={{ color: '#000', border: '1px solid #555' }}>
                  <ArrowLeftOutlined />
                  返回專案
                </Button>
              </Link>
            </Form.Item>
            <Form.Item>
              <Button
                type='primary'
                htmlType='submit'
                style={{ fontWeight: '600' }}>
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
