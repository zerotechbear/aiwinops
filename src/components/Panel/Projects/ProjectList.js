import { useState, useEffect, useCallback, useContext } from 'react';
import { Link } from 'react-router-dom';
import { BackTop, Table, Space, Modal } from 'antd';
import {
  EditOutlined,
  DeleteOutlined,
  CloseCircleOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons';

import AuthContext from '../../../store/auth-context';

const PROJECT_URL =
'https://aiwinops-default-rtdb.firebaseio.com/projects.json';

const ProjectList = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [projectData, setProjectData] = useState(null);
  const { confirm } = Modal;

  const authCtx = useContext(AuthContext);
  const level = authCtx.userInfo.level;
  const actions =
    level === 'owner'
      ? {
          title: '其他操作',
          key: 'editable',
          dataIndex: 'editable',
          render: () => {
            return (
              <Space>
                {/* 連結Icon到各自專案的編輯畫面 */}
                <EditOutlined
                  style={{ fontSize: '150%', color: '#096dd9' }}
                  onClick={showEditModal}
                />
                <DeleteOutlined
                  style={{
                    fontSize: '150%',
                    margin: '0 1rem',
                    color: '#ff4d4f',
                  }}
                  onClick={showDeleteModal}
                />
              </Space>
            );
          },
        }
      : {
          title: '其他操作',
          key: 'editable',
          dataIndex: 'editable',
        };

  const TABLE_COLUMN = [
    {
      title: '專案名稱',
      key: 'name',
      dataIndex: 'name',
      sorter: {
        compare: (a, b) => a.name.length > b.name.length,
        multiple: 10
      },
      render: (text, record) => {
        return <Link to={`/project/${text}`}>{text}</Link>;
      },
    },
    {
      title: '狀態',
      key: 'status',
      dataIndex: 'status',
      editable: true,
      filters: [
        { text: 'Completed', value: 'Completed'},
        { text: 'In Progress', value: 'In Progress'}
      ],
      onFilter: (value, record) => record.status.includes(value)
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
    actions,
  ];

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

  // 抓取使用者專案的資料 -> GET/ProjectData
  const fetchProjectData = useCallback(() => {
    setIsLoading(true);
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
          });
        }
        setIsLoading(false);
        setProjectData(storeData);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }, []);

  useEffect(() => {
    fetchProjectData();
  }, [fetchProjectData]);

  return (
    <>
      <Table
        loading={isLoading}
        scroll={{ y: '65vh' }}
        columns={TABLE_COLUMN}
        dataSource={projectData}
        pagination={false}
      />
      <BackTop
        target={() => document.getElementsByClassName('ant-table-body')[0]}
        visibilityHeight={300}
      />
    </>
  );
};

export default ProjectList;
