import React from "react";
import { Link } from "react-router-dom";
import { urlFor } from "../../lib/client";

const WhoWeAre = (props) => {

   const {
      button_redirect_url,
      hero_images,
      main_heading,
      paragraph_text,
      top_heading,
      button_text
   } = props.data;

   const {
      hero_image_01,
      hero_image_02
   } = hero_images;

   const img01 = urlFor(hero_image_02).url();
   const img02 = urlFor(hero_image_01).url();


  return (
    <section id="about" className="about-area pt-130 pb-130">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-img wow fadeInLeft" data-wow-delay=".2s">
              <img src={img01} alt="" />
              <img src={img02} alt="" className="img-two" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content wow fadeInRight" data-wow-delay=".2s">
              <div className="section-title mb-30">
                <span className="sub-title"> {top_heading} </span>
                <h2 className="title" dangerouslySetInnerHTML={{__html: main_heading }}>

                
                </h2>
              </div>
              <p dangerouslySetInnerHTML={{__html: paragraph_text}}>
               
              </p>
              <Link to={button_redirect_url} className="btn">
                {button_text}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
