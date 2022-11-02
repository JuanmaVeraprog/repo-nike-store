import { useState } from "react";
import Button from "../Button/Button";

import { Link } from "react-router-dom";
import "./Card.css";

export default function Card(props) {
  const [expired, setExpired] = useState(props.expired);

  const cardStyles = {
    margin: "10px 15px",
    minHeight: "420px",
    width: "280px",
    height: "100%",
    borderRadius: "4px",
    boxShadow: "0px 0px 4px rgba(0,0,0,0.50)",
    backgroundColor: expired ? "#f6f6f6" : "#f6f6f6",
    overflow: "hidden",
    transition: "all 0.20s ease-in",
    cursor: "pointer",
  };

  const imgStyle = {
    filter: expired ? "grayscale(100%) blur(1px)" : "none",
  };

  function handleCardClick() {
    setExpired(!expired);
  }

  return (
    <div onClick={handleCardClick} className="card" style={cardStyles}>
      <div className="card-img">
        <img style={imgStyle} src={props.img} alt={props.title}></img>
      </div>
      <div className="card-detail">
        <h2>{props.title}</h2>
        <p>{props.detail}</p>
      </div>
      <Link to={`/prod/${props.id}`}>
        <Button>Add to Cart</Button>
      </Link>
    </div>
  );
}
