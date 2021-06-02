import './App.css';

import { Route, Switch } from 'react-router-dom';

// import LoginForm from './components/UI/Login/LoginForm';
// import ResetForm from './components/UI/Login/ResetForm';
import NavHeader from './components/ProjectPanel/HeaderUI/NavHeader';

function App() {
  return (
    <Switch>
      {/* <Route path='/' exact>
        <LoginForm />
      </Route>
      <Route path='/reset'>
        <ResetForm />
      </Route> */}
      <Route path='/'>
        <NavHeader />
      </Route>
    </Switch>
  );
}

export default App;
