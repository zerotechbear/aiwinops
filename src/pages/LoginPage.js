import { useContext } from 'react';
import { Link, Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';

import { Button, Result } from 'antd';

import LoginForm from '../components/Login/LoginForm';
import ResetForm from '../components/Login/ResetForm';

import ProjectPage from './ProjectPage';
import MemberPage from './MemberPage';
import QuotaPage from './QuotaPage';
import DashboardPage from './DashboardPage';
import ReportPage from './ReportPage';
import AboutPage from './AboutPage';
import TutorialsPage from './TutorialsPage';
import HelpPage from './HelpPage';

import AuthContext from '../store/auth-context';

const LoginPage = () => {
  const authCtx = useContext(AuthContext);
  console.log(authCtx);
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path='/' exact>
          <LoginForm />
        </Route>
        <Route path='/reset'>
          <ResetForm />
        </Route>
        <Route path='/project/:uid'>
          {localStorage.getItem('uid') !== '' ? (
            <ProjectPage />
          ) : (
            <Result
              status='404'
              title='404'
              subTitle='Sorry, the page does not exist.'
              extra={
                <Link to={`/project/${authCtx.userInfo.email}`}>
                {/* // <Link to='/'> */}
                  <Button type='primary'>Back</Button>
                </Link>
              }
            />
          )}
        </Route>
        <Route path='/members/:uid'>
          {localStorage.getItem('token') ? <MemberPage /> : <Redirect to='/' />}
        </Route>
        <Route path='/quota/:uid'>
          {localStorage.getItem('token') ? <QuotaPage /> : <Redirect to='/' />}
        </Route>
        <Route path='/dashboard/:uid'>
          {localStorage.getItem('token') ? (
            <DashboardPage />
          ) : (
            <Redirect to='/' />
          )}
        </Route>
        <Route path='/report/:uid'>
          {localStorage.getItem('token') ? <ReportPage /> : <Redirect to='/' />}
        </Route>
        <Route path='/about/:uid'>
          {localStorage.getItem('token') ? <AboutPage /> : <Redirect to='/' />}
        </Route>
        <Route path='/tutorials/:uid'>
          {localStorage.getItem('token') ? (
            <TutorialsPage />
          ) : (
            <Redirect to='/' />
          )}
        </Route>
        <Route path='/help/:uid'>
          {localStorage.getItem('token') ? <HelpPage /> : <Redirect to='/' />}
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default LoginPage;
