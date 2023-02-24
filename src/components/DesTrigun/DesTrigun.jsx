import React from "react";
import "./DesTrigun.css";
import img1 from "../../media/8b8e139c764c05a681947b2d6855bd331.png";
import img2 from "../../media/image3.png";

export default function DesTrigun() {
  return (
    <div className="trigun-container">
      <div id="rectangle">
        <img className="trigunHero" src={img1} alt="trigunHero" />
        <img className="trigunCase" src={img2} alt="trigunCase" />
        <div id="frame-des">
          <p id="title-des">Trigun Stampede</p>
          <p id="subtitle-des">Manga</p>
          <p id="description-des">
            TRIGUN is a popular action manga by Yasuhiro Nightow that follows
            the story of Vash Stampede, a legendary gunfighter and pacifist with
            a huge bounty on his head.
          </p>
        </div>
      </div>
    </div>
  );
}
