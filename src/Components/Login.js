import React from "react";
// import "bootstrap/dist/css/bootstrap.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { GoogleLogin } from "react-google-login";
import { GoogleOAuthProvider } from "@react-oauth/google";



export default function Login() {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email Is required*"),
    password: Yup.string()
      .required("Password is required*")
      .min(6, "Password must be at least 6 characters*"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required*")
      .oneOf([Yup.ref("password")], "Passwords must be match*"),
  });

  const [value, setValue] = React.useState('');

  const formOptions = { resolver: yupResolver(validationSchema) };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm(formOptions);

  const onSubmit = (data) => {
    console.log(data);
  };

  const credentialResponse = (responce) => {
    console.log("responce", responce);
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit(onSubmit)} className="loginForm">
        <h5><center>Login</center></h5>
        <div>
          <label className="labelEmail">Email</label>
          <br />
          <input
            type="email"
            {...register("email")}
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.email?.message}</div>

          <div>
            <br />
            <div>
              <label className="labelPass">Password</label>
              <br />
              <input
                name="password"
                type="password"
                {...register("password")}
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">{errors.password?.message}</div>
            </div>
            <br />
            <div>
              <label className="labelConfirm">Confirm Password</label>
              <br />
              <input
                name="confirmPassword"
                type="password"
                {...register("confirmPassword")}
                className={`form-control ${
                  errors.confirmPassword ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">
                {errors.confirmPassword?.message}
              </div>
            </div>
            <br />
          </div>
          <input type="submit" className="btn btn-primary"/>
        </div><br/>
        <GoogleOAuthProvider>
        <GoogleLogin
          clientId={
            "804125432757-u18pbpgpdq0tg35nlegi742rh99slnus.apps.googleusercontent.com"
          }
          onSuccess={credentialResponse}
          onError={credentialResponse}
          cookiePolicy={"http://localhost:3000"}
          buttonText="Login"
        >
          <span> Login with Google</span>
        </GoogleLogin>
      </GoogleOAuthProvider>
      </form>
      <br />
      <br />
      


    </div>
  );
}
