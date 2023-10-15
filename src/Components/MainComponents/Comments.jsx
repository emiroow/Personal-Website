import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import i18n from "../../i18n";
import Comment from "./ChildComponents/Comment";

export default function Comments() {
  const currentLanguageCode = i18n.language;
  const { t } = useTranslation();
  const getData = useSelector((store) => store.client.clientState.comments);
  const poss = () => {
    if (currentLanguageCode === "fa") {
      return true;
    } else {
      return false;
    }
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: getData?.length >= 3 ? 3 : getData?.length,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    focusOnSelect: false,
    nextArrow: false,
    prevArrow: false,
    rtl: poss(),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="my-5 md:my-16">
      <div className="w-[98%] md:w-[94%] 2xl:w-[93%] m-auto">
        <h1 className="text-shadow-dark font-IranBold text-xl md:text-2xl 2xl:text-3xl">
          {t("ComentsTitle")}
        </h1>
      </div>
      <div className=" w-[85%] md:w-[95%] 2xl:w-[94%] mt-5 m-auto">
        <Slider {...settings}>
          {getData?.map((item, index) => {
            return (
              <Comment
                websiteUrl={item.websiteUrl}
                fromName={item.fromName}
                starCount={item.starCount}
                fromImgUrl={item.fromImgUrl}
                fromPosition={item.fromPosition}
                message={item.message}
                subject={item.subject}
                date={item.dateTime}
                key={index}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
