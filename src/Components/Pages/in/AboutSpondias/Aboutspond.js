import React, { useEffect, useState } from 'react';
import img from './about.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

import client, { imageBaseURL } from '../../../../API/clients';


function AboutSpond() {
  const [aboutSpond, setAboutSpond] = useState({})

  const aboutSpondias = () => {
    client.get('/menu-title-details').then((response) => {
      console.log(response.data);
      setAboutSpond(response.data[0]);
    })
  };

  useEffect(() => {
    aboutSpondias();
    AOS.init();
  }, []);

  const columnStyles = {
    padding: '20px',
    marginTop: '58px'
  };

  return (
    <div>
      <section id="about-us" className="about-us">
        <div className="container aos-init aos-animate">
          <div className="row content">
            <div className="col-lg-6 box aos-init aos-animate" data-aos="fade-right" style={columnStyles}>
              <img
                src={`${imageBaseURL}/${aboutSpond.image}`}
                alt="Left Side Image"
                style={{ width: '95%', paddingTop: '20px', paddingBottom: '60px' }}
              />
            </div>
            <div className="col-lg-6 pt-lg-0 aos-init aos-animate" data-aos="fade-left" style={columnStyles}>
              <h2 style={{ textTransform: 'uppercase', fontWeight: '600', marginBottom: '30px', color: 'black' }}>
              {aboutSpond.menu_title}
              </h2>
              <p style={{ textAlign: 'justify', color: 'black' }}>
              {aboutSpond.menu_description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutSpond;
