import React from "react";
import guitarPhoto from "./images/guitar.jpg";

const DisplayArtists = (props) => {
  return (
    <div>
      <div className="card" style={{ width: "18rem", margin: "20px 0 0 40px" }}>
        <img src={guitarPhoto} alt="#" style={{ height: 150 }} />
        <div className="card-body">
          <h5 className="card-title">Similar Artists</h5>
          <p className="card-content">
            These are similar artists to {props.query}
          </p>
          <ul className="list-group list-group-flush">
            {props.artists.map((artist, i) => (
              <li className="list-group-item" key={i}>
                {artist.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DisplayArtists;
