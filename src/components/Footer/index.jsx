import React from 'react';
import logo from '../../assets/images/footer-logo.png';
import address from '../../assets/images/address.png';
import aaaa from '../../assets/images/phone.png';
import email from '../../assets/images/email.png';
export default function Footer() {
  return (
    <footer className="page-footer bg-green">
      <div className="footer-top">
        <div className="container">
          <div className="section-widgets row">
            <div className="widget logo-widget col-large-4 col-medium-6">
              <img className="widget-img" src={logo} alt="logo1" />
              <p className="des">Over 24 years experience and knowledge international standards, technologicaly changes and industrial systems, we are dedicated to provides seds the best and economical solutions to our valued customers.</p>
              <a href="" className="btn btn-primary">Read More</a>
            </div>
            <div className="widget widget-middle col-large-4 col-medium-6">
              <h3 className="footer-title">Usefull Links</h3>
              <ul className="middle-list row">
                <li className="middle col-6 col-small-12 col-medium-6"><a href="">Business Growth</a></li>
                <li className="middle col-6 col-small-12 col-medium-6"><a href="">About Triph</a></li>
                <li className="middle col-6 col-small-12 col-medium-6"><a href="">Sustainability</a></li>
                <li className="middle col-6 col-small-12 col-medium-6"><a href="">Customer FAQ’s</a></li>
                <li className="middle col-6 col-small-12 col-medium-6"><a href="">Performance</a></li>
                <li className="middle col-6 col-small-12 col-medium-6"><a href="">Testimonials</a></li>
                <li className="middle col-6 col-small-12 col-medium-6"><a href="">Customer Insights</a></li>
                <li className="middle col-6 col-small-12 col-medium-6"><a href="">Free Consultation</a></li>
                <li className="middle col-6 col-small-12 col-medium-6"><a href="">Organization</a></li>
                <li className="middle col-6 col-small-12 col-medium-6"><a href="">Meet Our Team</a></li>
              </ul>
            </div>
            <div className="widget col-large-4 col-medium-6 col-small-12">
              <h3 className="footer-title">Latest News</h3>
              <ul className="news-list">
                <li className="news-item flex">
                  <i className="fa fa-image"></i>
                  <div className="news-content">
                    <time className="post-date">August 27th, 2018</time>
                    <span className="text">Tips For Sucess In 2016: Ways To Grow</span>
                  </div>
                </li>
                <li className="news-item flex">
                  <i className="fa fa-image"></i>
                  <div className="news-content">
                    <time className="post-date">August 27th, 2018</time>
                    <span className="text">T6 Ways To Keep In Control Your Debtors</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-contacts">
        <div className="container">
          <ul className="contacts row">
            <li className="contact-item col-large-4 col-medium-6 col-small-12 flex">
              <img src={address} alt="" className="mg-r-3" />
              <div className="contact-content">
                <h4 className="title">Address</h4>
                <span className="text">185, Triph Street, Los Angeles, USA.</span>
              </div>
            </li>
            <li className="contact-item col-large-4 col-medium-6 col-small-12 flex">
              <img src={aaaa} alt="" className="mg-r-3" />
              <div className="contact-content">
                <h4 className="title">Call Us On</h4>
                <span className="text">Front Desk: +123-456-7890 & 23</span>
              </div>
            </li>
            <li className="contact-item col-large-4 col-medium-6 col-small-12 flex">
              <img src={email} alt="" className="mg-r-3" />
              <div className="contact-content">
                <h4 className="title">Email At</h4>
                <span className="text">Supportteam@yourdomain.com</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
      <div className="container">
        <div className="wrapper-foo-bottom flex-between">
          <p className="coppy-right">Copyrights © 2017 All Rights Reserved. Powered by <a href="" className="high-lights">Company</a></p>
          <ul className="footer-nav flex">
            <li><a href="">Legal</a></li>
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">Sitemap</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
    </footer>
  )
}
