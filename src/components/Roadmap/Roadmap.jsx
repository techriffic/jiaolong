import React from "react";
import { useHorizontalScroll } from "../../lib/hooks/useHorizontalScroll";
import RoadmapItem from "./RoadmapItem";
import { urlFor } from "../../lib/client";

const Roadmap = ({data}) => {

  console.log(data);

   console.log('homepage', Object.keys(data));

   const {
      main_heading,
      main_image,
      top_heading,
      quarters_data
   } = data;



  const roadmap_items = [...quarters_data]
 
  const scrollRef = useHorizontalScroll();

  const bgImage = urlFor(main_image).url();

  return (
    <section style={{ backgroundImage: `url(${bgImage})` }} id="roadmap" className="roadmap-area pt-130 pb-130">
      <div className="container custom-container-two">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-8">
            <div className="section-title text-center mb-60">
              <span className="sub-title"> {top_heading} </span>
              <h2  dangerouslySetInnerHTML={{__html: main_heading}} className="title">
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div
              className="bt-roadmap_x bt-roadmap-scrollbar"
              ref={scrollRef}
              style={{ overflow: "auto" }}
            >
              <div className="bt-roadmap-wrap">
                {roadmap_items.map((x, index) => (
                  <RoadmapItem key={index} item={x} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
