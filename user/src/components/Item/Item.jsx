import React from "react";
import { useState } from "react";
import ELORA from "../../assets/ELORA.png";
import "./item.css";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import GRAY from "../../assets/charcoal_gray.png";
import BLUE from "../../assets/pacific_blue.png";
import THYME from "../../assets/sand_thyme.png";
import SAND from "../../assets/sand_white.png";
import CERAMIC from "../../assets/ceramic.png";
import BOWL from "../../assets/bowl.png";
import LEGS from "../../assets/metal_legs.png";
import NOLEGS from "../../assets/no_legs.png";
import WHITE from "../../assets/GLOSSY_WHITE.png";
import MIRROR22 from "../../assets/MIRROR_22.png";
import MIRROR32 from "../../assets/MIRROR_32.png";
import MIRROR48 from "../../assets/MIRROR_48.png";
import WALL_UNIT from "../../assets/WALL_UNIT.png";
import SHELF_ONLY from "../../assets/SHELF_ONLY.png";
import TOWEL_HOLDER from "../../assets/TOWEL_HOLDER.png";
import Finishes from "../Finishes/Finishes";

import data from "./data.json";

export default function Item() {
  const [selectedColor, setSelectedColor] = useState("Charcoal Gray Glass");
  const [selectedLegs, setSelectedLegs] = useState(true);
  const [selectedWashbasin, setSelectedWashbasin] = useState("ceramic");
  const [selectedWashbasinFinish, setSelectedWashbasinFinish] =
    useState("white");
  const [selectedMirrorCabinets, setSelectedMirrorCabinets] = useState([]);
  const [selectedAccessories, setSelectedAccessories] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(data[0]);

  const [isCleared, setIsCleared] = useState(false);

  const handleColorChange = (color) => {
    setSelectedColor(color);
    updateSelectedProduct(
      color,
      selectedLegs,
      selectedWashbasin,
      selectedWashbasinFinish
    );
  };

  const handleLegsChange = (legs) => {
    setSelectedLegs(legs);
    updateSelectedProduct(
      selectedColor,
      legs,
      selectedWashbasin,
      selectedWashbasinFinish
    );
  };

  const handleWashbasinChange = (washbasin) => {
    setSelectedWashbasin(washbasin);
    updateSelectedProduct(
      selectedColor,
      selectedLegs,
      washbasin,
      selectedWashbasinFinish
    );
  };

  const handleWashbasinFinishChange = (washbasinFinish) => {
    setSelectedWashbasinFinish(washbasinFinish);
    updateSelectedProduct(
      selectedColor,
      selectedLegs,
      selectedWashbasin,
      washbasinFinish
    );
  };

  const handleMirrorCabinetChange = (mirror) => {
    // Toggle selection
    if (selectedMirrorCabinets.includes(mirror)) {
      setSelectedMirrorCabinets(
        selectedMirrorCabinets.filter((item) => item !== mirror)
      );
    } else {
      setSelectedMirrorCabinets([...selectedMirrorCabinets, mirror]);
    }
    updateSelectedProduct(
      selectedColor,
      selectedLegs,
      selectedWashbasin,
      selectedWashbasinFinish
    );
  };

  // Function to handle multiple selection for accessories
  const handleAccessoriesChange = (accessory) => {
    // Toggle selection
    if (selectedAccessories.includes(accessory)) {
      setSelectedAccessories(
        selectedAccessories.filter((item) => item !== accessory)
      );
    } else {
      setSelectedAccessories([...selectedAccessories, accessory]);
    }
    updateSelectedProduct(
      selectedColor,
      selectedLegs,
      selectedWashbasin,
      selectedWashbasinFinish
    );
  };

  const updateSelectedProduct = (color, legs, washbasin, washbasinFinish) => {
    const product = data.find(
      (p) =>
        p.color === color &&
        p.legs === legs &&
        p.washbasin === washbasin &&
        p.finish === washbasinFinish
    );
    setSelectedProduct(product);
  };

  function renderTickMark(type) {
    if (
      selectedColor === type ||
      selectedLegs === type ||
      selectedWashbasin === type ||
      selectedWashbasinFinish === type ||
      selectedMirrorCabinets.includes(type) || // Check if it's selected mirror cabinet
      selectedAccessories.includes(type) // Check if it's selected accessory
    ) {
      return (
        <span
          style={{
            color: "gold",
            fontSize: "20px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "rgba(128, 128, 128, 0.5)", // Add grey background here
            padding: "50px", // Adjust padding as needed
          }}
        >
          ✔
        </span>
      );
    }
    return null;
  }

  const clearSelections = () => {
    setSelectedColor("Charcoal Gray Glass");
    setSelectedLegs(true);
    setSelectedWashbasin("ceramic");
    setSelectedWashbasinFinish("white");
    setSelectedMirrorCabinets([]);
    setSelectedAccessories([]);
    setIsCleared(true);
    setSelectedProduct(data[0]);
  };

  return (
    <>
      {/* HEADER */}
      <div className="item__container">
        <div className="left__side">
          <div className="fixed">
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
              <div className="flex-container">
                {selectedProduct && (
                  <img
                    src={selectedProduct.image}
                    alt={`Product ${selectedProduct.id}`}
                    className="image-fit"
                  />
                )}
                <div className="clear-button-container">
                  <button className="clear__btn" onClick={clearSelections}>
                    CLEAR
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* CONSTRUCTOR */}
        <div className="right__side">
          <div className="item__container_grid_3">
            {/* 1. FINISH */}
            <h2>1. PICK YOUR ELORA FINISH</h2>
            <div className="finish__container">
              {/* GRAY */}
              <div>
                <div
                  className="image__container"
                  style={{ position: "relative" }}
                >
                  <img
                    src={GRAY}
                    alt="gray"
                    onClick={() => handleColorChange("Charcoal Gray Glass")}
                  />
                  {renderTickMark("Charcoal Gray Glass")}
                </div>
                <p>Charcoal Gray Glass</p>
              </div>

              {/* BLUE */}
              <div>
                <div className="image__container">
                  <img
                    src={BLUE}
                    alt="Pacific Blue Glass"
                    onClick={() => handleColorChange("Pacific Blue Glass")}
                  ></img>
                  {renderTickMark("Pacific Blue Glass")}
                </div>
                <p>Pacific Blue Glass</p>
              </div>

              {/* THYME */}
              <div>
                <div className="image__container">
                  <img
                    src={THYME}
                    alt="Sand / Thyme Green Glass"
                    onClick={() =>
                      handleColorChange("Sand / Thyme Green Glass")
                    }
                  ></img>
                  {renderTickMark("Sand / Thyme Green Glass")}
                </div>
                <p>Sand / Thyme Green Glass</p>
              </div>

              {/* SAND */}
              <div>
                <div className="image__container">
                  <img
                    src={SAND}
                    alt="Sand / White Glass"
                    onClick={() => handleColorChange("Sand / White Glass")}
                  ></img>
                  {renderTickMark("Sand / White Glass")}
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
                  <img
                    src={LEGS}
                    alt="metal legs"
                    onClick={() => handleLegsChange(true)}
                  ></img>
                  {renderTickMark(true)}
                </div>

                <p>Metal legs</p>
              </div>

              {/* NO LEGS */}
              <div>
                <div className="image__container">
                  <img
                    src={NOLEGS}
                    alt="no legs"
                    onClick={() => handleLegsChange(false)}
                  ></img>
                  {renderTickMark(false)}
                </div>
                <p>No Legs</p>
              </div>
            </div>
            {/* WASHBASIN */}
            <h2>3. CHOOSE A WASHBASIN</h2>
            {/* CERAMIC */}
            <div className="legs__container">
              <div>
                <div className="image__container">
                  <img
                    src={CERAMIC}
                    alt="ceramic"
                    onClick={() => handleWashbasinChange("ceramic")}
                  ></img>
                  {renderTickMark("ceramic")}
                </div>
                <p>Ceramic 24"</p>
              </div>

              {/* BOWL */}
              <div>
                <div className="image__container">
                  <img
                    src={BOWL}
                    alt="bowl"
                    onClick={() => handleWashbasinChange("bowl")}
                  ></img>
                  {renderTickMark("bowl")}
                </div>
                <p>Washbowl 22" w/Top</p>
              </div>
            </div>
            {/* WASHBASIN FINISH */}
            <h2>4. CHOOSE A WASHBASIN FINISH</h2>
            <div className="legs__container">
              <div>
                <div className="image__container">
                  <img
                    src={WHITE}
                    alt="glossy white"
                    onClick={() => handleWashbasinFinishChange("white")}
                  ></img>
                  {renderTickMark("white")}
                </div>
                <p>Glossy White</p>
              </div>
            </div>
            {/* MIRRORS */}

            <h2>5. SELECT MIRROR CABINET</h2>
            <div className="legs__container">
              {/* 22 MIRROR */}
              <div>
                <div
                  className={`image__container ${
                    selectedMirrorCabinets.includes("22") ? "selected" : ""
                  }`}
                  onClick={() => handleMirrorCabinetChange("22")}
                >
                  <img src={MIRROR22} alt="mirror 22''" />
                  {renderTickMark("22")}
                </div>
                <p>22" Mirror Cabinet 1 Door</p>
              </div>
              {/* 32 MIRROR */}
              <div>
                <div
                  className={`image__container ${
                    selectedMirrorCabinets.includes("32") ? "selected" : ""
                  }`}
                  onClick={() => handleMirrorCabinetChange("32")}
                >
                  <img src={MIRROR32} alt="mirror 32''" />
                  {renderTickMark("32")}
                </div>
                <p>32" Mirror Cabinet 2 Doors</p>
              </div>
              {/* 48 MIRROR */}
              <div>
                <div
                  className={`image__container ${
                    selectedMirrorCabinets.includes("48") ? "selected" : ""
                  }`}
                  onClick={() => handleMirrorCabinetChange("48")}
                >
                  <img src={MIRROR48} alt="mirror 48''" />
                  {renderTickMark("48")}
                </div>
                <p>48" Mirror Cabinet 3 Doors</p>
              </div>
            </div>

            {/*  OPTIONAL ACCESSORIES */}
            <h2>6. ADD OPTIONAL ACCESSORIES</h2>
            <div className="legs__container">
              {/* WALL UNIT */}
              <div>
                <div
                  className={`image__container ${
                    selectedAccessories.includes("WallUnit") ? "selected" : ""
                  }`}
                  onClick={() => handleAccessoriesChange("WallUnit")}
                >
                  <img src={WALL_UNIT} alt="Wall Unit" />
                  {renderTickMark("WallUnit")}
                </div>
                <p>Wall Unit</p>
              </div>
              {/* SHELF ONLY*/}
              <div>
                <div
                  className={`image__container ${
                    selectedAccessories.includes("ShelfOnly") ? "selected" : ""
                  }`}
                  onClick={() => handleAccessoriesChange("ShelfOnly")}
                >
                  <img src={SHELF_ONLY} alt="Shelf Only" />
                  {renderTickMark("ShelfOnly")}
                </div>
                <p>Shelf Only</p>
              </div>
              {/* TOWEL HOLDER ONLY */}
              <div>
                <div
                  className={`image__container ${
                    selectedAccessories.includes("TowelHolderOnly")
                      ? "selected"
                      : ""
                  }`}
                  onClick={() => handleAccessoriesChange("TowelHolderOnly")}
                >
                  <img src={TOWEL_HOLDER} alt="Towel Holder Only" />
                  {renderTickMark("TowelHolderOnly")}
                </div>
                <p>Towel Holder Only</p>
              </div>
            </div>

            {/* ORDER NOW */}
            <button className="order__btn">ORDER NOW</button>
            {/* TABLE */}
            <div className="selected-products-container">
              <h2>ELORA 24″ VANITY</h2>
              <table className="selected-products-table">
                <tbody>
                  {/* Selected Finish */}
                  {selectedColor && (
                    <tr>
                      <td>
                        <strong>Elora Finish:</strong>
                      </td>
                      <td>{selectedColor.toUpperCase()}</td>
                    </tr>
                  )}

                  {/* Selected Legs */}
                  {selectedLegs !== null && (
                    <tr>
                      <td>
                        <strong>Legs:</strong>
                      </td>
                      <td>{selectedLegs ? "METAL LEGS" : "NO LEGS"}</td>
                    </tr>
                  )}

                  {/* Selected Washbasin */}
                  {selectedWashbasin && (
                    <tr>
                      <td>
                        <strong>Washbasin:</strong>
                      </td>
                      <td>
                        {selectedWashbasin === "ceramic"
                          ? 'CERAMIC 24"'
                          : 'WASHBOWL 22" W/ TOP'}
                      </td>
                    </tr>
                  )}

                  {/* Selected Washbasin Finish */}
                  {selectedWashbasinFinish && (
                    <tr>
                      <td>
                        <strong>Washbasin Finish:</strong>
                      </td>
                      <td>GLOSSY WHITE</td>
                    </tr>
                  )}

                  {/* Selected Mirror Cabinets */}
                  {selectedMirrorCabinets.length > 0 && (
                    <tr>
                      <td>
                        <strong>Optional (Mirrors):</strong>
                      </td>
                      <td>
                        {selectedMirrorCabinets.map((mirror) => (
                          <div key={mirror}>
                            {mirror === "22"
                              ? '22" MIRROR CABINET 1 DOOR'
                              : mirror === "32"
                              ? '32" MIRROR CABINET 2 DOORS'
                              : '48" MIRROR CABINET 3 DOORS'}
                          </div>
                        ))}
                      </td>
                    </tr>
                  )}

                  {/* Selected Accessories */}
                  {selectedAccessories.length > 0 && (
                    <tr>
                      <td>
                        <strong>Optional (Accessories):</strong>
                      </td>
                      <td>
                        {selectedAccessories.map((accessory) => (
                          <div key={accessory}>
                            {accessory === "WallUnit"
                              ? "WALL UNIT"
                              : accessory === "ShelfOnly"
                              ? "SHELF ONLY"
                              : "TOWEL HOLDER ONLY"}
                          </div>
                        ))}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <div className="buttons__block">
              {/* ACESS MSRP PRICE */}
              <button className="btn2">ACESS MSRP PRICE</button>
              {/* EXPLORE COLLECTION */}
              <button className="btn2">EXPLORE COLLECTION</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
