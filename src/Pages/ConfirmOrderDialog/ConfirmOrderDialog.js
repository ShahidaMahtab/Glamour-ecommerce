import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { Button } from "@mui/material";
import { clearTheCart, getStoredCart } from "../../utilities/localStore";
import useAxios from "../../hooks/useAxios";
import { useSnackbar } from "notistack";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  //bgcolor: "background.paper",
  background: "#202020",
  border: "2px solid #202020",
  boxShadow: 24,
  color: "white",
  p: 4,
};

const ConfirmOrderDialog = ({ open, handleClose, handleCartClear }) => {
  const { user } = useAuth();
  const { client } = useAxios();
  const { enqueueSnackbar } = useSnackbar();
  //date
  const date = new Date();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const savedCart = getStoredCart();
    const orderItems = [];
    for (const key in savedCart) {
      orderItems.push({ item_id: key, quantity: savedCart[key] });
    }

    data.orderItems = orderItems;
    client
      .post("/order", data)
      .then((response) => {
        if (response.data.insertedId) {
          enqueueSnackbar("ordered successfully");
          reset();
          clearTheCart();
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-6 gap-6">
                  <input
                    type="hidden"
                    defaultValue={"pending"}
                    {...register("status")}
                  />
                  <input
                    type="hidden"
                    defaultValue={date.toLocaleDateString()}
                    {...register("date")}
                  />
                  <div className="col-span-6 sm:col-span-12">
                    <input
                      type="text"
                      name="name"
                      id="first-name"
                      defaultValue={user?.displayName}
                      {...register("name", { required: true })}
                      className="border border-3 border-white rounded-md p-3 text-white mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm bg-gray-300"
                    />
                    {errors.name?.type === "required" && (
                      <span style={{ color: "red" }}>Name is required</span>
                    )}
                  </div>

                  <div className="col-span-6 sm:col-span-12">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      defaultValue={user?.email}
                      {...register("email", { required: true })}
                      className="border border-3 border-white rounded-md p-3 text-white mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm "
                      style={{ background: "#202020" }}
                    />
                    {errors.email?.type === "required" && (
                      <span style={{ color: "red" }}>Email is required</span>
                    )}
                  </div>

                  <div className="col-span-6 sm:col-span-12">
                    <input
                      type="number"
                      name="phone"
                      id="phone"
                      placeholder="+880"
                      {...register("phone", { required: true })}
                      className="border border-3 border-white rounded-md p-3 text-white mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm "
                      style={{ background: "#202020" }}
                    />
                    {errors.phone?.type === "required" && (
                      <span style={{ color: "red" }}>Phone is required</span>
                    )}
                  </div>
                  <div className="col-span-6 sm:col-span-12">
                    <input
                      type="text"
                      name="address"
                      id="address"
                      placeholder="adddress"
                      {...register("address", { required: true })}
                      className="border border-3 border-white rounded-md p-3 text-white mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm "
                      style={{ background: "#202020" }}
                    />
                    {errors.address?.type === "required" && (
                      <span style={{ color: "red" }}>Address is required</span>
                    )}
                  </div>
                  <div className="col-span-6 sm:col-span-12">
                    <Button
                      variant="outlined"
                      color="secondary"
                      type="submit"
                      sx={{ mr: 3 }}
                      onClick={handleClose}
                    >
                      Confirm Order
                    </Button>

                    <Button
                      variant="outlined"
                      color="secondary"
                      type="submit"
                      onClick={handleClose}
                    >
                      Cancel Order
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default ConfirmOrderDialog;
