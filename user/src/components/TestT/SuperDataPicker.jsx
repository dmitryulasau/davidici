import React, { useState } from "react";

const SuperDataPicker = () => {
  const superData = [
    // GRAY
    {
      id: 1,
      color: "gray",
      legs: true,
      washbasin: "ceramic",
      finish: "white",
      image:
        "https://res.cloudinary.com/dulasau/image/upload/v1694529039/ELORA_24/GRAY_LEGS_CERAMIC_WHITE_aqubda.png",
    },
    {
      id: 2,
      color: "gray",
      legs: true,
      washbasin: "bowl",
      finish: "white",
      image:
        "https://res.cloudinary.com/dulasau/image/upload/v1694529039/ELORA_24/GRAY_LEGS_WASHBOWL_WHITE_r9tzob.png",
    },
    {
      id: 3,
      color: "gray",
      legs: false,
      washbasin: "bowl",
      finish: "white",
      image:
        "https://res.cloudinary.com/dulasau/image/upload/v1694529038/ELORA_24/GRAY_NOLEGS_WASHBOWL_WHITE_nxadcz.png",
    },
    {
      id: 4,
      color: "gray",
      legs: false,
      washbasin: "ceramic",
      finish: "white",
      image:
        "https://res.cloudinary.com/dulasau/image/upload/v1694529039/ELORA_24/GRAY_NOLEGS_CERAMIC_WHITE_f9urfx.png",
    },
    // BLUE
    {
      id: 5,
      color: "blue",
      legs: true,
      washbasin: "ceramic",
      finish: "white",
      image:
        "https://res.cloudinary.com/dulasau/image/upload/v1694529037/ELORA_24/BLUE_LEGS_CERAMIC_WHITE_yqe6hb.png",
    },
    {
      id: 6,
      color: "blue",
      legs: true,
      washbasin: "bowl",
      finish: "white",
      image:
        "https://res.cloudinary.com/dulasau/image/upload/v1694529037/ELORA_24/BLUE_LEGS_WASHBOWL_WHITE_pjkjom.png",
    },
    {
      id: 7,
      color: "blue",
      legs: false,
      washbasin: "bowl",
      finish: "white",
      image:
        "https://res.cloudinary.com/dulasau/image/upload/v1694529038/ELORA_24/BLUE_NOLEGS_WASHBOWL_WHITE_gissip.png",
    },
    {
      id: 8,
      color: "blue",
      legs: false,
      washbasin: "ceramic",
      finish: "white",
      image:
        "https://res.cloudinary.com/dulasau/image/upload/v1694529037/ELORA_24/BLUE_NOLEGS_CERAMIC_WHITE_xldaj4.png",
    },
    //THYME
    {
      id: 9,
      color: "thyme",
      legs: true,
      washbasin: "ceramic",
      finish: "white",
      image:
        "https://res.cloudinary.com/dulasau/image/upload/v1694529041/ELORA_24/THYME_LEGS_CERAMIC_WHITE_li0gkr.png",
    },
    {
      id: 10,
      color: "thyme",
      legs: true,
      washbasin: "bowl",
      finish: "white",
      image:
        "https://res.cloudinary.com/dulasau/image/upload/v1694529040/ELORA_24/THYME_LEGS_WASHBOWL_WHITE_aaj5mf.png",
    },
    {
      id: 11,
      color: "thyme",
      legs: false,
      washbasin: "bowl",
      finish: "white",
      image:
        "https://res.cloudinary.com/dulasau/image/upload/v1694529037/ELORA_24/THYME_NOLEGS_WASHBOWL_WHITE_iujsfh.png",
    },
    {
      id: 12,
      color: "thyme",
      legs: false,
      washbasin: "ceramic",
      finish: "white",
      image:
        "https://res.cloudinary.com/dulasau/image/upload/v1694529041/ELORA_24/THYME_NOLEGS_CERAMIC_WHITE_osrefz.png",
    },
    // SAND
    {
      id: 13,
      color: "sand",
      legs: true,
      washbasin: "ceramic",
      finish: "white",
      image:
        "https://res.cloudinary.com/dulasau/image/upload/v1694529039/ELORA_24/SAND_LEGS_CERAMIC_WHITE_jj1ggz.png",
    },
    {
      id: 14,
      color: "sand",
      legs: true,
      washbasin: "bowl",
      finish: "white",
      image:
        "https://res.cloudinary.com/dulasau/image/upload/v1694529039/ELORA_24/SAND_LEGS_WASHBOWL_WHITE_qmlz7v.png",
    },
    {
      id: 15,
      color: "sand",
      legs: false,
      washbasin: "bowl",
      finish: "white",
      image:
        "https://res.cloudinary.com/dulasau/image/upload/v1694529039/ELORA_24/SAND_NOLEGS_WASHBOWL_WHITE_zijgs8.png",
    },
    {
      id: 16,
      color: "sand",
      legs: false,
      washbasin: "ceramic",
      finish: "white",
      image:
        "https://res.cloudinary.com/dulasau/image/upload/v1694529038/ELORA_24/SAND_NOLEGS_CERAMIC_WHITE_b0gyrt.png",
    },
  ];
  const [selectedColor, setSelectedColor] = useState("gray");
  const [selectedLegs, setSelectedLegs] = useState(true);
  const [selectedWashbasin, setSelectedWashbasin] = useState("ceramic");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleColorChange = (color) => {
    setSelectedColor(color);
    updateSelectedProduct(color, selectedLegs, selectedWashbasin);
  };

  const handleLegsChange = (legs) => {
    setSelectedLegs(legs);
    updateSelectedProduct(selectedColor, legs, selectedWashbasin);
  };

  const handleWashbasinChange = (washbasin) => {
    setSelectedWashbasin(washbasin);
    updateSelectedProduct(selectedColor, selectedLegs, washbasin);
  };

  const updateSelectedProduct = (color, legs, washbasin) => {
    const product = superData.find(
      (p) => p.color === color && p.legs === legs && p.washbasin === washbasin
    );
    setSelectedProduct(product);
  };

  return (
    <div>
      <h1>SuperData Picker</h1>
      <div>
        <label htmlFor="colorPicker">Color:</label>
        <button
          onClick={() => handleColorChange("gray")}
          style={{
            backgroundColor: "gray",
            width: "20px",
            height: "20px",
            margin: "5px",
            border: "none",
          }}
        ></button>
        <button
          onClick={() => handleColorChange("blue")}
          style={{
            backgroundColor: "blue",
            width: "20px",
            height: "20px",
            margin: "5px",
            border: "none",
          }}
        ></button>
        <button
          onClick={() => handleColorChange("thyme")}
          style={{
            backgroundColor: "green",
            width: "20px",
            height: "20px",
            margin: "5px",
            border: "none",
          }}
        ></button>
        <button
          onClick={() => handleColorChange("sand")}
          style={{
            backgroundColor: "tan",
            width: "20px",
            height: "20px",
            margin: "5px",
            border: "none",
          }}
        ></button>
      </div>

      <div>
        <label htmlFor="legsPicker">Legs:</label>
        <button
          onClick={() => handleLegsChange(true)}
          style={{
            width: "20px",
            height: "20px",
            margin: "5px",
            border: "none",
            backgroundColor: "green",
          }}
        >
          With Legs
        </button>
        <button
          onClick={() => handleLegsChange(false)}
          style={{
            width: "20px",
            height: "20px",
            margin: "5px",
            border: "none",
            backgroundColor: "red",
          }}
        >
          Without Legs
        </button>
      </div>

      <div>
        <label htmlFor="washbasinPicker">Washbasin:</label>
        <button
          onClick={() => handleWashbasinChange("ceramic")}
          style={{
            width: "80px",
            height: "20px",
            margin: "5px",
            border: "none",
            backgroundColor: "white",
          }}
        >
          Ceramic
        </button>
        <button
          onClick={() => handleWashbasinChange("bowl")}
          style={{
            width: "80px",
            height: "20px",
            margin: "5px",
            border: "none",
            backgroundColor: "white",
          }}
        >
          Bowl
        </button>
      </div>

      <div>
        <h2>Selected Product</h2>
        {selectedProduct ? (
          <div>
            <h3>ID: {selectedProduct.id}</h3>
            <h3>Color: {selectedProduct.color}</h3>
            <h3>Legs: {selectedProduct.legs ? "With Legs" : "Without Legs"}</h3>
            <h3>Washbasin: {selectedProduct.washbasin}</h3>
            <h3>Finish: {selectedProduct.finish}</h3>
            <img
              width={"600px"}
              src={selectedProduct.image}
              alt={`Product ${selectedProduct.id}`}
            />
          </div>
        ) : (
          <p>No matching product found.</p>
        )}
      </div>
    </div>
  );
};

export default SuperDataPicker;
