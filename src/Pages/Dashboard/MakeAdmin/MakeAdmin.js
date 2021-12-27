import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

import useAxios from "../../../hooks/useAxios";

const MakeAdmin = () => {
  const { register, handleSubmit, reset } = useForm();
  const { admin } = useAxios();

  const onSubmit = (data) => {
    console.log(data);
    //send to server
    admin
      .put("/users", data)
      .then((response) => {
        if (response.data.modifiedCount > 0) {
          alert("Made Admin successfully");
          reset();
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h2 className="text-center my-5 text-white text-3xl">Make Admin</h2>
      <div className="text-white p-16">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1 },
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="bg-gray-100 p-5 ">
            <div className="mb-5">
              <TextField
                required
                id="standard-basic"
                label="Email"
                type="email"
                sx={{ width: "50%" }}
                defaultValue=""
                variant="standard"
                {...register("email")}
              />
            </div>
            <div>
              <Button type="submit" variant="contained" color="success">
                Make Admin
              </Button>
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default MakeAdmin;
