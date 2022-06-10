import "./Topnav.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";

const Topnav = () => {
  const TopnavConst = [
    {
      name: "Notifications",
      icon: <NotificationsIcon />,
    },
    {
      name: "Settings",
      icon: <SettingsIcon />,
    },
  ];

  return (
    <div className="topNav">
      <div className="topNavWrapper">
        <div className="topNavLeft">
          <div className="topNavLogo">
            <img
              src="https://www.easyleetcode.com/static/media/logo.png"
              alt="logo"
            />
          </div>
        </div>
        <div className="topNavRight">
          {TopnavConst.map((item) => (
            <div className="topNavIconContainer">
              {item.icon}
              <span className="topNavIconBadge">2</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topnav;
