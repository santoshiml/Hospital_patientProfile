import React from "react";
import Cartinfo from "./Cartinfo";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";

const Payment = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="payment">
      <h4 className="paymentHeading">Payment Page</h4>
      <br />
      <br />
      <div class="container">
        <div class="row">
          <div class="col">
            <br />

            <form onSubmit={handleSubmit(onSubmit)} className="paymentForm">
              <h6>Customer Information</h6>
              <input
                placeholder="Enter Your First Name"
                {...register("fname", { required: true })}
              />
              <br />

              {errors.fname && (
                <span className="error error1">First name is required</span>
              )}
              <br />

              <input
                placeholder="Enter Your Last Name"
                {...register("lname", { required: true })}
              />
              <br />
              {errors.lname && (
                <span className="error">Last name is required</span>
              )}
              <br />

              <input
                placeholder="Enter Your Email"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && <span className="error">Email is required</span>}
              <br />

              <input
                placeholder="Enter Your Address"
                {...register("address", { required: true })}
              />
              <br />
              {errors.address && (
                <span className="error">Address is required</span>
              )}
              <br />

              <input
                placeholder="Enter Your ZipCode"
                {...register("zipcode", { required: true })}
              />
              <br />
              {errors.zipcode && (
                <span className="error">ZipCode is required</span>
              )}
              <br />
              <br />

              <h6>Payment Information</h6>
              <input
                placeholder="Enter Your Card Number"
                {...register("cardno", { required: true })}
              />
              <br />
              {errors.cardno && <span className="error">Card is required</span>}
              <br />

              <input
                placeholder="Enter Billing ZipCode"
                {...register("billingzip", { required: true })}
              />
              <br />
              {errors.billingzip && (
                <span className="error">Billing Zip is required</span>
              )}
              <br />
              <br />

              <h6>Billing Address</h6>
              <input type="checkbox" />
              <spam> Billing Address same is Shipping Address</spam>
              <br />
              <br />

              <input
                placeholder="Enter Your Name"
                {...register("bname", { required: true })}
              />
              <br />
              {errors.bname && <span className="error">Name is required</span>}
              <br />

              <input
                placeholder="Enter Address"
                {...register("baddress", { required: true })}
              />
              <br />
              {errors.baddress && (
                <span className="error">Address is required</span>
              )}
              <br />

              <input
                placeholder="Enter Zip Code"
                {...register("billingzipp", { required: true })}
              />
              <br />
              {errors.billingzipp && (
                <span className="error">Zip Code is required</span>
              )}
              <br />

              <input type="submit" class="btn btn-success" />
            </form><br/>
          </div>

          <div class="col" style={{ margingRight: "-100px" }}>
            <br />
            <Cartinfo />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Payment;
