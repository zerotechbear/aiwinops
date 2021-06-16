import { useState, useEffect, useCallback } from 'react';
import { Table, Space, Modal } from 'antd';
import {
  EditOutlined,
  DeleteOutlined,
  CloseCircleOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons';

const PROJECT_URL =
  'https://aiwinops-default-rtdb.firebaseio.com/projects.json';

const ProjectList = (props) => {
  const [projectData, setProjectData] = useState();
  const { confirm } = Modal;

  // TODO: 取得後端資料庫的專案資料
  const showEditModal = () => {
    confirm({
      title: 'CHECK',
      icon: <CheckCircleOutlined style={{ color: '#096dd9' }} />,
      content: 'Would you like to edit this project?',
      okText: 'Confirm',
      okType: 'primary',
      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random > 0.5 ? resolve : reject, 1000);
        })
          .then(() => {
            // GET method: 取得資料庫專案資料
          })
          .catch(() => {
            // GET method failed
          });
      },
      onCancel() {},
    });
  };

  // TODO: 刪除後端資料庫的專案資料
  const showDeleteModal = () => {
    confirm({
      title: 'DANGER',
      icon: <CloseCircleOutlined style={{ color: '#ff4d4f' }} />,
      content: 'Are you sure to delete this project?',
      okText: 'Delete',
      okType: 'danger',
      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random > 0.5 ? resolve : reject, 2000);
        })
          .then(() => {
            // POST method: 刪除資料庫專案資料
          })
          .catch(() => {
            // POST method failed
          });
      },
      onCancel() {},
    });
  };

  const TABLE_COLUMN = [
    {
      title: '專案名稱',
      key: 'name',
      dataIndex: 'name',
      render: (text, record) => {
        return <a>{text}</a>;
      },
    },
    {
      title: '狀態',
      key: 'status',
      dataIndex: 'status',
      editable: true,
    },
    {
      title: '管理者',
      key: 'manager',
      dataIndex: 'manager',
    },
    {
      title: '建立日期',
      key: 'build_time',
      dataIndex: 'build_time',
    },
    {
      title: '修改日期',
      key: 'modify_time',
      dataIndex: 'modify_time',
    },
    {
      title: '其他操作',
      key: 'editable',
      dataIndex: 'editable',
      render: (editable) => {
        return (
          <Space>
            {/* 連結Icon到各自專案的編輯畫面 */}
            {editable && (
              <EditOutlined
                style={{ fontSize: '150%', color: '#096dd9' }}
                onClick={showEditModal}
              />
            )}
            <DeleteOutlined
              style={{ fontSize: '150%', margin: '0 1rem', color: '#ff4d4f' }}
              onClick={showDeleteModal}
            />
          </Space>
        );
      },
    },
  ];

  // 抓取使用者專案的資料 -> GET/ProjectData
  const fetchProjectData = useCallback(() => {
    fetch(PROJECT_URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const storeData = [];
        for (const key in data) {
          storeData.push({
            key: key,
            name: data[key].name,
            status: data[key].status,
            manager: data[key].manager,
            build_time: data[key].build_time,
            modify_time: data[key].modify_time,
            editable: data[key].editable,
          });
        }
        setProjectData(storeData);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }, []);

  useEffect(() => {
    fetchProjectData();
  }, [projectData]);

  return (
    <div>
      <Table
        scroll={{ x: '1000', y: '500' }}
        pagination={false}
        columns={TABLE_COLUMN}
        dataSource={projectData}
      />
    </div>
  );
};

export default ProjectList;
