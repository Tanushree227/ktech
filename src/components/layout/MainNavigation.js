import { Link } from "react-router-dom";

function MainNavigation() {
  return (
    <header>
      <div>K-Tech</div>
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
