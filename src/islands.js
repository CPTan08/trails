import React from "react";
import "./island.css";
import islandData from "./islandsdata";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image, Button } from "react-bootstrap";

function IslandCard({ island }) {
  const { id, name, diff, type, base } = island;
  return (
    <div className="card">
      <img
        className="card-img-top"
        src={`${process.env.PUBLIC_URL}/islandImage/${id}.jpeg`}
        alt=""
      />
      <div className="card-body">
        <h5 className="card-title">{name.english}</h5>
        <Button variant="success">
          {type.map((subtype) => {
            return (
              <span className={`${subtype.toLowerCase()}`}>{subtype} </span>
            );
          })}
        </Button>
        <p className="card-text">{diff}</p>
        <p className="card-text">Distance:{base.Dist} km</p>
        <p className="card-text">Estimated Time:{base.Time} hours</p>
        <a href="www.google.com" class="btn btn-primary">
          More Details
        </a>
      </div>
    </div>
  );
}

function IslandGallery() {
  return (
    <div>
      <Image src="./images/islandsbanner.jpg" fluid />
      <div className="gallery">
        {islandData.map((island) => (
          <IslandCard island={island} key={island.id} />
        ))}
      </div>
    </div>
  );
}

export default IslandGallery;
