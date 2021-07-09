import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

import { BackTop, Table, Switch, Space } from "antd";

// Firebase Realtime Database 模擬會員資料
const USER_URL = "https://aiwinops-default-rtdb.firebaseio.com/members.json";

// Firebase Authentication模擬GET會員API串接
// const FIREBASE_KEY = 'AIzaSyAaf6guV8zB9_4R5xwuDDiQM0zaNzQWuWA';
// const MEMBER_LIST_API = `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${FIREBASE_KEY}`;

const UserList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState();

  // User Table欄位名稱
  const TABLE_COLUMN = [
    {
      title: "名稱",
      key: "name",
      dataIndex: "name",
      width: "10%",
    },
    {
      title: "權限",
      key: "level",
      dataIndex: "level",
      width: "10%",
    },
    {
      title: "註冊時間",
      key: "time",
      dataIndex: "time",
      width: "20%",
    },
    {
      title: "信箱",
      key: "email",
      dataIndex: "email",
      render: (text) => {
        return <Link to={`/users/${text}`}>{text}</Link>;
      },
    },
    {
      title: "狀態",
      key: "status",
      dataIndex: "status",
      render: (status) => {
        // Todo: 更新會員狀態
        const onToggle = (checked) => {
          status = checked;
        };
        return (
          <Space>
            <Switch defaultChecked onChange={onToggle} />
          </Space>
        );
      },
    },
  ];

  // TODO: 取得使用者資料 -> GET /users
  const onFetchUsers = useCallback(() => {
    setIsLoading(true);
    fetch(USER_URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const usersData = [];
        for (const key in data) {
          usersData.push({
            key: key,
            id: data[key].name,
            name: data[key].username,
            level: data[key].level,
            time: data[key].register_time,
            status: data[key].status,
            email: data[key].email,
          });
        }
        setIsLoading(false);
        setUsers(usersData);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }, [setUsers]);

  useEffect(() => {
    onFetchUsers();
  }, [onFetchUsers]);

  return (
    <>
      <Table
        loading={isLoading}
        scroll={{ y: "68vh" }}
        columns={TABLE_COLUMN}
        dataSource={users}
        pagination={false}
      />
      <BackTop
        target={() => document.getElementsByClassName("ant-table-body")[0]}
        visibilityHeight={50}
      />
    </>
  );
};

export default UserList;
