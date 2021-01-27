import React from "react";
import slide2 from '../../assets/images/slide1.1.png';
import slide3 from '../../assets/images/image-2.png';
import slide1 from '../../assets/images/slide1.1.png';

export default function Home() {
  return (
    <main className="page-main">
    <section className="section-slideshow">
      <ul className="slide-list">
        <li className="slide-item fade">
          <img src={slide1} alt="" className="slide-img" />
          <div className="slide-content">
            <h2 className="slide-title">Don't dreamed about success just work for it.</h2>
            <p className="slide-description">Triph business theme continues to grow every day thanks to the confidence.</p>
            <div className="buttons">
              <a href="" className="btn btn-primary">Read More</a>
              <a href="" className="btn btn-second">Contact Us</a>
            </div>
          </div>
        </li>
        {/* <li className="slide-item fade">
          <img src={slide2} alt="" className="slide-img" />
          <div className="slide-content">
            <h2 className="slide-title">Triph helps you to save time and money.</h2>
            <p className="slide-description">Triph business theme continues to grow every day thanks to the confidence.</p>
            <div className="buttons">
              <a href="" className="btn btn-primary">Read More</a>
              <a href="" className="btn btn-second">Contact Us</a>
            </div>
          </div>
        </li> */}
        {/* <li className="slide-item fade">
          <img src={slide3} alt="" className="slide-img" />
          <div className="slide-content">
            <h2 className="slide-title">Work with world className experts your next project</h2>
            <p className="slide-description">Triph business theme continues to grow every day thanks to the confidence.</p>
            <div className="buttons">
              <a href="" className="btn btn-primary">Read More</a>
              <a href="" className="btn btn-second">Contact Us</a>
            </div>
          </div>
        </li> */}
      </ul>
      <button className="btn btn-action btn-next" onclick="plusSlides(-1)"><i className="fa fa-angle-left"></i></button>
      <button className="btn btn-action btn-back" onclick="plusSlides(+1)"><i className="fa fa-angle-right"></i></button>
    </section>
    <section className="section-services">
      <div className="container">
        <h2 className="sec-title">Welcome to Company</h2>
        <div className="wrapper-sub-title">
          <p className="sub-title text-center">We are experts in this industry with over 100 years experience. What that means is you are going to get</p>
          <p className="sub-title text-center">right solution, please find our services.</p>
        </div>
        <ul className="services row">
          <li className="service col-large-4 col-medium-6 col-small-12">
            <div className="overlay-box">
              <div className="overlay-inner">
                <img className="service-img" src="./assets/images/services-6.jpg" alt="organization" />
                <div className="bg-icon">
                  <i className="fa fa-thumbs-up"></i>
                </div>
              </div>
              <div className="wrapper-txt">
                <p className="text">Priority interst for many organizations, when comes sustainbility &amp; corporate responsiblty, normal rules of busines apply. </p>
              </div>
            </div>
            <div className="lower-box">
              <h3 className="title">Organization</h3>
              <a href="" className="is-hidden"><i className="fa fa-angle-right"></i></a>
            </div>
          </li>
          <li className="service col-large-4 col-medium-6 col-small-12">
            <div className="overlay-box">
              <div className="overlay-inner">
                <img className="service-img" src="./assets/images/services-2.jpg" alt="Customer Insights" />
                <div className="bg-icon">
                  <i className="fa fa-fonticons"></i>
                </div>
              </div>
              <div className="wrapper-txt">
                <p className="text">Priority interst for many organizations, when comes sustainbility &amp; corporate responsiblty, normal rules of busines apply. </p>
              </div>
            </div>
            <div className="lower-box">
              <h3 className="title">Customer Insights</h3>
              <a href="" className="is-hidden"><i className="fa fa-angle-right"></i></a>
            </div>
          </li>
          <li className="service col-large-4 col-medium-6 col-small-12">
            <div className="overlay-box">
              <div className="overlay-inner">
                <img className="service-img" src="./assets/images/services-7_0.jpg" alt="Advanced Analytics" />
                <div className="bg-icon">
                  <i className="fa fa-search"></i>
                </div>
              </div>
              <div className="wrapper-txt">
                <p className="text">Priority interst for many organizations, when comes sustainbility &amp; corporate responsiblty, normal rules of busines apply. </p>
              </div>
            </div>
            <div className="lower-box">
              <h3 className="title">Advanced Analytics</h3>
              <a href="" className="is-hidden"><i className="fa fa-angle-right"></i></a>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section className="section-service-counter">
      <div className="container">
        <ul className="service-counters row">
          <li className="counter-item col-large-3 col-medium-6 col-small-12">
            <div className="icon-and-count example">
              <img src="./assets/images/sr.png" alt="count1" />
              <strong className="timer count" id="earth" data-to="721" data-speed="1000" data-waypoint-active="yes"></strong>
            </div>
            <h4 className="name">Projects Completed</h4>
          </li>
          <li className="counter-item col-large-3 col-medium-6 col-small-12">
            <div className="icon-and-count example">
              <img src="./assets/images/sr.png" alt="count1" />
              <strong className="timer count" id="earth" data-to="285" data-speed="1000" data-waypoint-active="yes"></strong>
            </div>
            <h4 className="name">Experienced Workers</h4>
          </li>
          <li className="counter-item col-large-3 col-medium-6 col-small-12">
            <div className="icon-and-count example">
              <img src="./assets/images/sr.png" alt="count1" />
              <strong className="timer count" id="earth" data-to="625" data-speed="1000" data-waypoint-active="yes"></strong>
            </div>
            <h4 className="name">National Awards Won</h4>
          </li>
          <li className="counter-item col-large-3 col-medium-6 col-small-12">
            <div className="icon-and-count example">
              <img src="./assets/images/sr.png" alt="" />
              <strong className="timer count" id="earth" data-to="3962" data-speed="1000" data-waypoint-active="yes"></strong>
            </div>
            <h4 className="name">Cups Of Coffee </h4>
          </li>
        </ul>
      </div>
    </section>
    <section className="section-choose">
      <div className="container">
        <div className="wrapper-choose flex">
          <div className="title-choose flex-column col-large-4 col-medium-12">
            <h2 className="sec-title text-left">Why Choose Us</h2>
            <p className="sub-title">There is some reason behind why people choose Triph past 20 years for their business solutions.</p>
            <p className="sub-title">Please find our unique qualification and our highlights.</p>
            <div className="flex">
              <button className="btn btn-action btn-next mg-r-3" onclick="plusDiv(-1)"><i className="fa fa-angle-left"></i></button>
              <button className="btn btn-action btn-back" onclick="plusDiv(+1)"><i className="fa fa-angle-right"></i></button>
            </div>
          </div>
          <ul className="themes row">
            <li className="themes-item col-large-4 col-medium-12">
              <div className="wrapper-themes">
                <i className="fa fa-fonticons"></i>
                <div className="themes-content">
                  <h4 className="themes-name">Vibrant</h4>
                  <p className="themes-description">How all this mistaken idea of all nouncing ut pleasures.</p>
                </div>
              </div>
            </li>
            <li className="themes-item col-large-4 col-medium-12">
              <div className="wrapper-themes">
                <i className="fa fa-fonticons"></i>
                <div className="themes-content">
                  <h4 className="themes-name">Experience</h4>
                  <p className="themes-description">How all this mistaken idea of all nouncing ut pleasures.</p>
                </div>
              </div>
            </li>
            <li className="themes-item col-large-4 col-medium-12">
              <div className="wrapper-themes">
                <i className="fa fa-fonticons"></i>
                <div className="themes-content">
                  <h4 className="themes-name">Professional</h4>
                  <p className="themes-description">How all this mistaken idea of all nouncing ut pleasures.</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section className="section-about">
      <div className="container">
        <h2 className="sec-title">About Our Comapny</h2>
        <div className="about-us row">
          <img className="about-img col-large-4 col-medium-6 col-small-12" src="http://triumph.drupalet.com/sites/default/files/demo-images/about-1.jpg" alt="About1" />
          <div className="about-info col-large-4 col-medium-6 col-small-12">
            <h3 className="about-title">
              For nearly forty years, we have taken a personal approach highly.
            </h3>
            <p className="about-des">We are Triph located in newyork city,USA. It is a long established fact that a reader will be distracted by the readable content pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the master-builder of human happiness.</p>
            <a href="" className="btn btn-second">Read More</a>
          </div>
          <img className="about-img col-large-4 col-medium-6 col-small-12" src="http://triumph.drupalet.com/sites/default/files/demo-images/graph-1.jpg" alt="About2" />
        </div>
      </div>
    </section>
    <section className="call-action bg-primary">
      <div className="container">
        <h3 className="text-content">Triph has extensive experience across all industries. We help our clients </h3>
        <h3 className="text-content">set new standards of excellence.</h3>
      </div>
    </section>
    <section className="section-view-projects">
      <div className="container">
        <div className="view-title flex-between">
          <h2 className="sec-title">Latest Projects</h2>
          <a href="" className="btn btn-second">View More</a>
        </div>
        <ul className="projects row">
          <li className="project col-large-3 col-medium-6 col-small-12">
            <img className="project-img" src="http://triumph.drupalet.com/sites/default/files/styles/image_270x250/public/demo-images/services-7_1.jpg?itok=JYn1Cb1B" alt="Img Pro1" />
            <div className="project-wrapper">
              <div className="project-content">
                <h3 className="img-title"><a href="">Transporation Service</a></h3>
                <span className="designation">Maketing</span>
              </div>
            </div>
          </li>
          <li className="project col-large-3 col-medium-6 col-small-12">
            <img className="project-img" src="http://triumph.drupalet.com/sites/default/files/styles/image_270x250/public/demo-images/project-single.jpg?itok=XohSK-9S" alt="Img Pro2" />
            <div className="project-wrapper">
              <div className="project-content">
                <h3 className="img-title"><a href="">Consumer Products</a></h3>
                <span className="designation">Consulting</span>
              </div>
            </div>
          </li>
          <li className="project col-large-6 col-medium-12 col-small-12">
            <img className="project-img" src="http://triumph.drupalet.com/sites/default/files/styles/image_570x250/public/demo-images/news-10.jpg?itok=8OcSiCXv" alt="Img Pro3" />
            <div className="project-wrapper">
              <div className="project-content">
                <h3 className="img-title"><a href="">Financial Income</a></h3>
                <span className="designation">Finance</span>
              </div>
            </div>
          </li>
          <li className="project col-large-6 col-medium-12 col-small-12">
            <img className="project-img" src="http://triumph.drupalet.com/sites/default/files/styles/image_570x250/public/demo-images/news-11.jpg?itok=u08E9fGs" alt="Img Pro1" />
            <div className="project-wrapper">
              <div className="project-content">
                <h3 className="img-title"><a href="">Business Growth</a></h3>
                <span className="designation">Growth</span>
              </div>
            </div>
          </li>
          <li className="project col-large-3 col-medium-6 col-small-12">
            <img className="project-img" src="http://triumph.drupalet.com/sites/default/files/styles/image_270x250/public/demo-images/news-8.jpg?itok=UUrr9BZX" alt="Img Pro2" />
            <div className="project-wrapper">
              <div className="project-content">
                <h3 className="img-title"><a href="">Latest Technology</a></h3>
                <span className="designation">Finance</span>
              </div>
            </div>
          </li>
          <li className="project col-large-3 col-medium-6 col-small-12">
            <img className="project-img" src="http://triumph.drupalet.com/sites/default/files/styles/image_270x250/public/demo-images/news-9.jpg?itok=mEI8AC6b" alt="Img Pro3" />
            <div className="project-wrapper">
              <div className="project-content">
                <h3 className="img-title"><a href="">Transporation Service</a></h3>
                <span className="designation">Marketing</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section className="section-feedback bg-gray">
      <div className="container">
        <h2 className="sec-title">Customer Feedback</h2>
        <ul className="feedbacks row">
          <li className="feedback col-large-6 col-medium-12">
            <div className="pd-3 bg-white">
              <div className="feedback-info flex-between">
                <div className="flex">
                  <img className="avatar" src="./assets/images/author-3.jpg" alt="avatar" />
                  <div className="info-left">
                    <h3 className="name">Tyler Hoffman</h3>
                    <span className="location">California</span>
                  </div>
                </div>
                <div className="info-right flex-column text-right">
                  <span className="time">2 years ago</span>
                  <i className="fa fa-quote-right"></i>
                </div>
              </div>
              <div className="lower-box">
                <p className="feedback-text">The great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, because those who do not know how to pursue.</p>
              </div>
            </div>
          </li>
          <li className="feedback col-large-6 col-medium-12">
            <div className="pd-3 bg-white">
              <div className="feedback-info flex-between">
                <div className="flex">
                  <img className="avatar" src="./assets/images/author-7.jpg" alt="avatar" />
                  <div className="info-left">
                    <h3 className="name">Emilia Crane</h3>
                    <span className="location">California</span>
                  </div>
                </div>
                <div className="info-right flex-column text-right">
                  <span className="time">2 years ago</span>
                  <i className="fa fa-quote-right"></i>
                </div>
              </div>
              <div className="lower-box">
                <p className="feedback-text">The great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, because those who do not know how to pursue.</p>
              </div>
            </div>
          </li>
        </ul>
        <ul className="feedbacks row">
          <li className="feedback col-large-6 col-medium-12">
            <div className="pd-3 bg-white">
              <div className="feedback-info flex-between text-right">
                <div className="flex">
                  <img className="avatar" src="./assets/images/author-3.jpg" alt="avatar" />
                  <div className="info-left">
                    <h3 className="name">Jenifer Hearly</h3>
                    <span className="location">Newyork</span>
                  </div>
                </div>
                <div className="info-right flex-column">
                  <span className="time">2 years ago</span>
                  <i className="fa fa-quote-right"></i>
                </div>
              </div>
              <div className="lower-box">
                <p className="feedback-text">The great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, because those who do not know how to pursue.</p>
              </div>
            </div>
          </li>
          <li className="feedback col-large-6 col-medium-12">
            <div className="pd-3 bg-white">
              <div className="feedback-info flex-between text-right">
                <div className="flex">
                  <img className="avatar" src="./assets/images/author-7.jpg" alt="avatar" />
                  <div className="info-left">
                    <h3 className="name">Lyly Emmy</h3>
                    <span className="location">California</span>
                  </div>
                </div>
                <div className="info-right flex-column">
                  <span className="time">2 years ago</span>
                  <i className="fa fa-quote-right"></i>
                </div>
              </div>
              <div className="lower-box">
                <p className="feedback-text">The great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, because those who do not know how to pursue.</p>
              </div>
            </div>
          </li>
        </ul>
        <div className="text-center mg-t-5">
          <button className="btn btn-dot mg-r-2"></button>
          <button className="btn btn-dot"></button>
        </div>
      </div>
    </section>
    {/* <section className="section-news bg-green">
      <div className="container">
        <div className="flex-between mg-b-6">
          <h2 className="sec-title color-white">Latest News</h2>
          <a href="" className="btn btn-second color-white">More News</a>
        </div>
          <ul className="latest-news row">
            <li className="news col-large-3 col-medium-6 col-small-12">
              <div className="news-content">
                <time className="date">27th August, 2018</time>
                <h3 className="title">Tips For Sucess In 2016: Ways To Grow</h3>
                <ul className="list">
                  <li className="item"><i className="fa fa-user"></i>By Admin</li>
                  <li className="item"><i className="fa fa-comments"></i>3 Comments</li>
                </ul>
              </div>
              <div className="bg-box"></div>
              <div className="overlay-box">
                <h3 className="title"><a href="" className="link">Tips For Sucess In 2016: Ways To Grow </a></h3>
                <p className="des">Who loves or pursues or desires to obtain pain of itself,…</p>
                <a href="" className="btn btn-readmore">Read More <i className="fa fa-angle-right"></i></a>
              </div>
            </li>
            <li className="news col-large-3 col-medium-6 col-small-12">
              <div className="news-content">
                <time className="date">27th August, 2018</time>
                <h3 className="title">6 Ways To Keep In Control Your Debtors</h3>
                <ul className="list">
                  <li className="item"><i className="fa fa-user"></i>By Admin</li>
                  <li className="item"><i className="fa fa-comments"></i>3 Comments</li>
                </ul>
              </div>
              <div className="bg-box"></div>
              <div className="overlay-box">
                <h3 className="title"><a href="" className="link"> 6 Ways To Keep In Control Your Debtors </a></h3>
                <p className="des">Know how to pursue pleasure rationally encounter…</p>
                <a href="" className="btn btn-readmore">Read More <i className="fa fa-angle-right"></i></a>
              </div>
            </li>
            <li className="news col-large-3 col-medium-6 col-small-12">
              <div className="news-content">
                <time className="date">27th August, 2018</time>
                <h3 className="title">What A Finance Director Could Add Business </h3>
                <ul className="list">
                  <li className="item"><i className="fa fa-user"></i>By Admin</li>
                  <li className="item"><i className="fa fa-comments"></i>3 Comments</li>
                </ul>
              </div>
              <div className="bg-box"></div>
              <div className="overlay-box">
                <h3 className="title"><a href="" className="link">What A Finance Director Could Add Business </a></h3>
                <p className="des">The great explorer of the truth, the master-builder of…</p>
                <a href="" className="btn btn-readmore">Read More <i className="fa fa-angle-right"></i></a>
              </div>
            </li>
            <li className="news col-large-3 col-medium-6 col-small-12">
              <div className="news-content">
                <time className="date">27th August, 2018</time>
                <h3 className="title">Essential advice on choosing a top className</h3>
                <ul className="list">
                  <li className="item"><i className="fa fa-user"></i>By Admin</li>
                  <li className="item"><i className="fa fa-comments"></i>3 Comments</li>
                </ul>
              </div>
              <div className="bg-box"></div>
              <div className="overlay-box">
                <h3 className="title"><a href="" className="link">Essential advice on choosing a top className </a></h3>
                <p className="des">Who loves or pursues or desires to obtain pain of itself,…</p>
                <a href="" className="btn btn-readmore">Read More <i className="fa fa-angle-right"></i></a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>  */}
    <section className="section-business">
      <div className="container">
        <h2 className="sec-title">Trusted us by over <span className="color-pri">10,000</span> local businesses</h2>
        <p className="sub-title text-center">How all this mistaken idea of denouncing pleasure and praising pain was born and I will</p>
        <p className="sub-title text-center m-0">you a complete account of the system expound.</p>
        <ul className="business-list row">
          <li className="business-item col-large-4 col-medium-6">
            <div className="business-wrapper">
              <img className="business-img" src="./assets/images/business-1.png" alt="business1" />
              <p className="business-des">There anyone who loves or pursues or desires sed to obtain pain of itself, because it is pain, but because occasionally sed great.</p>
            </div>
          </li>
          <li className="business-item col-large-4 col-medium-6">
            <div className="business-wrapper">
              <img className="business-img" src="./assets/images/business-2.png" alt="business2" />
              <p className="business-des">Except to obtain some advantage from it but who has any right to find fault with a man who to enjoy a pleasure that annoying.</p>
            </div>
          </li>
          <li className="business-item col-large-4 col-medium-6">
            <div className="business-wrapper">
              <img className="business-img" src="./assets/images/business-3.png" alt="business3" />
              <p className="business-des">Who loves or pursues or desires to obtain pain itself, because is pain, but because occasionally ut circumstances occur which toil.</p>
            </div>
          </li>
        </ul>
        <div className="is-show text-center mg-t-6 col-medium-12">
          <a href="" className="btn btn-primary">Join With Us</a>
        </div>
      </div>
    </section>
    <section className="section-subscribe bg-gray">
      <div className="container">
        <div className="wrapper-subscribe flex-between">
          <div className="subscribe-title flex-column">
            <h2 className="sec-title">Newsletter Subscribe</h2>
            <p className="sub-title">Sign up today for hints, tips and the latest product news.</p>
          </div>
          <form action="" className="form-subcribe">
            <input type="text" className="form-control" placeholder="Email" />
            <button className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
    <div className="btn-gotop" onclick="scrollToTop()">
      <i className="fa fa-arrow-up"></i>
    </div>
    </main>
  );
}