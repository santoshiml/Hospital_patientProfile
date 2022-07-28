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
          Skip content
        </a>
        <button onClick={Login} className="dashboardBtn1">
          Login
        </button>
        &nbsp;
        <button onClick={CoonectWithUs} className="dashboardBtn2">
          Connect With Us
        </button>
      </div><br/>
      <div>
        <div>
          <SliderHome />
        </div>
      </div><br/>

      <div>
        <div>
          <Flowchart1 />
        </div>
      </div><br/>

      <div>
        <div>
          <Counter />
        </div>
      </div><br/>

      <div>
        <div>
          <VisionMissin />
        </div>
      </div><br/>

      <div>
        <div>
          <Gallery />
        </div>
      </div>

      <div>
        <div>
          <Newsletter />
        </div>
      </div><br/>
      <div>
        <div>
          <ImageText />
        </div>
      </div><br/>
    </div>
  );
};
export default Dashboard;
