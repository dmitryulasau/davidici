import React from "react";
import GRAY from "../../assets/charcoal_gray.png";
import BLUE from "../../assets/pacific_blue.png";
import THYME from "../../assets/sand_thyme.png";
import WHITE from "../../assets/sand_white.png";
import "./finishes.css";

function ImageItem({ src, alt, className }) {
  const imageStyles = {
    width: "100%",
    border: "1px solid #A8A8A8",
    transition: "border 0.3s",
  };

  return (
    <div className={`image-item ${className}`}>
      <img src={src} alt={alt} style={imageStyles}></img>
    </div>
  );
}

export default function Finishes() {
  const pStyles = {
    maxWidth: "80px",
    wordWrap: "break-word",
  };

  const finishes = [
    {
      src: GRAY,
      alt: "Charcoal Gray Glass",
      desc: "Charcoal Gray Glass",
    },
    {
      src: BLUE,
      alt: "Pacific Blue Glass",
      desc: "Pacific Blue Glass",
    },
    {
      src: THYME,
      alt: "Sand / Thyme Green Glass",
      desc: "Sand / Thyme Green Glass",
    },
    {
      src: WHITE,
      alt: "Sand / White Glass",
      desc: "Sand / White Glass",
    },
  ];
  return (
    <div className="finishes__container">
      {finishes.map((image, index) => (
        <div className="color__container">
          <ImageItem
            className="image_finish"
            key={index}
            src={image.src}
            alt={image.alt}
          />
          <p style={pStyles}>{image.desc}</p>
        </div>
      ))}
    </div>
  );
}
