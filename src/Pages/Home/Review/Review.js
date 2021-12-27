import React from "react";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";
import { Avatar, Rating } from "@mui/material";

const personImg = {
  margin: "0 auto",
  borderRadius: "50%",
  marginBottom: "1rem",
  width: "150px",
  height: "150px",
  objectFit: "cover",
  border: "4px solid white",
  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
};

const Review = ({ review }) => {
  const { image, name, quote, rating } = review;
  return (
    <article className="mx-auto">
      <div className="mx-auto">
        <Avatar
          alt={name.slice(0, 1)}
          src={image}
          className="bg-secondary"
          style={personImg}
        />
      </div>
      <div className="mx-auto text-center">
        <h4 className="text-2xl text-white capitalize">{name}</h4>
        <Rating name="read-only" value={rating} />

        <p className="text-white text-sm">{quote}</p>
        <FormatQuoteRoundedIcon color="secondary" fontSize="large" />
      </div>
    </article>
  );
};

export default Review;
