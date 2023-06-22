import {React,useEffect, useState} from "react";
import "./styles.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Info from "./Info";
import client, { imageBaseURL } from "../../../API/clients";

function Services() {

  const [services, setServices] = useState([]);

  const [selectedService, setSelectedService] = useState(null);


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


    const clickHandler = (service) =>{

       setSelectedService(service)
      
    }


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

       {selectedService ?  (<Info  name = {selectedService.name} description = {selectedService.description}/>) :  

      (<section className="section-bg">
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
                  
                  class=" btn btn-primary mt-3" onClick={()=> clickHandler(service)}
                >
                  Read More
                </a>
              </div>
            </div>
            })}
          </div>
        </div>
      </section>)}
    </div>
  );
}

export default Services;
