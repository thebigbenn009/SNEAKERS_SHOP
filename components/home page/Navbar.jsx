import React from "react";
import NavLeft from "./NavLeft";
import Image from "next/image";
import Cart from "../../public/images/icon-cart.svg";
import Avatar from "../../public/images/image-avatar.png";

const Navbar = () => {
  return (
    <div className="wrapper">
      <div className="nav-div">
        <NavLeft />
        <div className="nav-right">
          <Image className="cart" src={Cart} alt="cart" />
          <Image className="avatar" src={Avatar} alt="avatar" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
