import { Route, Switch, BrowserRouter } from 'react-router-dom';

import './App.css';

import LoginForm from './components/Login/LoginForm';
import ResetForm from './components/Login/ResetForm';
import Panel from './components/ProjectPanel/Panel/Panel';
import Settings from './components/ProjectPanel/Panel/Settings';
import NewProject from './components/ProjectPanel/Panel/NewProject';
import MemberList from './components/ProjectPanel/Members/MemberList';


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path='/' exact>
          <LoginForm />
        </Route>
        <Route path='/reset'>
          <ResetForm />
        </Route>
        <Route path='/home'>
          <Panel />
        </Route>
        <Route path='/profile'>
          <Settings />
        </Route>
        <Route path='/about'>
          <Panel />
        </Route>
        <Route path='/tutorials'>
          <Panel />
        </Route>
        <Route path='/help'>
          <Panel />
        </Route>
        <Route path='/new-project'>
          <NewProject />
        </Route>
        <Route path='/members'>
          <MemberList />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
