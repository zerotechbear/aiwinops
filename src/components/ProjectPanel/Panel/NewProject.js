import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Button, Input } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import { CirclePicker } from 'react-color';
import classes from '../../../styles/ProjectPanel/Panel/NewProject.module.css';

import NavHeader from './NavHeader';

const NewProject = () => {
  const { TextArea } = Input;
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectColor, setProjectColor] = useState('#fff');

  const history = useHistory();

  const getName = (event) => {
    setProjectName(event.target.value);
  };

  const getDescription = (event) => {
    setProjectDescription(event.target.value);
  };

  const getColor = (color) => {
    setProjectColor(color.hex);
  }

  // TODO: 將新專案新增至資料庫
  const submitNewProjectHandler = (event) => {
    event.preventDefault();

    const projectInfo = {
      key: new Date().toISOString().toString(),
      name: projectName,
      color: projectColor,
      description: projectDescription
    }

    // 上傳專案名稱與描述
    console.log(projectInfo);
    history.push('/home');
  };

  const cancleProjectHandler = () => {
    history.push('/home');
  };

  return (
    <div>
      <NavHeader />
      <form className={classes.project} onSubmit={submitNewProjectHandler}>
        <h2>新專案</h2>
        <div className={classes.info}>
          <h4>專案名稱</h4>
          <Input
            placeholder='Project Name'
            allowClear
            required
            value={projectName}
            onChange={getName}
          />
          <h4>專案顏色</h4>
          <CirclePicker width={300} color={projectColor} onChangeComplete={getColor}/>
          <h4>專案描述(Optional)</h4>
          <TextArea
            placeholder='Project Description'
            rows={5}
            maxLength={300}
            showCount
            allowClear
            style={{ marginBottom: '2.5rem' }}
            value={projectDescription}
            onChange={getDescription}
          />
        </div>
        <div className={classes.protocol}>
          <h1>資料協議</h1>
          <section>
            請您在開始使用AIWin系列產品(以下簡稱"本產品")前，務必仔細閱讀並同意《用戶協議》(以下簡稱"本協議")
            中規定的所有權利和限制。
          </section>
          {/* 補上Accept協議確認的函數... */}
          <Button type='defalt' icon={<CheckOutlined />}>
            Accept
          </Button>
        </div>
        <div className={classes.btn}>
          <Button
            type='primary'
            onClick={submitNewProjectHandler}
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
      </form>
    </div>
  );
};

export default NewProject;
