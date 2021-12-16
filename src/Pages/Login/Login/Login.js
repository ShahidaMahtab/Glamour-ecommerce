import { Button, Container, Typography } from "@mui/material";
import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { signInWithGoogle, loginUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const onSubmit = (data) => {
    const { email, password } = data;
    loginUser(email, password, location, navigate);
    console.log(data);
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle(navigate, location);
  };
  return (
    <div>
      <Navigation />
      <Container className="bg-gray-100  mt-16 py-5">
        <Typography variant="h4" color="white">
          Sign In To Your Account
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="bg-gray-100 flex flex-col">
            <div className="flex justify-center text-center p-3">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                {...register("email")}
                className="border border-3 border-white rounded-md p-3 text-white mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-80 block shadow-sm sm:text-sm "
                style={{ background: "#202020" }}
              />
            </div>
            <div className="flex justify-center text-center p-3">
              <input
                type="password"
                name="password"
                id="Password"
                placeholder="Your Password"
                {...register("password")}
                className="border border-3 border-white rounded-md p-3 text-white mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-80 block shadow-sm sm:text-sm "
                style={{ background: "#202020" }}
              />
            </div>

            <div className="flex justify-center text-center p-3">
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                sx={{ mt: 1 }}
              >
                Sign In
              </Button>
            </div>
            <Link to="/register">
              <Button>New user? Please Register</Button>
            </Link>
          </div>
        </form>
        <Button
          onClick={handleGoogleSignIn}
          variant="contained"
          color="secondary"
          sx={{ m: 3 }}
        >
          google Sign In
        </Button>
      </Container>
    </div>
  );
};

export default Login;
