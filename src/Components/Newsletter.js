import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export default function Newsletter() {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format")
      .required(""),
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

  return (
    <div className="mainNews">
      <p className="newspara">Sign up to our newsletter</p>
      <form onSubmit={handleSubmit(onSubmit)}>
     <center> <button type="submit" className="newsbtn" >Submit</button> 
        <input
          type="email"
          id="newsinput"
          placeholder="Enter Email..."
          {...register("email")}
          className={`form-control ${errors.email ? "is-invalid" : ""}`}
        /></center>
        
      </form>
    </div>
  );
}