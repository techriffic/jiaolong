import React from "react";
import SalesTabButton from "./SalesTabButton";
import SalesTabContent from "./SalesTabContent";
import { urlFor } from "../../lib/client";

const Sales = ({data}) => {



 const {

    main_image,
    right_side_object,
    fund_allocation,
    main_heading,
    buy_now_redirect
 } = data;



 const {
    image,
    objects
 } = right_side_object;

 const chartImg = urlFor(image).url()



 const  bgImage = urlFor(main_image).url()

  const chart_info_list = [
...objects
  ];



  return (
    <section id="sales" className="chart-area chart-bg "  style={{ backgroundImage: `url(${bgImage})` }} >
      <div className="container">
        <div className="chart-inner">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-10 order-0 order-lg-2">
              <div  className="chart-wrap wow fadeInRight" data-wow-delay=".2s" >
                <img src={chartImg} alt="" />
                <ul>
                  {chart_info_list.map((x, index) => (
                    <li 
                    style={{
                      "--background-color": x.color
                    }}
                     key={index}>{x.paragraph_text}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-6 col-md-10">
              <div
                className="chart-content wow fadeInLeft"
                data-wow-delay=".2s"
              >
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                 
                  <SalesTabButton
                    title={main_heading}
                    className=""
                    id="token-tab"
                    target="#token"
                    ariaControls="token"
                    ariaSelected={false}
                  />
                </ul>

                <div className="tab-content" id="myTabContent">
                  <SalesTabContent
                    className={"show active"}
                    id="funding"
                    ariaLabel="funding-tab"
                    title={fund_allocation.conversion_text}
                    description={fund_allocation.conversion_paragraph}
                    link={buy_now_redirect}
                  />

                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sales;
