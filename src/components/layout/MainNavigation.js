import { Link } from "react-router-dom";
import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>K-Tech</div>
      <nav>
        <ul>
          <li><Link to='/' >Home</Link></li>
          <li><Link to='/services' >Services</Link></li>
          <li><Link to='/about' >About</Link></li>
          <li><Link to='/signup' >Signup</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
