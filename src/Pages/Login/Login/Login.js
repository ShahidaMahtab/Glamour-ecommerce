import { Button, Container, Typography } from "@mui/material";
import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
const Login = () => {
  // form validation rules
  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password")], "Passwords must match"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;
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
      <Container className="bg-gray-100  mt-16 pt-11 pb-9">
        <Typography variant="h4" color="white" sx={{ mb: 3 }}>
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
                className={`border border-3 border-white rounded-md p-3 text-white mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-80 block shadow-sm sm:text-sm  ${
                  errors.password ? "is-invalid" : ""
                }`}
                style={{ background: "#202020" }}
              />
            </div>
            <div className="invalid-feedback" style={{ color: "red" }}>
              {errors.password?.message}
            </div>
            {/* confirm password */}
            <div className="flex justify-center text-center p-3">
              <input
                type="password"
                name="confirmPassword"
                id="Password"
                placeholder="Confirm Password"
                {...register("confirmPassword")}
                className={`border border-3 border-white rounded-md p-3 text-white mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-80 block shadow-sm sm:text-sm   ${
                  errors.confirmPassword ? "is-invalid" : ""
                }`}
                style={{ background: "#202020" }}
              />
            </div>
            <div className="invalid-feedback" style={{ color: "red" }}>
              <h1> {errors.confirmPassword?.message}</h1>
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
