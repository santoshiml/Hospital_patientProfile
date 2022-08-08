import React, { useRef } from "react";
import Flowchart1 from "./Flowchart1";
import { useNavigate } from "react-router";
import SliderHome from "./SliderHome";
import VisionMissin from "./VisionMissin";
import Gallery from "./Gallery";
import Newsletter from "./Newsletter";
import ImageText from "./ImageText";
import Counter from "./Counter";

const Dashboard = () => {
  const navigate = useNavigate();

  const Login = () => {
    navigate("/login");
  };

  const CoonectWithUs = () => {
    navigate("/contact");
  };

  return (
    <div className="dashboard">
      <div className="dashboardbtn">
        <img
          src="https://www.globusmedical.com/international/wp-content/uploads/sites/8/2019/02/globus_logo_temp.png"
          className="logoimg"
        />
        <a className="skipMain" href="#main">
          SkipContent
        </a>
        <button onClick={Login} className="dashboardBtn1">
          Login
        </button>
        &nbsp;
        <button onClick={CoonectWithUs} className="dashboardBtn2">
          Connect With Us
        </button>
      </div>
      <div style={{ marginTop: "12px" }} >
        <SliderHome />
      </div>
      <div className='dashboardSpace'>
        <Flowchart1 />
      </div>

      <div className='dashboardSpace'>
        <Counter />
      </div>

      <div className='dashboardSpace'>
        <VisionMissin />
      </div>

      <div className='dashboardSpace'>
        <Gallery />
      </div>

      <div className='dashboardSpace'>
        <Newsletter />
      </div>

      <div className='dashboardSpace' style={{marginBottom: "30px" }}>
        <ImageText />
      </div>
    </div>
  );
};
export default Dashboard;
