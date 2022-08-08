import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";

const Enquiries = () => {
 
  const enquirydata = JSON.parse(localStorage.getItem("user"));
  console.log("daaaaa", enquirydata);



  return (
    <div className="enquiries">
      <h4>
        <center>Customer's Enquiries</center>
      </h4>
      <br />
       <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {enquirydata?.map((item) => {
            return (
              <>
                <tr>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.contact}</td>
                  <td>{item.message}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table> 
      <p>This is API screte key:{process.env.REACT_APP_SECRETE_KEY}</p>
     
    </div>
  );
};
export default Enquiries;


