import React, { useState } from "react";
import star from "../../assets/starFilled.png";
import { StarIcon } from "../../Styles/globalStyles";
const Favorite = () => {
  const [isStarred, setIsStarred] = useState(true);
  const handleFavorite = () => {
    setIsStarred(!isStarred);
  };
  return (
    <StarIcon favorited={isStarred}>
      <img src={star} alt="star" onClick={handleFavorite} />{" "}
    </StarIcon>
  );
};

export default Favorite;
