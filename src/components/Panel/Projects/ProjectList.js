import { useState, useEffect, useCallback, useContext } from "react";
import { Link } from "react-router-dom";
import { BackTop, Table, Space, Modal } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  CloseCircleOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

import AuthContext from "../../../store/auth-context";

const PROJECT_URL =
  "https://aiwinops-default-rtdb.firebaseio.com/projects.json";

const ProjectList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [projectData, setProjectData] = useState(null);
  const { confirm } = Modal;

  const authCtx = useContext(AuthContext);
  const level = authCtx.userInfo.level;

  // 專案編輯Icon Render
  const actions =
    level === "owner"
      ? {
          title: "其他操作",
          key: "editable",
          dataIndex: "editable",
          width: '15%',
          render: () => {
            return (
              <Space>
                {/* Todo: 連結Icon到各自專案的編輯畫面 */}
                <EditOutlined
                  style={{ fontSize: "150%", color: "#096dd9" }}
                  onClick={onEditModal}
                />
                <DeleteOutlined
                  style={{
                    fontSize: "150%",
                    margin: "0 1rem",
                    color: "#ff4d4f",
                  }}
                  onClick={onDeleteModal}
                />
              </Space>
            );
          },
        }
      : {
          title: "其他操作",
          key: "editable",
          dataIndex: "editable",
          width: '15%',
        };

  // Project Table欄位內容
  const TABLE_COLUMN = [
    {
      title: "專案名稱",
      key: "name",
      dataIndex: "name",
      width: '15%',
      sorter: {
        compare: (a, b) => a.name.length > b.name.length,
      },
      render: (text, record) => {
        return <Link to={`/projects/${text}`}>{text}</Link>;
      },
    },
    {
      title: "管理者",
      key: "manager",
      dataIndex: "manager",
      width: '15%',
    },
    {
      title: "狀態",
      key: "status",
      dataIndex: "status",
      width: '15%',
      filters: [
        { text: "Completed", value: "Completed" },
        { text: "In Progress", value: "In Progress" },
      ],
      onFilter: (value, record) => record.status.includes(value),
    },
    
    {
      title: "建立日期",
      key: "build_time",
      dataIndex: "build_time",
      width: '20%',
      sorter: {
        compare: (a, b) => a.build_time.localeCompare(b.build_time),
      },
    },
    {
      title: "修改日期",
      key: "modify_time",
      dataIndex: "modify_time",
      width: '20%',
      sorter: {
        compare: (a, b) => a.build_time.localeCompare(b.build_time),
      },
    },
    actions,
  ];
  
  // TODO: 取得專案資料 -> GET /projects
  const onFetchProjects = useCallback(() => {
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
    onFetchProjects();
  }, [onFetchProjects]);


  // TODO: 取得特定專案資料 -> GET /projects/:projectId
  const onEditModal = () => {
    confirm({
      title: "CHECK",
      icon: <CheckCircleOutlined style={{ color: "#096dd9" }} />,
      content: "Would you like to edit this project?",
      okText: "Confirm",
      okType: "primary",
      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random > 0.5 ? resolve : reject, 1000);
        })
          .then(() => {
            // GET 成功取得專案
          })
          .catch(() => {
            // GET 取得專案失敗(不存在/拒絕存取)
          });
      },
      onCancel() {},
    });
  };

  // TODO: 刪除特定專案資料 -> DELETE /projects/:projectId
  const onDeleteModal = () => {
    confirm({
      title: "DANGER",
      icon: <CloseCircleOutlined style={{ color: "#ff4d4f" }} />,
      content: "Are you sure to delete this project?",
      okText: "Delete",
      okType: "danger",
      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random > 0.5 ? resolve : reject, 2000);
        })
          .then(() => {
            // DELETE 成功刪除專案
          })
          .catch(() => {
            // DELETE 刪除專案失敗(不存在/拒絕存取)
          });
      },
      onCancel() {},
    });
  };

  return (
    <>
      <Table
        loading={isLoading}
        scroll={{ y: "68vh" }}
        columns={TABLE_COLUMN}
        dataSource={projectData}
        pagination={false}
      />
      <BackTop
        target={() => document.getElementsByClassName("ant-table-body")[0]}
        visibilityHeight={300}
      />
    </>
  );
};

export default ProjectList;
