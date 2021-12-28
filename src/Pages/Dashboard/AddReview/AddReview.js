import { Rating } from "@mui/material";

import React from "react";
import { useForm } from "react-hook-form";

import useAxios from "../../../hooks/useAxios";
import useAuth from "../../../hooks/useAuth";
import StarIcon from "@mui/icons-material/Star";
const AddReview = () => {
  //useform->react hook form
  const { client } = useAxios();
  const { user } = useAuth();
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  //console.log(hover);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.rating = value;
    console.log(data);
    //send to server
    client.post("/reviews", data).then((response) => {
      if (response.data.insertedId) {
        alert("reviews added successfully");

        reset();
      }
    });
  };
  return (
    <div>
      <h2 className="text-left text-3xl text-white">Write a Review</h2>
      <div className="d-flex justify-content-center align-items-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-6">
              <input
                type="hidden"
                name="name"
                id="name"
                defaultValue={user.displayName}
                {...register("name")}
              />
            </div>
            <div className="col-span-6 sm:col-span-12 ">
              <Rating
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm "
                style={{ background: "#202020" }}
                {...register("rating")}
                name="hover-feedback"
                value={value}
                precision={0.5}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />

              {errors.rating && (
                <span className="d-block text-danger ms-2">
                  rating must be a number between 0-5
                </span>
              )}
            </div>
            <div className="col-span-6 sm:col-span-12 ">
              <textarea
                type="text"
                id="quote"
                name="quote"
                rows={5}
                placeholder="Comment.."
                className="text-white border border-3 border-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm p-5"
                style={{ background: "#202020" }}
                {...register("quote")}
              />
            </div>
            <div className="col-span-6 sm:col-span-12 ">
              <input
                type="hidden"
                name="image"
                id="image"
                defaultValue={user.photoURL}
                {...register("image")}
              />
            </div>
            <div className="col-span-6 sm:col-span-6">
              <input
                type="submit"
                value="Submit"
                className="bg-purple-800 text-white px-4 py-2 border rounded-md flex"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
