import React from "react";
// import Slider from "react-slick";
import Layout from "../components/layout/Layout.js";
import "./Homepage.css";

import Heroimg from "../assets/Hero.png";


const Homepage = () => {
  

  return (
    <Layout title={"Time Digitals/Home"}>
      {/* Hero Banner */}
      <section className="Hero">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-8 col-md-6 col-sm-12"
            >
              <div className="heroimageside">
                <img
                  src={Heroimg}
                  
                  alt="Hero Image"
                  className="hero-image w-100"
                />
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              //   data-aos="zoom-in-right"
            >
              <div className="copy">
                <div className="top-small">TIME DIGITALS</div>
                <div className="text-bold">
                  Everything you can imagine is an Art
                </div>
                <div className="bottom-small">
                  Let us help you with all of your printing & graphics
                </div>
                <div className="Hero-Button">
                  <a href="https://wa.me/9391069394" target="_blank">
                    <button className="hero-btn">Get Quote</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Long Strip */}
      <section className="Long">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6 col-sm-12">
              <div className="Long-text">
                Flex and Banner
                <br />
                <span className="L-change">Printing Machine</span>
              </div>
            </div>
            <div className="col-lg-7 col-md-6 col-sm-12">
              <div className="Long-regular">
                Prominent & Leading Service Provider from Hyderabad, we offer
                solvent banner printing machines, konica minolta flex printing
                machine, konica flex printing machine, rodin solvent printers
                konika 512i, used automatic flex printing machine and used
                digital banner printing machine.
              </div>
             
            </div>
          </div>
        </div>
      </section>

      
    </Layout>
  );
};

export default Homepage;
