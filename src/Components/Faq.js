import React from "react";
import Faq from "react-faq-component";

export default function Faqs() {
  const data = {
    // title: "FAQ (How it works)",
    rows: [
      {
        title: "What is visit Dr.in and how do I use it?",
        content: `visit dr.in provides online appointment of doctors who have registered with us and are ready to provide online appointment based on their availability. 
        A confirmed appointment is provided after making the payment through online channels.`,
      },
      {
        title: "How do I use the online booking service?",
        content: `You search for the doctor whose appointment is required. Go to his online calendar,
        look for his availability and then select the slot and get a confirmed booking after
         providing the necessary credentials and making payment. We do not ask for a user id to be 
         created nor do we require a patient to login for getting the appointments booked through 
         visit dr.in`,
      },
      {
        title: "Can I use this service for checking availability of Doctor and his fees without actually booking or scheduling an appointment ?",
        content: `Although, our aim is to assist you in getting an online appointment done for visit to a doctor, 
        we do not prevent you from looking at the doctors availability and his profile. `,
      },
      {
        title: "How can I view the time slots for the availability of Doctor ?",
        content: `Go to Book Appointment on the doctor’s page, select a date and then you will see the time slots on 
        which the said doctor is available for consultancy.`,
      },
    ],
  };

  const styles = {
    titleTextSize: "25px",
    bgColor: "white",
    titleTextColor: "black",
    rowTitleColor: "white",
    rowContentColor: "grey",
    rowContentTextSize: "14px",
    arrowColor: "white",
    rowContentPaddingLeft: '10px',
    rowContentPaddingRight: '30px',
    rowContentPaddingBottom: '15px',
    rowContentPaddingTop: '15px',
    borderBottom:"none !importtant" 
  };
  
  const config = {
    animate: true,
    // arrowIcon: "V",
    tabFocus: true,
    openOnload: 0,
  };

  return (
    <div className="faq">
      <h4 className="faqHeading">FAQ (How it works)</h4><br/><br/>
      <div className="faqdata">
        <Faq data={data} styles={styles} config={config} />
      </div>
    </div>
  );
}
