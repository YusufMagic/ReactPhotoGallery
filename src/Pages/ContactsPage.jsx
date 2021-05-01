import React from "react";
import ContactItem from "../Components/ContactItem";
import phone from "../img/phone-solid.svg";
import email from "../img/envelope-regular.svg";
import location from "../img/compass-regular.svg";
import ProfileItem from "../Components/ProfileItem";

const ContactsPage = () => {
  return (
    <>
      <div className="ContactPage">
        <div className="aboutme">
          <ProfileItem
            name={"Yusuf"}
            age={"20"}
            edu={"undergraduate"}
            stackTec={["HTML", "CSS", "JS", "REACT"]}
          />
        </div>
        <div className="contact-sect">
          <ContactItem
            icon={phone}
            text1={"+257 7756110718"}
            text2={"+0333 6782 8792"}
            title={"Phone"}
          />
          <ContactItem
            icon={email}
            text1={"loremipusum@hmail.com"}
            text2={"abcloremipsum@gmail.com"}
            title={"Email"}
          />
          <ContactItem
            icon={location}
            text1={"25 Paramount St, PN4 8H9 London"}
            text2={"United Kingdom"}
            title={"Address"}
          />
        </div>
      </div>
    </>
  );
};

export default ContactsPage;
