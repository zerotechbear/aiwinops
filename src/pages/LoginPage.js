import { useContext } from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';

import LoginForm from '../components/Login/LoginForm';
import ResetForm from '../components/Login/ResetForm';
import ProjectPage from './ProjectPage';
import MemberPage from './MemberPage';

import AuthContext from '../store/auth-context';

const LoginPage = (props) => {
  const authCtx = useContext(AuthContext);
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
          {authCtx.token ? <ProjectPage /> : <Redirect to='/' />}
        </Route>
        <Route path='/members/:uid'>
          {authCtx.token ? <MemberPage /> : <Redirect to='/' />}
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default LoginPage;
