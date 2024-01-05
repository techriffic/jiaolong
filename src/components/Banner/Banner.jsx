import React from "react";
import CountDownOne from "../CountDown/CountDownOne";
import { urlFor } from "../../lib/client";

const Banner = ({data}) => {

  const {
      bonus,
      hero_text,
      countdown,
      pre_sale_bonus,
      hero_images,
      target_raised
  } = data;

const {
    hero_image_02,
    hero_image_01,
    hero_image_04,
    hero_image_03,
    hero_image_05,
    hero_brand_icon
} = hero_images

  const shape01 = urlFor(hero_image_01).url();
  const shape02 = urlFor(hero_image_03).url();
  const shape03 = urlFor(hero_image_04).url();
  const shape05 = urlFor(hero_image_05).url();
  const fireIcon = urlFor(hero_image_02).url();
  const brandIcon = urlFor(hero_brand_icon).url();


  const isCounterOn = false;

  return (
    <section className="banner-area banner-bg" style={{ backgroundImage: `url(${shape05})` }}>
      <div className="banner-shape-wrap">
        <img src={shape01} alt="" className="img-one" />
        <img src={shape02} alt="" className="img-two" />
        <img src={shape03} alt="" className="img-three" />
      </div>

      <div className="container">

      <div className="banner-content banner-new">
              <h2 className="title" dangerouslySetInnerHTML={{ __html: hero_text }} />
              <img src= {brandIcon}/>

              </div>
      </div>

      {isCounterOn ?  
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="banner-content text-center">
              <img src={fireIcon} alt="" />
              <h2 className="title" dangerouslySetInnerHTML={{ __html: hero_text }} />
            </div>
            <div className="banner-progress-wrap">
              <ul>
                <li>Pre Sell</li>
                <li>Soft Cap</li>
                <li>Bonus</li>
              </ul>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: target_raised }}
                  aria-valuenow={target_raised}
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
              <h4 className="title">
              {pre_sale_bonus} <span> {bonus} </span>
              </h4>
            </div>
          </div>
        </div>
 

        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="banner-countdown-wrap text-center">
              <h2 className="title">Will Start In..</h2>
              <CountDownOne data={countdown} />
            </div>
          </div>
        </div>

            
      </div>
     : null }


    </section>
  );
};

export default Banner;
