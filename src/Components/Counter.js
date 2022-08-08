import React from "react";
import CountUp from "react-countup";

import {AiOutlineHome, AiOutlineUsergroupAdd, AiOutlineLike } from "react-icons/ai";

export default function Counter() {
  return (
    <div className="mainCounter">
        <div className="row">
            <div className="col">
     
      <CountUp start={0} end={15} delay={0}>
        {({ countUpRef }) => (
          <div className="counter1">
            <p style={{marginLeft:"85px"}}><AiOutlineHome /></p>
              <p><b>Branches in India  </b></p>
              <span ref={countUpRef} style={{marginLeft:"70px"}}/><span>+</span>            
          </div>
        )}
      </CountUp>
      </div>
      <div className="col">

      <CountUp start={0} end={500} delay={0}>
        {({ countUpRef }) => (
          <div className="counter2">
            <p style={{marginLeft:"70px"}}> <AiOutlineUsergroupAdd /></p>
              <p><b>Happy Customer's </b></p>
              <span ref={countUpRef} style={{marginLeft:"70px"}}/> <span>+</span>            
          </div>
        )}
      </CountUp>
      </div>
      <div className="col">

      <CountUp start={0} end={94} delay={0}>
        {({ countUpRef }) => (
          <div className="counter3">
            <p style={{marginLeft:"60px"}}> <AiOutlineLike /></p>
              <p ><b>Success Rate </b></p>
              <span ref={countUpRef} style={{marginLeft:"60px"}}/><span>%</span>            
          </div>
        )}
      </CountUp>
      </div>
      </div>
      

    </div>
  );
}
