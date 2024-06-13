import { useState } from "react";

import greyStar from "/assets/grey_star.svg";
import goldStar from "/assets/gold_star.svg";
import vassLogo from "/assets/vass_logo.svg";

import getRating from "../utils/getRating";
import setRating from "../utils/setRating";

import classes from "./RatingCard.module.scss";

const ratings = [1, 2, 3, 4, 5];

const RatingCard = () => {
  const [currentRating, setCurrentRating] = useState(getRating());

  const handleRating = (value) => {
    if (value === currentRating) {
      setCurrentRating(null);
      setRating(null);
    } else {
      setCurrentRating(value);
      setRating(value);
    }
  };

  return (
    <div className={classes.card}>
      <h1>Please Rate</h1>
      <div className={classes.rating}>
        {ratings.map((rating) => (
          <img
            key={rating}
            src={
              currentRating !== null
                ? currentRating >= rating
                  ? goldStar
                  : greyStar
                : greyStar
            }
            onClick={() => handleRating(rating)}
            onMouse
          />
        ))}
      </div>
      <p>Your Feedback is Very Important To Us.</p>
      <img src={vassLogo} alt="logo" />
    </div>
  );
};

export default RatingCard;
