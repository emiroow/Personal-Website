import React from "react";
import { useSelector } from "react-redux";
import Footer from "./Footer";
import Analyze from "./MainComponents/Analyze";
import Banner from "./MainComponents/Banner";
import Certificate from "./MainComponents/Certificate";
import Comments from "./MainComponents/Comments";
import ContactMe from "./MainComponents/ContactMe";
import History from "./MainComponents/History";
import Map from "./MainComponents/Map";
import MyService from "./MainComponents/MyService";
import PortfolioGallery from "./MainComponents/PortfolioGallery";
export default function Main() {
  const getData = useSelector((store) => store.client.clientState);
  const getSetting = useSelector((store) => store.setting.setting);

  return (
    <div className="w-[100%] lg:w-[69%] relative h-max">
      {getSetting?.banner ? <Banner /> : null}
      {getSetting?.analysis && getData?.analyses?.length !== 0 ? (
        <Analyze />
      ) : null}
      {getSetting?.services && getData?.services?.length !== 0 ? (
        <MyService />
      ) : null}
      {getSetting?.comments && getData?.comments?.length !== 0 ? (
        <Comments />
      ) : null}
      {getSetting?.portfolios && getData?.portfolios?.length !== 0 ? (
        <PortfolioGallery />
      ) : null}
      {getSetting?.certificates && getData?.certificates?.length !== 0 ? (
        <Certificate />
      ) : null}
      {
        <History /> //Setting Config in History Component
      }
      {getSetting?.contactUsBox ? <ContactMe /> : null}
      {getSetting?.map && getData?.about?.locationAddress ? <Map /> : null}
      {getSetting?.footer ? <Footer /> : null}
    </div>
  );
}
