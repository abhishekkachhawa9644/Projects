import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css'



const Main = () => {
    function aosInit() {
        AOS.init({
          duration: 600,
          easing: 'ease-in-out',
          once: true,
          mirror: false
        });
      }
      window.addEventListener('load', aosInit);
  return (
    <div>
 <section id="hero" className="hero section">
      <img src="./src/img1.jpg" alt="img" data-aos="fade-in"/>

      <div className="container">
        <div className="row">
          <div className="col-lg-8 d-flex flex-column align-items-center align-items-lg-start">
            <h2 data-aos="fade-up" data-aos-delay="100">
              Welcome to <span>Pinabh Production House</span>
            </h2>
            <p data-aos="fade-up" data-aos-delay="200">
            At Pinabh Production, we don't just make films, web series, or TV shows — we craft experiences. From compelling dramas to thrilling mysteries and heartwarming tales, our productions are designed to touch hearts and spark imaginations. Whether you're a budding filmmaker, a curious viewer, or an industry professional, there's something here for you. Explore our world of innovation, where each project is a new adventure and every story has the power to inspire. Join us as we redefine entertainment, one frame at a time. Your next favorite series or film is just a click away!
            </p>
            
          </div>
          <div className="col-lg-4 d-flex align-items-center justify-content-center mt-5 mt-lg-0">
            <a href="https://www.youtube.com/watch?v=FBhS_zgQh7I" className="glightbox pulsating-play-btn"></a>
          </div>
        </div>
      </div>
    </section>

       
    </div>
  )
}

export default Main
