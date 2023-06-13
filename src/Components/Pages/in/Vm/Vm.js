import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "./Images/icon.png";
import img2 from "./Images/icon1.png";
import img3 from "./Images/icon2.png";
import "./Vm.css";
import client, { imageBaseURL } from "../../../../API/clients";

function Vm() {

  const [vm, setVm] = useState([]);

  const fetchVM = () => {
    client.get('/meta-form').then((response) => {
      setVm(response.data);
    })
  }
  useEffect(() => {
    fetchVM();
    AOS.init({
      duration: 1000, // Set the duration of the animation (in milliseconds)
      once: true, // Only animate elements once
    });
  }, []);

  return (
    <div>
      <section id="sectionblog" className="servicesblog">
        <div className="container pt-3 aos-init aos-animate" data-aos="fade-up">
          <div className="section-title">
            <h2 style={{color:'black'}}>Vision &amp; Mission</h2>
            <div className="underline mx-auto"></div>
          </div>
          <div className="row">
            {vm.map((detail, idx) => {
              <div key={idx}
              className="col-lg-4 col-md-6 d-flex align-items-stretch aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="icon-box iconbox-blue">
                <div className="icon">
                  <img src={`${imageBaseURL}/${detail.icon}`} style={{ width: "50px" }} alt="Icon 1" />
                </div>
                <h4>
                  <a href="">{detail.title}</a>
                </h4>
                

                 
                <p style={{color:'black'}} >
                  {detail.description}
                </p>
                 
              </div>
            </div>
            })}
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="icon-box iconbox-blue">
                <div className="icon">
                  <img src={img1} style={{ width: "50px" }} alt="Icon 1" />
                </div>
                <h4>
                  <a href="">Vision</a>
                </h4>
                

                 
                <p style={{color:'black'}} >
                  Spondias vision is to deliver effective and efficient
                  solutions to our clients and to achieve an outstanding quality
                  of work which in turn contributes towards the success of their
                  organization.
                </p>
                 
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="icon-box iconbox-blue">
                <div className="icon">
                  <img src={img2} style={{ width: "50px" }} alt="Icon 2" />
                </div>
                <h4>
                  <a href="">Mission</a>
                </h4>
                 

                
                <p style={{color:'black'}}>
                  Spondias mission to identify the SKILL GAPS of our
                  clients, analyze the root cause and recommend them with
                  appropriate solution which in turn increases the Project
                  productivity meeting deadlines.
                </p>
                
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="icon-box iconbox-blue">
                <div className="icon">
                  <img src={img3} style={{ width: "50px" }} alt="Icon 3" />
                </div>
                <h4>
                  <a href="">Core Values</a>
                </h4>
                 

                
                <p style={{color:'black'}}>
                  Spondias is a multicultural IT and Mobile Application
                  development company dedicated to developing high-quality, cost
                  effective and timely solutions to suit your business needs. We
                  continue to work with a wide range of customers and various
                  product-service flavors.
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Vm;
