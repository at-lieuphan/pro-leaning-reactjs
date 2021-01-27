import React from 'react';
import logo from '../../assets/images/logo.png';
import icon1 from '../../assets/images/icon-2.png';
import icon2 from '../../assets/images/icon-1.png';
import icon3 from '../../assets/images/icon-3.png';
import { BrowserRouter, Route, Link } from "react-router-dom";

export default function Header() {
  function clickOpenMenu() {

  }
  return (
    <header className="page-header">
    <div className="header-top bg-green">
      <div className="container flex-between">
        <p className="top-left">
          {'For first className business plan you can trust Triph!'}
        </p>
        <div>
          <Link className="header-link mg-r-5"  to="/login"><i className="fa fa-user mg-r-2"></i>Login</Link>
          <Link className="header-link"  to="/register"><i className="fa fa-user mg-r-2"></i>Register</Link>
        </div>
      </div>
    </div>
    <div className="header-middle">
      <div className="container">
        <div className="header-wrapper flex-between">
          <a href="">
            <img src={logo} className="img-logo" alt="logo" />
          </a>
          <ul className="middle-list flex">
            <li className="middle-item flex">
              <img src={icon1} alt="" />
              <div className="middle-content">
                <h5>Call Us</h5>
                <span>+123-456-7890 &23</span>
              </div>
            </li>
            <li className="middle-item flex ml-4">
              <img src={icon2} alt="" />
              <div className="middle-content">
                <h5>Email at</h5>
                <span>Support@yourdomain.com</span>
              </div>
            </li>
            <li className="middle-item flex ml-4">
              <img src={icon3} alt="" />
              <div className="middle-content">
                <h5>Office Hrs</h5>
                <span>Mon - Sat: 9.00am to 18.00pm</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <nav className="header-navbar">
      <div className="container flex-between nav-pc">
        <ul id="js-nav-bar" className="menu-list flex">
          <li className="menu-item">
            <Link  className="menu-item-link active" to="/">Home</Link>
          </li>
          <li className="menu-item dropdown">
            <a href="" className="menu-item-link">About Us</a>
            <ul className="sub-menu dropdown-content">
              <li><a href="">About Company</a></li>
              <li><a href="">Meet our team</a></li>
              <li className="dropdown drop-sub">
                <a href="">Projects</a>
                <ul className="dropdown-content drop-sub-content">
                  <li><a href="">Our Project</a></li>
                  <li><a href="">Projects Single</a></li>
                </ul>
              </li>
              <li><a href="">Testimonials</a></li>
              <li><a href="">Free Consultation</a></li>
            </ul>
          </li>
          <li className="menu-item dropdown">
            <a href="" className="menu-item-link">Services</a>
            <ul className="dropdown-content">
              <li><a href="">Our Services</a></li>
              <li><a href="">Business Growth</a></li>
              <li><a href="">Customer Insights</a></li>
              <li><a href="">Advanced Analytics</a></li>
            </ul>
          </li>
          <li className="menu-item dropdown">
            <a href="" className="menu-item-link">Blog</a>
            <ul className="dropdown-content">
              <li><a href="">Blog Grid View</a></li>
              <li><a href="">Blog Large View</a></li>
              <li><a href="">Blog Single Post</a></li>
            </ul>
          </li>
          <li className="menu-item dropdown">
            <a href="" className="menu-item-link">Shop</a>
            <ul className="dropdown-content">
              <li><a href="">Our Shop</a></li>
              <li><a href="">Shop Single</a></li>
            </ul>
          </li>
          <li className="menu-item">
            <a href="" className="menu-item-link">Contact Us</a>
          </li>
        </ul>
        <div className="outer-box flex">
          <div className="search-box">
            <button className="btn btn-search dropbtn"><i className="fa fa-search"></i></button>
            <form className="form-search collapse">
              <input type="text" className="form-control input-search" placeholder="Search..." />
              <button className="btn btn-search"><i className="fa fa-search"></i></button>
            </form>
          </div>
          <div className="wrapper-button">
            <a href="" className="btn btn-primary">Consultation</a>
          </div>
        </div>
      </div>
      <div className="container nav-sp flex-between">
        <a href="" className="btn btn-primary">Consultation</a>
        <button onClick= {() =>{clickOpenMenu()}} className="btn btn-primary btn-nav"><i className="fa fa-bars"></i></button>
      </div>
    </nav>
  </header>
  )
}