import "./App.css";
import React from "react";
import Header from "./Header";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./Components/Dashboard";
import Enquiries from "./Components/Enquiries";
import Payment from "./Components/Payment";
import Profile from "./Components/Profile";
import Contact from "./Components/Contact";
import Contact1 from "./Components/Contact1";
import Patientprofile from "./Components/Patientprofile";
import Faq from './Components/Faq';
import Login from './Components/Login';
import Footer from './Footer';
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <>
    <div className="App">
    <ToastContainer />
      <BrowserRouter>
        <>
          <div>
            <Header />           
          </div>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/enquiries" element={<Enquiries />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact1" element={<Contact1 />} />
            <Route path="/profile/profileinfo/:id" element={<Patientprofile />} />
            <Route path ="/faq" element={<Faq />}/>
            <Route path = "/login" element={<Login />}/>
          </Routes>
        </>
      </BrowserRouter>
     
    </div>
    
    <div>
    <Footer />
    </div>
    </>
  );
}

export default App;
