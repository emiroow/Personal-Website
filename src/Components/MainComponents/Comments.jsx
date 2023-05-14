import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import i18n from '../../i18n';
import Comment from './ChildComponents/Comment';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

export default function Comments() {
  const currentLanguageCode = i18n.language
  const poss = () => {
    if (currentLanguageCode === "fa") {
      return true
    } else {
      return false
    }
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    focusOnSelect: true,
    nextArrow: false,
    prevArrow: false,
    rtl: poss(),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
    ]
  };

  const { t } = useTranslation()
  const getData = useSelector((store) => store.client.clientState.comments)


  return (
    <>
      <div className='w-[98%] md:w-[94%] 2xl:w-[93%] m-auto mt-20'>
        <h1 className='text-shadow-dark mb-3 max-md:mt-10 font-IranBold text-xl md:text-2xl 2xl:text-3xl'>{t("ComentsTitle")}</h1>
      </div>
      <div className=' w-[85%] md:w-[95%] 2xl:w-[94%] m-auto'>
        <Slider {...settings}>
          {
            getData?.map((item, index) => {
              return (<Comment fromName={item.fromName} starCount={item.starCount} fromImgUrl={item.fromImgUrl} fromPosition={item.fromPosition} message={item.message} subject={item.subject} key={index} />)
            })
          }
        </Slider>
      </div>
    </>
  )
}
