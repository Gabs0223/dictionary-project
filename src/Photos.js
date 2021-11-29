import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (photo, i) {
            return (
              <div className="col-4" key={i}>
                <img
                  src={photo.src.landscape}
                  className="img-fluid"
                  crossOrigin="anonymous"
                />
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
