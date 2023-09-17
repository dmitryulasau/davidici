import React from "react";
import "./main.css";
import SouthSharpIcon from "@mui/icons-material/SouthSharp";

export default function Main() {
  return (
    // <div className="main__container">
    //   <div className="main__content">
    //     <div className="main__header">EXPRESS PROGRAM</div>
    //     <div className="main_subheader">
    //       INVENTORY SHIPPED DIRECTLY TO YOUR CUSTOMER OF WAREHOUSE
    //     </div>
    //     <button className="main__button">ACCESS CONFIGURATOR</button>
    //     <div>
    //       <SouthSharpIcon
    //         style={{ fontSize: "100px", color: "#FFFFFF", fontWeight: "100" }}
    //       />
    //     </div>
    //   </div>
    // </div>
    <>
      <div className="container">
        {/* EXPRESS PROGRAM */}
        <div className="container__item_1 grid_header">
          <h1>EXPRESS PROGRAM</h1>
          <h3>INVENTORY DROP SHIPPED DIRECTLY TO YOUR CUSTOMER OR WAREHOUSE</h3>
          <button className="btn">ACCESS CONFIGURATOR</button>
          <SouthSharpIcon
            style={{ fontSize: "100px", color: "#FFFFFF", marginTop: "50px" }}
          />
        </div>
        {/* VANITIES */}
        <div className="container__item_2 double_item">
          <div>VANITIES</div>
          <button className="btn">ACCESS CONFIGURATOR</button>
        </div>
        {/* BATHTUBS */}
        <div className="container__item_3 double_item">
          <div>BATHTUBS</div>
          <button className="btn">VIEW MODELS</button>
        </div>
        {/* SHOWER BASES */}
        <div className="container__item_4 double_item">
          <div>SHOWER BASES</div>
          <button className="btn">VIEW MODELS</button>
        </div>
        {/* MIRRORS */}
        <div className="container__item_5 double_item">
          <div>MIRRORS</div>
          <button className="btn">VIEW MODELS</button>
        </div>
        {/* LAUNDRY */}
        <div className="container__item_6 double_item">
          <div>LAUNDRY</div>
          <button className="btn">VIEW MODELS</button>
        </div>
        {/* DESIGN WITH US */}
        <div className="container__item_7 grid_header">
          <h2>DESIGN WITH US</h2>
          <h3>
            CREATE YOUR OWN COMPOSITION OR START BY CHOOSING ONE OF OUR
            PRE-DESIGN MODELS
          </h3>
          <button className="btn">CONTACT OUR TEAM</button>
        </div>
      </div>
    </>
  );
}
