import { SideNavConst } from "../../Constants";
import "./Sidenav.css";
import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <div className="sideNav">
      <div className="sideNavWrapper">
        <div className="sideNavMenu">
          <h1 className="sideNavTitle">EasyLeetcode</h1>
          <ul className="sideNavList">
            {SideNavConst.map((item) => (
              <Link to={item.link} className="link">
                <li className="sideNavItem">
                  {item.icon}
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
