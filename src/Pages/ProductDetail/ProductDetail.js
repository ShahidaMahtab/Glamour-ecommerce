import * as React from "react";
import { Button, IconButton, Rating } from "@mui/material";
import { useContext, useState } from "react";
import { useParams } from "react-router";
import useProducts from "../../hooks/useProducts";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import Navigation from "../Shared/Navigation/Navigation";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { CartContext } from "../../context/CartProvider";

const ProductDetail = () => {
  const { productid } = useParams();
  const [currImg, setCurrImg] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [products] = useProducts();
  const matchedId = products.find((item) => item._id === productid);
  const { handleAddToCart } = useContext(CartContext);
  return (
    <section>
      <Navigation />
      <div className="container mx-auto lg:grid grid-cols-2 mt-10">
        <div className="p-14">
          <div className="">
            <img src={currImg ? currImg : matchedId?.img} alt="" />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {matchedId?.product_more_img?.map((img, index) => (
              <button
                onClick={() => setCurrImg(img.img)}
                key={index}
                className={`${currImg === img.img && "ring-2 ring-white"}`}
              >
                <img src={img.img} alt="img" />
              </button>
            ))}
          </div>
        </div>
        <div>
          <article className="mt-20 text-left">
            <h4 className="text-white text-3xl">{matchedId?.name}</h4>
            <div className="flex   mt-5    ">
              <p className="text-white text-base mr-3">Rating</p>
              <span>
                <Rating
                  name="read-only"
                  value={parseInt(matchedId?.rate)}
                  className="text-white"
                />
              </span>
              <div />
            </div>
            <div>
              <div className="flex mt-3">
                <p className="text-white text-base mr-3">Share</p>
                <span style={{ color: "red" }}>
                  <PinterestIcon />
                </span>
                <span style={{ color: "skyblue" }}>
                  <TwitterIcon />
                </span>
                <span style={{ color: "royalblue" }}>
                  <FacebookOutlinedIcon />
                </span>
              </div>
              <p className="mt-3 text-purple-800 text-2xl">
                {" "}
                ${matchedId?.price}.00
              </p>
              <p className="mt-3 text-white text-sm">
                {" "}
                {matchedId?.description}
              </p>
            </div>
            <div className="flex mt-3">
              <p className="text-white text-base uppercase mr-3">Colors</p>
              {matchedId?.productColors?.map((color, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedColor(color)}
                  className={`${
                    selectedColor === color && "ring-2 ring-white"
                  } rounded-full p-0.5 mr-1`}
                >
                  <span className={`block p-3 rounded-full ${color}`}></span>
                </button>
              ))}
            </div>

            <div className="flex">
              <Button
                sx={{ mt: 3 }}
                onClick={() => handleAddToCart(matchedId)}
                variant="contained"
                color="secondary"
              >
                Add To Cart
              </Button>
            </div>

            <div className="flex flex-col">
              <h4 className="text-white mt-5">Write a Review</h4>
              <div className="col-span-6 sm:col-span-12 ">
                <textarea
                  type="comment"
                  id="comment"
                  name="comment"
                  rows={5}
                  placeholder="Write your comment here...."
                  className="text-white border border-3 border-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm p-3"
                  style={{ background: "#202020" }}
                />
                <div className="mt-3">
                  <Button variant="contained" color="secondary">
                    submit
                  </Button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
