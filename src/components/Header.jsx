import React from 'react'
import { IoMdClose } from "react-icons/io";
import { HiMenuAlt3 } from "react-icons/hi";
import 'animate.css';


const Header = () => {

  function handleMenu() {
    const menu = document.querySelector(".menuOpen");
    const close = document.querySelector(".menuClose");
    const menuBox = document.querySelector(".menuBox");
    if (window.getComputedStyle(menu).visibility == "visible") {
      menu.style.visibility = "hidden";
      close.style.visibility = "visible";
      menuBox.style.visibility = "visible";
      menuBox.className = "menuBox animate__animated animate__fadeInDown";
    }
    else{
      close.style.visibility = "hidden";
      menuBox.style.visibility = "hidden";
      menu.style.visibility = "visible";
      menuBox.className = "menuBox animate__animated animate__fadeOutUp";
    }
  }

  return (
    <nav>
      <a href="#" id="logo">Universities List</a>
      <div class='menuBox'>
        <a href="#">Home</a>
        <a href="#">Admission</a>
        <a href="#">Counseling</a>
        <a href="#">Contact</a>
        <a id="login">Login</a>
      </div>
      <>
        <IoMdClose class='menuClose' size={30} onClick={() => { handleMenu() }}/>
        <HiMenuAlt3 class="menuOpen" size={30} onClick={() => { handleMenu() }} />
      </>
    </nav>
  )
}

export default Header
