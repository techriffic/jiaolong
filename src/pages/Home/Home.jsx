import React from "react";
import Banner from "../../components/Banner/Banner";
import ContactOne from "../../components/Contact/ContactOne";
import Roadmap from "../../components/Roadmap/Roadmap";
import Sales from "../../components/Sales/Sales";
import TeamOne from "../../components/Team/TeamOne";
import TopPartners from "../../components/TopPartners/TopPartners";
import WhitePaper from "../../components/WhitePaper/WhitePaper";
import WhoWeAre from "../../components/WhoWeAre/WhoWeAre";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import LayoutOne from "../../layouts/LayoutOne";

import useFetchData from "../../lib/hooks/fetchData";
import siteData from '../../data/site-data.json'
import PageLoader from "../../components/PageLoader/PageLoader";


const Home = () => {

  const data = useFetchData();

  if(data === 'loading...'){
    return  <PageLoader />
  }

  const { pageBuilder, seo, website_email,website_logo,website_name,

  }  = data;

  const {
      sixthSectionHome,
      thirdSectionHome,
      secondSectionHome,
      eightSectionHome,
      heroBanner,
      fifthSectionHome,
      fourthSectionHome,
      contactSection
} = pageBuilder;

// console.log('homepage', Object.keys(data.secondSectionHome));


const isPartnerDisplay = false;
const isWhyChooseUsDisplay = false;
const isWhitePaperDisplay = false;

  return (
    <LayoutOne logoImage={website_logo}>
      <main className="fix">
        <Banner data={heroBanner} />
        <WhoWeAre data={secondSectionHome} />


           {isPartnerDisplay ? <TopPartners /> : null }
           {isWhyChooseUsDisplay ? <WhyChooseUs /> : null }
        

        <Sales data={fifthSectionHome} />

        <div className="area-bg">
          <Roadmap data={sixthSectionHome} />
          {isWhitePaperDisplay ?  <WhitePaper /> : null }
        </div>

        <TeamOne data={eightSectionHome} />
        <ContactOne data={contactSection} />
      </main>
    </LayoutOne>
  );
};

export default Home;
