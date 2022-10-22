import {
    ChevronRightOutlined,
    LogoutOutlined,
    Home,
    Work,
    Book,
    Pages,
    Handshake,
    Dashboard,
  } from "@mui/icons-material";
  import { Button } from "@mui/material";
  import { useState } from "react";
  import { Link, useNavigate } from "react-router-dom";
  import "./sidebar.scss";
  
  const Sidebar = () => {
    const navigate = useNavigate()
    // All useStates
    const [isToggled, setisToggled] = useState(false);
  
  
    // For toggling button
    const handleToggle = () => {
      setisToggled(!isToggled);
    };
  
    const handleLogout = () => {
      localStorage.removeItem('admin')
      navigate(0)
    }
  
    return (
      <>
        <nav className={`sidebar ${!isToggled && "close"}`}>
          <header>
            <div className="image-text">
              {/* <span className="image"><img src="/assets/logo.png" alt="" /></span> */}
              <div clareact-roussName="text logo-text">
                <span className="name">Nits Toolkit</span>
              </div>
            </div>
            <ChevronRightOutlined
              className="bx bx-chevron-right toggle"
              onClick={handleToggle}
            />
          </header>
          <div className="menu-bar">
            <div className="menu">
              <ul className="menu-links">

              <li className="nav-link">
                  <a href="#">
                    <Home className="sidebar-icon" />
                    <span className="text nav-text">Home</span>
                  </a>
                </li>
  
                <li className="nav-link">
                  <Link to="/">
                    <Dashboard className="sidebar-icon" />
                    <span className="text nav-text">Dashboard</span>
                  </Link>
                </li>
  
                <li className="nav-link">
                  <Link to="/todo">
                    <Work className="sidebar-icon" />
                    <span className="text nav-text">Todo</span>
                  </Link>
                </li>
  
                {/* <li className="nav-link">
                  <Link to="/blogs">
                    <Book className="sidebar-icon" />
                    <span className="text nav-text">Blogs</span>
                  </Link>
                </li> */}
                
                <li className="nav-link">
                  <Link to="/resume">
                    <Pages className="sidebar-icon" />
                    <span className="text nav-text">Resume Generator</span>
                  </Link>
                </li>

                <li className="nav-link">
                  <a href="https://nitsplag.herokuapp.com/">
                    <Handshake className="sidebar-icon" />
                    <span className="text nav-text">Plagiarism Checker</span>
                  </a>
                </li>


              </ul>
            </div>
            <div className="bottom-content">
              <li className="">
                <Button onClick={handleLogout}>
                  <LogoutOutlined className="sidebar-icon" />
                  <span className="text nav-text">Logout</span>
                </Button>
              </li>
  
            </div>
          </div>
        </nav>
      </>
    );
  };
  
  export default Sidebar;