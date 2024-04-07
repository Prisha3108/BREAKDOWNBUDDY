import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function InformationCard(props) {
  return (
    <div className="info-cards">
      <span className="info-card-icon">
        <FontAwesomeIcon className="info-fa-icon" icon={props.icon} />
      </span>
      <p className="info-card-title">{props.title}</p>
      <img className="info-card-image" src={props.imageSrc} alt={props.title} />
      <p className="info-card-description">{props.description}</p>
    </div>
  );
}

export default InformationCard;
