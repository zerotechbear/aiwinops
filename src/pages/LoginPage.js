import { useContext } from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';

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
          {authCtx.userInfo.email !== '' ? <ProjectPage /> : <Redirect to='/404' />}
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
        <Route path='/about'>
          {localStorage.getItem('token') ? <AboutPage /> : <Redirect to='/' />}
        </Route>
        <Route path='/tutorials'>
          {localStorage.getItem('token') ? (
            <TutorialsPage />
          ) : (
            <Redirect to='/' />
          )}
        </Route>
        <Route path='/help'>
          {localStorage.getItem('token') ? <HelpPage /> : <Redirect to='/' />}
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default LoginPage;
