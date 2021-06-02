import classes from '../../../styles/ProjectPanel/HeaderUI/NavHeader.module.css';

import { Link, useHistory } from 'react-router-dom';

const NavHeader = (props) => {
  const history = useHistory();

  return (
    <header>
      <div className={classes.logo}>AIWin</div>
      <ul>
        <Link to='/home'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/Tutorials'>Tutorials</Link>
        <Link to='/help'>Help</Link>
        
      </ul>
      
    </header>
  )
};

export default NavHeader;