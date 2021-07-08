// import { useContext } from 'react';
import { Link, Route, Switch, BrowserRouter, Redirect } from "react-router-dom";

import { Button, Result } from "antd";

import LoginForm from "../components/Login/LoginForm";
import ResetForm from "../components/Login/ResetForm";

import ProjectPage from "./ProjectPage";
import UserPage from "./UserPage";
import QuotaPage from "./QuotaPage";
import DashboardPage from "./DashboardPage";
import ReportPage from "./ReportPage";
import AboutPage from "./AboutPage";
import TutorialsPage from "./TutorialsPage";
import HelpPage from "./HelpPage";

const LoginPage = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" exact>
          <LoginForm />
        </Route>
        <Route path="/reset">
          <ResetForm />
        </Route>
        {/* TODO: 透過後端驗證使用者idToken */}
        <Route path="/projects">
          {localStorage.getItem("uid") !== "" ? (
            <ProjectPage />
          ) : (
            <Result
              status="403"
              title="403"
              subTitle="Sorry, the page does not exist."
              extra={
                // <Link to={`/project/${authCtx.userInfo.email}`}>
                <Link to="/">
                  <Button type="primary">Back</Button>
                </Link>
              }
            />
          )}
        </Route>
        <Route path="/users">
          {localStorage.getItem("uid") !== "" ? (
            <UserPage />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        <Route path="/quota">
          {localStorage.getItem("uid") !== "" ? (
            <QuotaPage />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        <Route path="/dashboard">
          {localStorage.getItem("uid") !== "" ? (
            <DashboardPage />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        <Route path="/report">
          {localStorage.getItem("uid") !== "" ? (
            <ReportPage />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        <Route path="/about">
          {localStorage.getItem("uid") !== "" ? (
            <AboutPage />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        <Route path="/tutorials">
          {localStorage.getItem("uid") !== "" ? (
            <TutorialsPage />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        <Route path="/help">
          {localStorage.getItem("uid") !== "" ? (
            <HelpPage />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default LoginPage;
