import React, { useState, useEffect } from "react";
import LOGO from "../../assets/LOGO.png";
import "./nav.css";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close"; // Import the close icon

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleResize = () => {
      const newWindowWidth = window.innerWidth;
      setWindowWidth(newWindowWidth);

      if (newWindowWidth < 1040) {
        setShowMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav>
      <div className="logo">
        <img src={LOGO} alt="Davidici Logo" />
      </div>
      {windowWidth < 1040 ? (
        <div className={`links__container ${showMenu ? "show" : "hidden"}`}>
          <a>HOME</a>
          <a>BATH</a>
          <a>VANITIES</a>
          <a>CATALOGUES</a>
          <a>PRICE LISTS</a>
          <a>ABOUT</a>
          <a>CONTACT</a>
          <a>VIRTUAL SHOWROOM</a>
          <a>EXPRESS PROGRAM</a>
        </div>
      ) : (
        <div className="links__container">
          <a>HOME</a>
          <a>BATH</a>
          <a>VANITIES</a>
          <a>CATALOGUES</a>
          <a>PRICE LISTS</a>
          <a>ABOUT</a>
          <a>CONTACT</a>
          <a>VIRTUAL SHOWROOM</a>
          <a>EXPRESS PROGRAM</a>
        </div>
      )}
      <div className="profile">
        <PersonIcon style={{ fontSize: "2rem" }} className="icon" />
        <SearchIcon style={{ fontSize: "2rem" }} className="icon" />
        {windowWidth < 1040 ? (
          showMenu ? (
            <CloseIcon
              style={{ fontSize: "2rem", cursor: "pointer" }}
              className="icon"
              onClick={toggleMenu}
            />
          ) : (
            <MenuIcon
              style={{ fontSize: "2rem", cursor: "pointer" }}
              className="icon"
              onClick={toggleMenu}
            />
          )
        ) : null}
      </div>
    </nav>
  );
}
