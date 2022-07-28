import React from "react";
import {useNavigate, useParams} from 'react-router';
import ProgressBar from "react-bootstrap/ProgressBar";


export default function Patientprofile() {
    const navigate = useNavigate()
    const userid = useParams()
    console.log('useid', userid)
    const newid = parseInt(userid.id);
    console.log('newid', newid)

    const getuser = JSON.parse(localStorage.getItem("userinfo"))
    console.log('dddd', getuser);
  
     
  return (
    <div className="profileinfo">
        <button onClick={() =>navigate(-1)} className="patientinfobtn btn btn-dark">Go back</button>
      <h4 style={{paddingLeft:"215px"}}>Patient Profile Info</h4><br/><br/>
      {
        getuser.map((item) =>item).filter((user) =>user.id===newid).map((data)=>{
            return(
                <div className="profileborder1"><br/>
                
                <center><img
                  src={data.image}
                  className="imgageTag"
                /></center><br/>
                <p><b>Name:</b>{data.name}</p>
                <p><b>Email:</b>abc@gmail.com</p>
                <div>
                  <p><b>Status:</b>Active</p>
                  <ProgressBar
                    now={60}
                    style={{ width: "154px", height: "4px" }}
                  />
                  <p>Storage 60%</p>
                 <br/>
                </div>
                
                </div>
            )
        })
    }
     

    </div>
  );
}
