import './App.css';

import { Route, Switch } from 'react-router-dom';

import LoginForm from './components/UI/Login/LoginForm';
import ResetForm from './components/UI/Login/ResetForm';
import Panel from './components/ProjectPanel/Panel/Panel';

function App() {
  return (
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
      <Route path='/about'>
        <Panel />
      </Route>
      <Route path='/tutorials'>
        <Panel />
      </Route>
      <Route path='/help'>
        <Panel />
      </Route>
    </Switch>
  );
}

export default App;
