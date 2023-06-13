import { React, useEffect, useState } from 'react';
import img1 from './images/02GlobarAirPartner.png';
import img2 from './images/03PEN.png';
import img3 from './images/04TAAM.png';
import img4 from './images/05HornGen.png';
import img5 from './images/06UniversityofGreenwich.png';
import img6 from './images/07SamarthaInternationalSchool.png';
import img7 from './images/08IMV.png';
import img8 from './images/09WebbGinFarms.png';
import img9 from './images/10SriVyvidya.png';
import img10 from './images/11UKMPData.png';
import img11 from './images/client.png';

import Testimonials from '../in/Testimonials/Testimonials'
import './styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import client, { imageBaseURL } from '../../../API/clients';


function Projects() {

  const [projects, setProjects] = useState([]);

  const fetchProjects = () => {
    client.get('/projects').then((response) => {
      setProjects(response.data);
    }).catch((err) => {
      console.log(err);
    })
  }


  useEffect(() => {
    fetchProjects();
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <div>
      <div className="container-fluid" style={{ backgroundColor: '#29a9e2', paddingTop: '5px' }}>
      </div>
      <section id="breadcrumbs">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <h2>Our Projects</h2>
            <ol>
              <li>
                <a href="/">Home / </a>
              </li>
              <li style={{ marginLeft: '5px' }}> Our Projects</li>
            </ol>
          </div>
        </div>
      </section>

      <section id="clients" class="clients">
        <div class="container "  >

          <div class="section-title " data-aos="fade-up">
            <h2 style={{ marginBottom: '0', paddingBottom: '10px' }}>Our Projects</h2>
            <div className='underline mx-auto'></div>
          </div>

          <div class="row no-gutters clients-wrap clearfix   py-5" data-aos="fade-up">

            {projects.map((project, idx) => {
              return <div className="col-lg-3 col-md-4 col-6 pb-5" key={idx}>
                <a href={project.link} target="_blank" >
                  <div class="client-logo">
                    <img src={`${imageBaseURL}/${project.logo}`} class="img-fluid" alt="" />

                    <br />

                  </div>
                </a>
                <a href={project.link} target="_blank">{project.name}</a>
              </div>
            })} 
          </div>

        </div>
      </section>


      <Testimonials />
    </div>
  )
}

export default Projects;