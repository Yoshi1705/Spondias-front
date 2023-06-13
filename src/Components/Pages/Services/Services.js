import {React,useEffect, useState} from "react";
import "./styles.css";
import img1 from "./Images/image_625d3a57b6.jpg";
import img2 from "./Images/image_625d3a6ee7.jpg";
import img3 from "./Images/image_625d3a8097.jpg";
import img4 from "./Images/image_625d3d208b.jpg";
import img5 from "./Images/image_625d3db74e.jpg";
import img6 from "./Images/image_625d3dfd5a.jpg";
import img7 from "./Images/image_625d3e3ed1.jpg";
import img8 from "./Images/image_625d3e74e3.jpg";
import img9 from "./Images/image_625d3e74em.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';
import client, { imageBaseURL } from "../../../API/clients";

function Services() {

  const [services, setServices] = useState([]);

  const fetchServices = () => {
    client.get('services/').then((response) => {
      console.log(response.data);
      setServices(response.data);
    }).catch((error)=> {
      console.log(error)
    })
  }

  useEffect(() => {
    fetchServices();
    AOS.init();
  }, []);

  return (
    <div className="services">
       <div className="container-fluid" style={{backgroundColor:'#29a9e2',paddingTop:'5px' }}> 
    </div>
      <section id="breadcrumbs">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <h2>Services</h2>
            <ol>
              <li>
                <a href="/">Home / </a>
              </li>
              <li> Services</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="section-bg">
        <div class="container pt-6 aos-init aos-animate" data-aos="fade-up">
          <div class="row">
            {services.map((service, idx) => {
              return  <div
              class="col-lg-4 col-md-6 d-flex align-items-stretch mt-2 mb-2 aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay="100"
              key={idx}
            >
              <div class="icon-box iconbox-blue">
                <div class="icon">
                  <img src={`${imageBaseURL}/${service.image}`} alt="hosting" style={{ width: "100%" }} />
                </div>

                <h4>
                  <a href="#">{service.name}</a>
                </h4>

                <p>
                  {service.description}
                </p>

                <a
                  href="readmore.php?topic=Hosting"
                  class=" btn btn-primary mt-3"
                >
                  Read More
                </a>
              </div>
            </div>
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
