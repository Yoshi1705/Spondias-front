import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img from './map.jpg';
import './styles.css';


function Contact() {

  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);


  return (
    <div>
       <div className="container-fluid" style={{backgroundColor:'#29a9e2',paddingTop:'5px' }}> 
    </div>
      <section id="breadcrumbs">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <h2>Contact</h2>
            <ol>
              <li>
                <a href="/">Home / </a>
              </li>
              <li style={{marginLeft:'5px'}}> Contact</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="contact-us-area aos-init aos-animate" data-aos="fade-up"  >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 aos-init aos-animate" data-aos="fade-right">
              <div className="contact-title">
                <h3>CORPORATE OFFICE – UK</h3>
                <p># 20-22 Wenlock Road, London, England, N1 7GU</p>
                <p>+44 333 006 4609</p>
              </div>
              <div><br /></div>
              <div className="contact-title">
                <h3>CORPORATE OFFICE – INDIA</h3>
                <p># Chadika vari Street, Jagannaickpur, Kakinada, 533002</p>
                <p>+91 79977 11112 +91 79977 11114</p>
              </div>
              <div><br /></div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="about-us-img">
                <img src={img} alt="About Us" style={{ width: '100%', height: '350px' }} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 aos-init aos-animate" data-aos="fade-right">
              <div className="row pt-4">
                <div className="col-lg-6">
                  <div className="contact-title">
                    <h3>Corporate Training</h3>
                    <a href="mailto:nabi@spondias.com">nabil@spondias.com</a><br />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="contact-title">
                    <h3>HR Staffing</h3>
                    <a href="mailto:staffing@spondias.com">staffing@spondias.com</a>
                  </div>
                </div>
              </div>
              <div className="row pt-4">
                <div className="col-lg-6">
                  <div className="contact-title">
                    <h3>Training Infra</h3>
                    <a href="mailto:infra@spondias.com">infra@spondias.com</a><br />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="contact-title">
                    <h3>Careers</h3>
                    <a href="mailto:careers@spondias.com">careers@spondias.com</a>
                    <p>Drop a mail for any career-related queries</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-form">
                <form id="contactForm" noValidate="true">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input type="text" name="name" id="name" className="form-control" required="" data-error="Please enter your name" placeholder="Your Name" />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input type="text" name="company_name" id="company_name" className="form-control" required="" data-error="Enter your Company Name" placeholder="Company Name" />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input type="text" name="email" id="email" className="form-control" required="" data-error="Enter your Email Address" placeholder="Email Address" />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input type="text" name="telephone_number" id="telephone_number" required="" data-error="Enter your Telephone Number" className="form-control" placeholder="Telephone Number" />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <textarea name="message" className="form-control" id="message" cols="30" rows="5" required="" data-error="Write your message" placeholder="Your Message"></textarea>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button type="submit" className="default-btn btn-two" style={{backgroundColor:' #29a9e2'}}>
                        <span className="label" style={{color:'white'}}>Send Message</span>
                        <i className="bx bx-plus"></i>
                      </button>
                      <div id="msgSubmit" className="h3 text-center hidden"></div>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
