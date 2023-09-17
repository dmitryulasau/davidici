import React from "react";
import ELORA from "../../assets/ELORA.png";
import "./item.css";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import GRAY from "../../assets/charcoal_gray.png";
import BLUE from "../../assets/pacific_blue.png";
import THYME from "../../assets/sand_thyme.png";
import WHITE from "../../assets/sand_white.png";

import LEGS from "../../assets/metal_legs.png";
import NOLEGS from "../../assets/no_legs.png";
import Finishes from "../Finishes/Finishes";

export default function Item() {
  const data = [
    {
      id: 1,
      name: 'ELORA 24"',
      SKU: "GH179",
      colors: [
        "charcoal gray glass",
        "pacific blue glass",
        "sand/thyme green glass",
        "sand/white glass",
      ],
      legs: [true, false],
      washbasin: ["ceramic", "washbowl"],
      washbasinFinish: ["glossy white"],
      mirror: [false, "22 Mirror", "32 Mirror", "48 Mirror"],
      accessories: [false, "wall unit", "shelf only", "towel holder only"],
    },
  ];
  return (
    <>
      {/* HEADER */}
      <div className="item__container">
        <div className="item__container_grid_1">
          <div className="back__btn">
            <ArrowLeftOutlinedIcon
              style={{ fontSize: "40px", color: "var(--color-gold)" }}
            />
            <span>BACK</span>
          </div>
          <h1>ELORA 24″</h1>
        </div>

        {/* IMAGE */}
        <div className="item__container_grid_2">
          <img src={ELORA} alt="ELORA 24" style={{ width: "100%" }} />
        </div>

        {/* CONSTRUCTOR */}
        <div className="item__container_grid_3">
          {/* 1. FINISH */}
          <h2>1. PICK YOUR ELORA FINISH</h2>
          <Finishes />
          <div className="finish__container">
            {/* GRAY */}
            <div>
              <div className="image__container">
                <img src={GRAY} alt="gray"></img>
              </div>
              <p>Charcoal Gray Glass</p>
            </div>

            {/* BLUE */}
            <div>
              <div className="image__container">
                <img src={BLUE} alt="gray"></img>
              </div>
              <p>Pacific Blue Glass</p>
            </div>

            {/* THYME */}
            <div>
              <div className="image__container">
                <img src={THYME} alt="gray"></img>
              </div>
              <p>Sand / Thyme Green Glass</p>
            </div>

            {/* WHITE */}
            <div>
              <div className="image__container">
                <img src={WHITE} alt="gray"></img>
              </div>
              <p>Sand / White Glass</p>
            </div>
          </div>
          {/* 2. LEGS */}
          <h2>2. SELECT A LEGS</h2>
          <div className="legs__container">
            {/* METAL LEGS */}
            <div>
              <div className="image__container">
                <img src={LEGS} alt="gray"></img>
              </div>
              <p>Metal legs</p>
            </div>

            {/* NO LEGS */}
            <div>
              <div className="image__container">
                <img src={NOLEGS} alt="gray"></img>
              </div>
              <p>No Legs</p>
            </div>
          </div>

          {/* WASHBASIN */}
          {/* WASHBASIN FINISH */}
          {/* MIRROR */}
          {/* ACCESSORIES */}
          {/* ORDER NOW */}
          {/* TABLE */}
          {/* ACESS MSRP PRICE */}
          {/* EXPLORE COLLECTION */}
        </div>
      </div>
    </>
  );
}
