import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css"; // Updated stylesheet for version 6.8.4
import "swiper/swiper.min.css";
import { Navigation } from "swiper"; // Swiper modules still available
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Speakers.css";

import "swiper/css/navigation";
import "./Speakers.css";
import haha from "./../../assets/haha.jpg";
import aim from "./../../assets/aim.jpg";
import sami from "./../../assets/sami.jpg";
import taki from "./../../assets/taki.jpg";
import dja from "./../../assets/dja.jpg";
import dhayaa from "./../../assets/dhayaa.jpg";
import { useEffect } from "react";

function Speakers() {
  const speakers = [
    {
      name: "Harti Dhayaa",
      subtext: "Cyber Security",
      img: dhayaa,
    },
    {
      name: "Zerrog abdellah",
      subtext: "Forensic",
      img: "https://via.placeholder.com/500",
    },
    {
      name: " Boutemine Mohamed Djaoued",
      subtext: "Développement Frontend",
      img: dja,
    },
    {
      name: "Chaeban Wail & Kazar Ayoub",
      subtext: "Développement Backend",
      img: haha,
    },
    {
      name: "Douabi Takai Eddine",
      subtext: "Développement de Jeux video",
      img: taki,
    },
    {
      name: "Baiteche Sami",
      subtext: "Design UI/UX",
      img: sami,
    },
    {
      name: "Boukhari Aimen",
      subtext: "Intelligence Artificielle IA",
      img: aim,
    },
  ];

  useEffect(() => {
    // Ensure Swiper can find the buttons
    const swiperButtons = document.querySelectorAll(
      ".custom-prev, .custom-next"
    );
    swiperButtons.forEach((button) => {
      button.style.pointerEvents = "auto"; // Enable interaction
    });
  }, []);

  return (
    <div className="speakers-container">
      {/* Header */}
      <div className="speakers-header">
        <h1 className="speakers-title">Our Talents</h1>
        <div className="navigation-arrows">
          <button className="custom-prev">
            <FaChevronLeft size={24} />
          </button>
          <button className="custom-next">
            <FaChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          480: { slidesPerView: 2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="speakers-slider"
      >
        {speakers.map((speaker, index) => (
          <SwiperSlide key={index}>
            <div className="speaker-card">
              <div className="speaker-image-container">
                <img
                  src={speaker.img}
                  alt={speaker.name}
                  className="speaker-image"
                />
              </div>
              <p className="speaker-name">{speaker.name}</p>
              <p className="speaker-subtext">{speaker.subtext}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Speakers;
