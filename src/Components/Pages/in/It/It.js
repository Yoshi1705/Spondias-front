import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./style.css";

import client, {imageBaseURL} from './../../../../API/clients';

import img1 from "./images/image_625d3a57b6.jpg"; // Hosting
import img2 from "./images/image_625d3a6ee7.jpg"; // Programming
import img3 from "./images/image_625d3a8097.jpg"; // Design
import img4 from "./images/image_625d3db74e.jpg"; // Database optimization
import img5 from "./images/image_625d3dfd5a.jpg"; // Security
import img6 from "./images/image_625d3e3ed1.jpg"; // Graphic design
import img7 from "./images/image_625d3e74em.jpg"; // National ID cards

const It = () => {

  const [it, setIT] = useState([]);

  const fetchIT = () => {
    client.get('/services/').then((response) => {
      let tempArray = [];
      for(let i=0; i < response.data.length; i++) {
        tempArray.push({src: `${imageBaseURL}/${response.data[i].image}`, title: response.data[i].name })
      }
      setIT(tempArray);
    })
  }

  useEffect(() => {
    fetchIT();
    AOS.init();
  }, []);

  return (
    <section id="testimonials" className="testimonials">
      <div className="container aos-init aos-animate" data-aos="fade-up">
        <div className="section-title">
          <h2 className="section-title-heading" style={{color:'black'}}>IT Consulting Services</h2>
          <div className="underline mx-auto"></div>
        </div>
        <div className="testimonials-slider">
          <Carousel
            showThumbs={false}
            showIndicators={true}
            showStatus={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
          >
            {it.map((image, index) => (
              <div className="d-flex flex-row" key={index}>
                {[0, 1, 2].map((slideIndex) => {
                  const dynamicIndex = index * 3 + slideIndex;
                  const dynamicImage = it[dynamicIndex % it.length];

                  return (
                    <div
                      key={dynamicIndex}
                      className="slider-slide d-flex flex-row"
                      style={{ width: "380px" }}
                    >
                      <div className="testimonial-wrap">
                        <div className="testimonial-item">
                          <img
                            src={dynamicImage.src}
                            className="testimonial-img"
                            alt=""
                            style={{ width: "280px" }}
                          />
                          <h1 className="testimonial-title" style={{color:'black',fontSize:'28px',marginTop:'15px',fontWeight:'bold'}}>
                            {dynamicImage.title}
                          </h1>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default It;
