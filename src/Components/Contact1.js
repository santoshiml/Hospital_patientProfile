import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export default function Forms() {

  const onSubmit = (data) => {
  
    reset();
    
    localStorage.setItem("datass", JSON.stringify(data)); 
    console.log('2222', data)  
    // const enquirydata1 = JSON.parse(localStorage.getItem("datass"))
    // console.log('old data', enquirydata1)
    // localStorage.setItem('datasss', JSON.stringify([ ...enquirydata1, ...data ]));
  };

  const validationSchema = Yup.object().shape({
    fname: Yup.string().required("First name is required*"),
    lname: Yup.string().required("Last name is required*"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email Is required*"),
    contactno: Yup.string().required("Contact no. is required*"),
    textarea: Yup.string().required("Message is required*"),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm(formOptions);

  return (
    <>
    <div className="container1">
      <center>
        <p>Connect with us!</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="formlabel">First Name</label>
            <br />
            <input
              type="text"
              {...register("fname")}
              className={`form-control ${errors.fname ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.fname?.message}</div>
          </div>
          <br />
          <div>
            <label className="formlabel">Last Name</label>
            <br />
            <input
              type="text"
              {...register("lname")}
              className={`form-control ${errors.lname ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.lname?.message}</div>
          </div>
          <br />
          <div>
            <label className="labelEmail">Email</label>
            <br />
            <input
              type="email"
              {...register("email")}
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.email?.message}</div>
          </div>
          <br />
          <div>
          <label className="labelEmail">Contact</label><br/>
          <input
              type="text"
              {...register("contactno")}
              className={`form-control ${errors.contactno ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.contactno?.message}</div>
          </div>
          <br />

          <div>
          <label className="labelEmail">Message</label><br/>
          <textarea
              type="text"
              {...register("textarea")}
              className={`form-control ${errors.textarea ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.textarea?.message}</div>
          </div>
          <br />
         
          <button type="submit" className="submitbtn">
            Submit
          </button>
        </form>
      </center>
    </div>
    </>
  );
}