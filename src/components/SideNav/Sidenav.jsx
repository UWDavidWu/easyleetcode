import { SideNavConst } from "../../Constants";
import "./Sidenav.css";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import {MdOutlineExitToApp} from 'react-icons/md'

const Sidenav = () => {
  
  const location = useLocation()
  const [signIn, setSignIn] = useState(false)

  return (
    <div className="sideNav">
      <div className="sideNavWrapper">
        <div className="sideNavMenu">
          <h1 className="sideNavTitle">Tracker</h1>
          
          
          <ul className="sideNavList">
            {SideNavConst.map((item) => (
              <Link to={item.link} className="link">
                <li 
                className={item.link === location.pathname  ? "sideNavItem selected" : "sideNavItem"}>
                  <div className="description">
                  {item.icon}
                  {item.name}
                  </div>
                  {item.link === location.pathname ? (
                  <motion.div className="sideline" layoutId="sideline" />
                ) : null}
                </li>
              </Link>
            ))}
          </ul>

          <div className="user">
          <div className="sideNavAvatar">
            <img src="https://avatars3.githubusercontent.com/u/52709818?s=460&u=f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f&v=4" alt="avatar" />
          </div>
          <div className="sideNavName">
            <h2>David</h2>
            <h2>Wu</h2>
          </div>
          </div>

          {signIn?
          <button onClick={()=>setSignIn(!signIn)} className="userbutton logout"><MdOutlineExitToApp/>Logout</button>
          :<button onClick={()=>setSignIn(!signIn)} className="userbutton login"><MdOutlineExitToApp/>Login</button>}
          
         


        </div>
      </div>
    </div>
  );
};

export default Sidenav;
