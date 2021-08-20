import React from "react";
import "./island.css";
import islandData from "./islandsdata";

function IslandCard({ island }) {
  const { id, name, type, base } = island;
  return (
    <div className="card">
      <img
        className="images"
        src={`${process.env.PUBLIC_URL}/islandImage/${id}.jpeg`}
        alt=""
      />
      <div className="container">
        <h3>{name.english}</h3>
      </div>
      <div className="container">
        {type.map((subtype) => {
          return (
            <span className={`type ${subtype.toLowerCase()}`}>{subtype} </span>
          );
        })}
      </div>

      <br></br>
      <div className="container">Distance:{base.Dist} km</div>
      <div className="container">Estimated Time:{base.Time} hours</div>
      <br></br>
    </div>
  );
}

function IslandGallery() {
  return (
    <div>
      <br></br>
      <div className="gallery">
        {islandData.map((island) => (
          <IslandCard island={island} key={island.id} />
        ))}
      </div>
    </div>
  );
}

export default IslandGallery;
