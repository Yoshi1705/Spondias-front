import React, { useEffect, useState } from "react";

import img1 from "./clients/Dva.png";
import img2 from "./clients/euronext.jpg";
import img3 from "./clients/client8.png";
import img4 from "./clients/client7.png";
import img5 from "./clients/client6.png";
import img6 from "./clients/client5.png";
import img7 from "./clients/client4.png";
import img8 from "./clients/client3.png";
import img9 from "./clients/client1.png";

import './styles.css';
import client, { imageBaseURL } from "../../../../API/clients";

function Testimonials() {
  const [clients, setClients] = useState([]);
  const fetchClients = () => {
    client.get('/clients').then((response) => {
      console.log(response.data);
      setClients(response.data);
    })
  }

  useEffect(() => {
    fetchClients();
  }, [])
  return (
    <section id="clients-data" className="clients-data">
      <div className="container aos-init aos-animate pt-8" data-aos="fade-up">
        <div className="section-title">
          <h2 style={{paddingBottom:'0',marginBottom:'0'}}>Clients</h2>
          <div className="underline mx-auto"></div>
        </div>
         
        <div className="row no-gutters clients-wrap clearfix aos-init aos-animate" data-aos="fade-up">
          {clients.map((clint, idx) => {
            return <div className="col-lg-3 col-md-4 col-6" key={idx}>
            <a href={clint.link} target="_blank">
              <div class="client-logo">
                <img src={`${imageBaseURL}/${clint.logo}`} style={{height:'57px',width:'100px'}} className="img-fluid"/>
              </div>
            </a>
          </div>
          })}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
