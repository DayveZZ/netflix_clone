import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";

import logo from "./logo.png";
import avatar from "./avatar.jpg";

const Header = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });
  }, []);

  return (
    <nav className={`header ${show && "headerDark"}`}>
      <Link to="Home" className="logo">
        <img className="logoNetflix" src={logo} alt="logo" />
      </Link>
      <div>
        <Link to="Home">Home</Link>
        <Link to="TvShows">TV Shows</Link>
        <Link to="Movies">Movies</Link>
        <Link to="NewPopular">New & Popular</Link>
      </div>

      <BiSearch />
      <img className="avatar" src={avatar} alt="" />
    </nav>
  );
};

export default Header;
