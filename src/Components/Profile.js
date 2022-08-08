import React, { useState,useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import ProgressBar from "react-bootstrap/ProgressBar";
import { toast } from "react-toastify";
import { AiOutlineSearch } from "react-icons/ai";
import { Container, Row, Col } from "react-bootstrap";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ProfileModal from "./modal";

const Profile = () => {
  const imgdata =
    "https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg";

  const profile = [{ id: 1, name: "Santoshi Patidar", image: imgdata }];
  const [data, setData] = useState([...profile]);
  //Create profile
  const [input, setInput] = useState();
  const [pictures, setPictures] = useState();

  const [search, setNewsearch] = useState();
  const [nameerror, setNameError] = useState();
  const [picerror, setPicError] = useState();


  //Update Profile
  const [indexs, setIndexs] = useState();
  const [name, setName] = useState();
  const [image, setImage] = useState();
  const [isvisible, setIsVisible] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => { 
    const name = input;
    const image = pictures;
    console.log("name", name);
    console.log("image", image);
    if (name === undefined) {
      toast.error(`Please enter a user name`);
    } else if (!name) {
      toast.error(`Please enter a user name`);
    } else if (image === undefined) {
      toast.error(`Please select a profile picture`);
    } else if (!image) {
      toast.error(`Please select a profile picture`);
    } else {
      const image = pictures;
      const ids = data.map((post) => {
        return post.id;
      });
      const id = Math.max.apply(null, ids) + 1;
      const post = { id: id, name: name, image: image };
      data.push(post);
      setData([...data]);
      toast.success(`Profile has been created successfully`);
    }
  };




  const filtered = !search
    ? data
    : data.filter((data) => data.name.toLowerCase().includes(search));

  localStorage.setItem("userinfo", JSON.stringify(filtered));
  const getuser = JSON.parse(localStorage.getItem("userinfo"));
  
  // useEffect(() =>{
  // // localStorage.setItem("userinfo", JSON.stringify(filtered));
  // const item=JSON.parse(localStorage.getItem("userinfo")) ?JSON.parse(localStorage.getItem("userinfo")):[]
  // setData(item) 
  // }, [])

  const userinfo = (id) => {
    console.log("data", id);
    navigate(`/profile/profileinfo/${id}`);
  };

  const removeProfile = (index) => {
    var result = window.confirm("You want to delete your profile!");
    if (result === true) {
      let userlist = JSON.parse(localStorage.getItem("userinfo"));
      userlist.splice(index, 1);
      localStorage.setItem("userinfo", JSON.stringify(userlist));
      setData(userlist);
      toast.success(`Profile has beed deleted`);
    }
  };

  const editProfile = (index, image, name) => {
    console.log("eeee", index, image, name);
    setIndexs(index);
    setIsVisible(true);
    setName(name);
    setImage(image);
  };

  const closeModal = () => {
    console.log("Modal Closed");
    setIsVisible(false);
  };


  const updateProfile = (index, name, image) => {
    debugger;
    console.log("uuuuuu", index, name, image);
    let update_list = JSON.parse(localStorage.getItem("userinfo"));
    console.log("uplist", update_list);
    let updateuser = {
      name: name,
      image: image,
    };
    console.log("2222", updateuser);
    update_list.splice(index, 1, updateuser);
    localStorage.setItem("userinfo", JSON.stringify(update_list));
    setData(update_list);
    isvisible && setIsVisible(false);
  };


  return (
    <div className="profile">
      <h4>
        <center>All Patient Profile</center>
      </h4>

      <div>
        <center>
          <input
            type="text"
            value={search}
            onChange={(e)=>setNewsearch(e.target.value)}
            placeholder="Search for..."
          />

          {isvisible && (
            <ProfileModal
              isvisible={isvisible}
              index={indexs}
              name={name}
              image={image}
              closeModal={closeModal}
              updateProfile={updateProfile}
            />
          )}

          <AiOutlineSearch style={{ marginLeft: "-20px", fontSize: "20px" }} />
        </center>
        <br />
        <br />
      </div>

      <div className="container">
        <br />
        <Row style={{ marginLeft: "60px", marginTop: "20px" }}>
          {filtered?.map((user, index) => {
            return (
              <Col sm={4}>
                <div className="profileborder">
                  <EditIcon
                    onClick={() => editProfile(index, user.image, user.name)}
                    style={{ marginLeft: "128px" }}
                  />{" "}
                  <DeleteIcon onClick={() => removeProfile(index)} />{" "}
                  <p style={{ marginTop: "-20px" }}>2d ago...</p>
                  <img
                    src={user.image}
                    className="imgageTag"
                    alt="Patientprofile"
                    onClick={() => {
                      userinfo(user.id);
                    }}
                  />
                  <br />
                  <br />
                  <p>{user.name}</p>
                  <p>Active</p>
                  <ProgressBar
                    now={60}
                    style={{ width: "154px", height: "4px" }}
                  />
                  <p>Storage 60%</p>
                  <br />
                </div>
              </Col>
            );
          })}
        </Row>
        <br />
      </div>
  
      <div className="userDetails">
        <div className="createprofile">
          <h4>
            <center>Create Profile Here!</center>
          </h4>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <input
            type="text" 
           
            placeholder="Enter name..."
            onChange={(e) =>setInput(e.target.value)}
          />
          <span> </span>
        </div>
        <div>
          <div style={{ marginBottom: "20px" }}>
            <input type="file" accept="image/*" 
            
            onChange = {(e) => setPictures(URL.createObjectURL(e.target.files[0]))}
            />
          </div>
        </div>

        <button onClick={handleClick} className="btn btn-success">
          Save
        </button>
      </div><br />
      
    
    </div>
    
  );
};

export default Profile;
