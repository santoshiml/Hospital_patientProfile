import React from "react";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import {AiOutlineHome, AiOutlineTable, AiOutlineUser, AiOutlinePound, AiFillQuestionCircle } from "react-icons/ai";

const Header = () => {
  const navigate = useNavigate();

  const handleClick =() =>{
    navigate(`/contact`)
}

  return (
    <div className = "navbar "><br/>
      <NavLink exact="true" activeclassname="active" to="/" id="navlinkdash">
      <AiOutlineHome style ={{marginRight:"5px", marginTop:"-5px"}}/>Dashboard

      </NavLink><br /> <br/>
      <NavLink exact="true" activeclassname="active " to="/enquiries" id="navlinkenquiry">
       <AiOutlineTable style ={{marginRight:"5px", marginTop:"-2px"}}/> Enquiries
      </NavLink><br/><br/>
      <NavLink exact="true" activeclassname="active" to="/payment" id="navlinkpayment">
        <AiOutlinePound style ={{marginRight:"5px", marginTop:"-2px"}}/>Payment
      </NavLink><br/><br/>
      <NavLink exact="true" activeclassname="active"  to="/profile" id="navlinkprofile">
       <AiOutlineUser style ={{marginRight:"5px", marginTop:"-3px"}}/>Profile
      </NavLink>
      <NavLink exact="true" activeclassname="active" to="/faq" id="navlinkfaq">
       <AiFillQuestionCircle style ={{marginRight:"5px", marginTop:"-3px"}}/>FAQ
      </NavLink>

      <p style={{color:"white"}}><center>Need our Help?</center></p>
      <button type="button" onClick={handleClick} class="btn btn-success" id="navlinkcontact" >Contact</button>

    </div>
  );
};
export default Header;


