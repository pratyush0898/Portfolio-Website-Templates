import React, { useState } from "react";
import Open from '/Open-ico.svg'
import "./Card.css";

const Card = ({ img, text, Link }) => {
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

  const handleImageLoaded = (event) => {
    const { naturalWidth, naturalHeight } = event.target;
    setImageSize({ width: naturalWidth, height: naturalHeight });
  };

  function Openlink() {
    if (Link) {
      window.open(Link, "_blank");
    } else {
      console.error("No link provided");
    }
  }

  return (
    <div className="card" height={imageSize.width} width={imageSize.height}>
      <div className="image">
        <div className="card-header hover">
          <button className="save-button" onClick={Openlink}>
            <img src={Open} alt="Save" />
          </button>
        </div>

        <img
          src={img}
          alt={text}
          className="card-image"
          onLoad={handleImageLoaded}
        />
      </div>
      <div className="text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Card;
