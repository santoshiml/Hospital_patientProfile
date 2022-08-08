import React, { useEffect, useState } from "react";
import Modal from "react-modal/lib/components/Modal";
// import CloseIcon from "@mui/icons-material/Close";

const customStyles = {
  content: {
    top: "30%",
    left: "45%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-20%, -20%)",
  },
};

export default function ProfileModal(props) {
  console.log("pppppros", props);
  const [name, setName] = useState();
  const [image, setImage] = useState("");

  useEffect(() => {
    setName(props.name);
    setImage(props.image);
  }, []);

  return (
    <div>
      <Modal
        isOpen={props.isvisible}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="Example Modal"
      >
        <div className="closebtn">
          <button onClick={props.closeModal} className="modalclosebtn">X</button>
        </div>

        <div className="form-field">
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
            className="modaluploadimage"
          />
        </div>
        <button
          onClick={() => props.updateProfile(props.index, name, image)} className="modalupdatebtn">
          update
        </button>
        
      </Modal>
    </div>
  );
}
