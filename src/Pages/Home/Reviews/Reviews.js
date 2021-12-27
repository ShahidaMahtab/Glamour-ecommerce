import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Review from "../Review/Review";
import "../Review/Review.css";
import { Container } from "@mui/material";
import useAxios from "../../../hooks/useAxios";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { client } = useAxios();
  useEffect(() => {
    client.get("/reviews").then((response) => {
      setReviews(response.data);
    });
  }, []);
  var settings = {
    dots: true,
    infinite: false,

    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container sx={{ mb: 5 }}>
      <div className="p-5">
        <h3 className="text-3xl text-white font-bold mb-11">
          <span className="text-purple-800">/</span>Customer Reviews
        </h3>

        <div className="text-white mx-auto border-white border-5">
          <Slider {...settings}>
            {reviews.map((review) => (
              <Review key={review._id} review={review} />
            ))}
          </Slider>
        </div>
      </div>
    </Container>
  );
};
export default Reviews;
