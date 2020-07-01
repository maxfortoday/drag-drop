import React from 'react'
import './Header.css';
import {Link,useLocation} from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';


const Header = () => {
 let location = useLocation();
 let url = location.pathname.split('/')[1];
 return (
  <>
   <div className="header-container">
    <Link to="/">
     <MenuIcon fontSize="large"/>
     </Link>
   </div>
   <span className="span-text">{url === 'box' ? 'Configuration screen' : 'Layout screen'}</span>
  </>
 )
}

export default Header
