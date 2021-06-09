import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Form, Input, Button, Checkbox } from 'antd';
import { CirclePicker } from 'react-color';
import classes from '../../../styles/ProjectPanel/Projects/NewProject.module.css';

import NavHeader from '../../UI/Layout/Header';

const PROJECT_URL = 'https://aiwinops-default-rtdb.firebaseio.com/projects.json';

const NewProject = () => {
  const { TextArea } = Input;
  const [form] = Form.useForm();
  const history = useHistory();

  const [projectColor, setProjectColor] = useState('#fff');

  const getColor = (color) => {
    setProjectColor(color.hex);
  };

  // 將新專案新增至資料庫 /PUSH/New-Project
  const registerNewProject = (values) => {
    fetch(PROJECT_URL, {
      method: 'POST',
      body: JSON.stringify({
        build_time: new Date().toISOString().toString(),
        name: values.project_name,
        manager: values.project_manager,
        color: values.project_color.hex,
        description: values.project_description,
        editable:　true,
      }),
      headers: { 'Content-Type': 'application/json'}
    }).then(response => {
      return response.json();
    }).catch((error) => {
      throw new Error(error);
    });
    history.push('/home');
  };

  const cancleProjectHandler = () => {
    history.push('/home');
  };

  return (
    <div>
      <NavHeader />
      <section className={classes.project}>
        <h2>新專案</h2>
        <Form
          form={form}
          name='project'
          onFinish={registerNewProject}
          scrollToFirstError>
          <div className={classes.info}>
            <h4>專案名稱</h4>
            <Form.Item
              name='project_name'
              rules={[
                {
                  required: true,
                  message: 'Project name should not be empty!',
                },
              ]}>
              <Input placeholder='Project Name' allowClear />
            </Form.Item>
            <h4>管理者</h4>
            <Form.Item
              name='project_manager'
              rules={[
                {
                  required: true,
                  message: 'Project manager should be provided!',
                },
              ]}>
              <Input placeholder='Project Manager' allowClear />
            </Form.Item>
            <h4>專案顏色</h4>
            <Form.Item
              name='project_color'
              rules={[
                {
                  required: true,
                  message: 'Choose color for new project!',
                },
              ]}>
              <CirclePicker
                width={300}
                color={projectColor}
                onChangeComplete={getColor}
              />
            </Form.Item>
            <h4>專案描述(Optional)</h4>
            <Form.Item name='project_description'>
              <TextArea
                placeholder='Project Description'
                rows={5}
                maxLength={300}
                showCount
                allowClear
                style={{ marginBottom: '2.5rem' }}
              />
            </Form.Item>
          </div>
          <Form.Item
            name='agreement'
            valuePropName='checked'
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error('使用服務前請先閱讀說明')),
              },
            ]}>
            <div className={classes.protocol}>
              <h1>資料協議</h1>
              <section>
                請您在開始使用AIWin系列產品(以下簡稱"本產品")前，務必仔細閱讀並同意《用戶協議》(以下簡稱"本協議")
                中規定的所有權利和限制。
              </section>
              <Checkbox>Accept</Checkbox>
            </div>
          </Form.Item>
          <Form.Item>
            <div className={classes.btn}>
              <Button
                type='primary'
                htmlType='submit'
                style={{
                  fontWeight: '600',
                  backgroundColor: '#096dd9',
                  borderColor: '#096dd9',
                }}>
                建立專案
              </Button>
              <Button
                type='default'
                danger
                onClick={cancleProjectHandler}
                style={{ marginLeft: '1rem' }}>
                取消
              </Button>
            </div>
          </Form.Item>
        </Form>
      </section>
    </div>
  );
};

export default NewProject;
