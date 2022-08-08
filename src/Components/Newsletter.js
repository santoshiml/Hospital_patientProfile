import React,{useState} from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export default function Newsletter() {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format")
      .required(""),
  });

  // const [value, setValue] = useState('');


  const formOptions = { resolver: yupResolver(validationSchema) };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm(formOptions);


  const onSubmit = (data) => {
    reset();
    // let newData = data; 
    // localStorage.setItem('NewsData', JSON.stringify(newData))
    // let newsletter_list = JSON.parse(localStorage.getItem("NewsData"));
    // console.log('2222', newsletter_list)
    // let Contact_list = JSON.parse(localStorage.getItem("user"));
    // console.log('3333', Contact_list)
    // Contact_list.push(newsletter_list);

    // const nnn = localStorage.setItem("user", JSON.stringify(Contact_list))
    // console.log('6666', nnn)
    

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