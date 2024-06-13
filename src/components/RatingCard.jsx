import { useState } from "react";

import greyStar from "/assets/grey_star.svg";
import goldStar from "/assets/gold_star.svg";
import halfStar from "/assets/half_star.svg";
import vassLogo from "/assets/vass_logo.svg";

import getRating from "../utils/getRating";
import setRating from "../utils/setRating";

import classes from "./RatingCard.module.scss";

const ratings = [1, 2, 3, 4, 5];

const RatingCard = () => {
  const [currentRating, setCurrentRating] = useState(getRating());
  const [hoveredRating, setHoveredRating] = useState(null);

  const handleRating = (event, value) => {
    const boundingRect = event.target.getBoundingClientRect();

    if (event.clientX < boundingRect.x + boundingRect.width / 2) {
      setCurrentRating(value - 0.5);
      setRating(value - 0.5);
    } else {
      setCurrentRating(value);
      setRating(value);
    }
  };

  const handleMouseOver = (event, value) => {
    const boundingRect = event.target.getBoundingClientRect();
    if (event.clientX < boundingRect.x + boundingRect.width / 2) {
      setHoveredRating(value - 0.5);
    } else {
      setHoveredRating(value);
    }
  };

  const handleMouseOut = () => {
    setHoveredRating(null);
  };

  const activeRating = hoveredRating ? hoveredRating : currentRating;

  const getStar = (rating) => {
    if (activeRating) {
      if (activeRating === rating - 0.5) {
        return halfStar;
      } else {
        if (activeRating >= rating) {
          return goldStar;
        } else {
          return greyStar;
        }
      }
    } else {
      return greyStar;
    }
  };

  return (
    <div className={classes.card}>
      <h1>Please Rate</h1>
      <div className={classes.rating}>
        {ratings.map((rating) => (
          <div key={rating}>
            <img
              src={getStar(rating)}
              onClick={(event) => handleRating(event, rating)}
              onMouseOver={(event) => handleMouseOver(event, rating)}
              onMouseOut={handleMouseOut}
              alt="star"
            />
          </div>
        ))}
      </div>
      <p>Your Feedback Is Very Important To Us.</p>
      <img src={vassLogo} alt="logo" />
    </div>
  );
};

export default RatingCard;
