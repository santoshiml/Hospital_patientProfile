import React, { useState } from "react";
import { toast } from "react-toastify";
import { AiFillEnvironment, AiFillPhone, AiFillMail } from "react-icons/ai";

export default function Contact() {
  const [user, setUser] = useState([]);
  const [data, setData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const handelsubmit = (event) => {
    event.preventDefault();

    localStorage.setItem("test", JSON.stringify(data));

    user.push({
      name: data.name,
      email: data.email,
      contact: data.contact,
      message: data.message,
    });

    setUser(user);
    console.log("777", user);
    localStorage.setItem("user", JSON.stringify(user));
   
    setData({
      ...user,
      name: "",
      email: "",
      contact: "",
      message: "",
    });
    toast.success(`Thank you successfully send your enquiries`);
  };

  const submitData = (data) => {
    console.log("datasubmit", data);
  };

  return (
    <>
      <div>
        <div className="container2">
          <center>
            <h4>Connect with us!</h4>
            <p style={{ fontSize: "12px", marginBottom: "35px" }}>
              Please enjoy, and let us know if there’s anything else we can help
              you with.
            </p>
          </center>

          <div className="container" style={{ width: "710px" }}>
            <div className="row" id="row-contact">
              <div className="col">
                <center>
                  <AiFillEnvironment
                    style={{ fontSize: "22px", marginTop: "10px" }}
                  />
                  <br />
                  <spam style={{ fontSize: "12px" }}>115-Baner,</spam>
                  <spam style={{ fontSize: "12px" }}>Pune Maharashtra</spam>
                </center>
              </div>
              <div className="col">
                <center>
                  <AiFillPhone
                    style={{ fontSize: "22px", marginTop: "10px" }}
                  />
                  <p style={{ fontSize: "12px" }}>+91-9165787278</p>
                </center>
              </div>
              <div className="col">
                <center>
                  <AiFillMail style={{ fontSize: "22px", marginTop: "10px" }} />
                  <p style={{ fontSize: "12px" }}>abc@gmail.com</p>
                </center>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handelsubmit} className="container1">
          <div>
            <label className="formlabel">Name</label>
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter your name"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              required="true"
            />
          </div>

          <div>
            <label className="formlabel">Email</label>
          </div>

          <div>
            <input
              type="email"
              placeholder="Enter your email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              required="true"
            />
          </div>

          <div>
            <label className="formlabel">Contact</label>
          </div>

          <div>
            <input
              type="number"
              placeholder="Enter your contact"
              value={data.contact}
              onChange={(e) => setData({ ...data, contact: e.target.value })}
              required="true"
            />
          </div>

          <div>
            <label className="formlabel">Message</label>
          </div>
          <div>
            <textarea
              type="text"
              placeholder="Message"
              value={data.message}
              onChange={(e) => setData({ ...data, message: e.target.value })}
              className="newtextarea"
              required="true"
            />
          </div>

          <div>
            <button
              type="submit"
              class="btn btn-primary"
              onClick={submitData}
              required="true"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
