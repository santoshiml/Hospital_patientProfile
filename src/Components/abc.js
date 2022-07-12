import React, { useState } from "react";
import { useNavigate } from "react-router";
import ProgressBar from "react-bootstrap/ProgressBar";

import { toast } from "react-toastify";
import { AiOutlineSearch } from "react-icons/ai";
import { Container, Row , Col} from "react-bootstrap";

const Profile = () => {
  const imgdata =
    "https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg";

  const profile = [{ id: 1, name: "Santoshi Patidar", image: imgdata }];
  const [data, setData] = useState([...profile]);
  const [input, setInput] = useState();
  const [pictures, setPictures] = useState();
  const [search, setNewsearch] = useState();
  const [isvisible, setIsVisible] = useState();

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleImageUpload = (e) => {
    setPictures(URL.createObjectURL(e.target.files[0]));
  };

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

  const handleSearch = (e) => {
    e.preventDefault();
    setNewsearch(e.target.value);
  };

  const filtered = !search
    ? data
    : data.filter((data) => data.name.toLowerCase().includes(search));

  localStorage.setItem("userinfo", JSON.stringify(filtered));
  const getuser = JSON.parse(localStorage.getItem("userinfo"));

  const userinfo = (id) => {
    console.log("data", id);
    navigate(`/profile/profileinfo/${id}`);
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
            onChange={handleSearch}
            placeholder="Search for..."
          />
          <AiOutlineSearch style={{ marginLeft: "-20px", fontSize: "20px" }} />
        </center>
        <br />
        <br />
      </div>

      <div className="container"><br/>
      <Row>
        {getuser.map((user) => {
          return (
              <Col sm={4}>
              <div className="profileborder">
                    <p>2d ago...</p>
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
        </Row><br/>
      </div>

      <div className="userDetails">
        <div className="createprofile">
          <h4>
            <center>Create Profile Here!</center>
          </h4>
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter name..."
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <div>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
          </div>
        </div>
        <br />
        <button onClick={handleClick} className="btn btn-success">
          Save
        </button>
      </div>
      <br />
    </div>
  );
};

export default Profile;
