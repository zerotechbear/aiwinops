import { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import classes from "../../styles/Login/LoginForm.module.scss";
import {
  Button,
  Card,
  Checkbox,
  Drawer,
  Form,
  Input,
  Space,
  Typography,
  message,
} from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";

import AuthContext from "../../store/auth-context";

import ReCaptcha from "./ReCaptcha";

// 目前使用 Firebase Authentication模擬登入
const FIREBASE_KEY = "AIzaSyAaf6guV8zB9_4R5xwuDDiQM0zaNzQWuWA";
const SIGN_IN_API = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_KEY}`;

const LoginForm = () => {
  const [form] = Form.useForm();
  const history = useHistory();

  const authCtx = useContext(AuthContext);

  const [showDrawer, setShowDrawer] = useState(false);

  // TODO: 驗證USER登入 -> POST/auth/login
  const onLoginAuth = (values) => {
    // Google ReCaptcha人機驗證
    // recaptchaRef.current.execute();
    fetch(SIGN_IN_API, {
      method: "POST",
      body: JSON.stringify({
        email: values.email,
        password: values.password,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(
          message.error("The email is invalid or password is incorrect!")
        );
      })
      .then((data) => {
        authCtx.login(data.idToken);
        message.success("Login!");
        authCtx.userInfoHandler(data.email, "");
        if (data.email === "owner@owner.com") {
          authCtx.userInfoHandler(data.email, "owner");
          message.success("You are logged in as Owner!");
        }
        history.replace('/projects');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Todo: 連線到Session後儲存使用者資訊到Cookies中，再由Cookies取得登入Email
  const onCheckSaveEmail = (e) => {
    console.log("Remember: ", e.target.checked);
  };

  const onShowDrawer = () => {
    setShowDrawer(true);
  };

  const onNotShowDrawer = () => {
    setShowDrawer(false);
  };

  return (
    <Card
      size="small"
      hoverable
      style={{ width: "50rem", height: "100%", margin: "14rem auto" }}
    >
      <span className={classes.logo} />
      <Form
        name="login"
        form={form}
        onFinish={onLoginAuth}
        style={{
          width: "50%",
          left: "50%",
          margin: "2rem 0 1rem 0",
          padding: "0.5rem",
          backgroundColor: "#fff",
        }}
      >
        <Form.Item
          name="email"
          rules={[
            {
              type: "email",
              message: "The email is invalid!",
            },
            {
              required: true,
              message: "The email field should not be empty!",
            },
          ]}
        >
          <Input prefix={<MailOutlined />} placeholder="Email@domain.com" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "The password field shoud not be empty!",
            },
            {
              min: 6,
              message: "The password should at least contain 6 characters!",
            },
          ]}
        >
          <Input.Password placeholder="Password" prefix={<LockOutlined />} />
        </Form.Item>
        <Form.Item>
          <ReCaptcha />
        </Form.Item>
        <Form.Item>
          <Checkbox onChange={onCheckSaveEmail}>記住我</Checkbox>
          <Button type="link" onClick={onShowDrawer}>
            隱私權政策
          </Button>
          <Drawer
            title="隱私權條款"
            width={720}
            onClose={onNotShowDrawer}
            visible={showDrawer}
            headerStyle={{ fontWeight: 700 }}
            bodyStyle={{ padding: 20 }}
            footer={
              <div style={{ margin: "1rem" }}>
                <Button
                  danger
                  onClick={onNotShowDrawer}
                  style={{ marginRight: "2rem" }}
                >
                  Cancel
                </Button>
                <Button type="primary" onClick={onNotShowDrawer}>
                  Confirm
                </Button>
              </div>
            }
          >
            <h3>
              非常歡迎您光臨「AIWinOps」（以下簡稱本網站），為了讓您能夠安心的使用本網站的各項服務與資訊，特此向您說明本網站的隱私權保護政策，以保障您的權益，請您詳閱下列內容：
            </h3>
            <h3>一、隱私權保護政策的適用範圍</h3>
            <p>
              隱私權保護政策內容，包括本網站如何處理在您使用網站服務時收集到的個人識別資料。隱私權保護政策不適用於本網站以外的相關連結網站，也不適用於非本網站所委託或參與管理的人員。
            </p>
            <h3>二、個人資料的蒐集、處理及利用方式</h3>
            <ul>
              <li>
                當您造訪本網站或使用本網站所提供之功能服務時，我們將視該服務功能性質，請您提供必要的個人資料，並在該特定目的範圍內處理及利用您的個人資料；非經您書面同意，本網站不會將個人資料用於其他用途。
              </li>
              <li>
                於一般瀏覽時，伺服器會自行記錄相關行徑，包括您使用連線設備的IP位址、使用時間、使用的瀏覽器、瀏覽及點選資料記錄等，做為我們增進網站服務的參考依據，此記錄為內部應用，決不對外公佈。
              </li>
              <li>
                為提供精確的服務，我們會將收集的問卷調查內容進行統計與分析，分析結果之統計數據或說明文字呈現，除供內部研究外，我們會視需要公佈統計數據及說明文字，但不涉及特定個人之資料。
              </li>
            </ul>
            <h3>三、資料之保護</h3>
            <ul>
              <li>
                本網站主機均設有防火牆、防毒系統等相關的各項資訊安全設備及必要的安全防護措施，加以保護網站及您的個人資料採用嚴格的保護措施，只由經過授權的人員才能接觸您的個人資料，相關處理人員皆簽有保密合約，如有違反保密義務者，將會受到相關的法律處分。
              </li>
              <li>
                如因業務需要有必要委託其他單位提供服務時，本網站亦會嚴格要求其遵守保密義務，並且採取必要檢查程序以確定其將確實遵守。
              </li>
            </ul>
            <h3>四、Cookie之使用</h3>
            <p>
              為了提供您最佳的服務，本網站會在您的電腦中放置並取用我們的Cookie，若您不願接受Cookie的寫入，您可在您使用的瀏覽器功能項中設定隱私權等級為高，即可拒絕Cookie的寫入，但可能會導致網站某些功能無法正常執行
              。
            </p>
            <h3>五、隱私權保護政策之修正</h3>
            <p>
              本網站隱私權保護政策將因應需求隨時進行修正，修正後的條款將刊登於網站上。
            </p>
          </Drawer>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{
              width: "100%",
              fontWeight: "600",
              borderRadius: "5px",
            }}
          >
            LOGIN
          </Button>
        </Form.Item>
        <Space size={155}>
          <Typography.Link
            href="https://www.zerodimension.com.tw/default.aspx#contact"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              type="link"
              style={{
                width: "100%",
                border: "1px solid #03a9f4",
                borderRadius: "5px",
              }}
            >
              HELP
            </Button>
          </Typography.Link>
          <Link to="/reset">
            <Button
              type="link"
              style={{
                width: "100%",
                border: "1px solid #03a9f4",
                borderRadius: "5px",
              }}
            >
              Forgot Password?
            </Button>
          </Link>
        </Space>
      </Form>
    </Card>
  );
};

export default LoginForm;
