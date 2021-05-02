import React from "react";
import ContactItem from "../Components/ContactItem";
import phone from "../img/phone-solid.svg";
import email from "../img/envelope-regular.svg";
import location from "../img/compass-regular.svg";
import ProfileItem from "../Components/ProfileItem";

import {
  faInstagram,
  faVk,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const ContactsPage = () => {
  return (
    <div>
      <div className="ContactPage">
        <div className="aboutme">
          <ProfileItem
            name={"Юсуф"}
            age={"20"}
            edu={"Бакалавр"}
            stackTec={["HTML", "CSS", "JS", "REACT", "NODEJS", "PostgreSQL", "Docker", "Git", "Python", "Django"]}
            work_year={"6 мес"}
          />
        </div>
        <div className="contact-sect">
          <ContactItem
            icon={phone}
            text1={"+7(904)-767-45-04"}
            text2={"+277-65-54"}
            title={"Телефон"}
          />
          <ContactItem
            icon={email}
            text1={"yusuf.yusuf130@yandex.ru"}
            text2={"Yusuf.Zarifyanov@icl-services.com"}
            title={"Email"}
          />
          <ContactItem
            icon={location}
            text1={"Г. Казань, ул. Пушкина, д. К..."}
            text2={"Россия"}
            title={"Адрес"}
          />
        </div>
      </div>
      <div className="icons">
          <Link className="icon-link">
            <FontAwesomeIcon icon={faVk} className="icon vk" />
          </Link>
          <Link className="icon-link">
            <FontAwesomeIcon icon={faInstagram} className="icon inst" />
          </Link>
          <Link className="icon-link">
            <FontAwesomeIcon icon={faGithub} className="icon git" />
          </Link>
        </div>
    </div>
  );
};

export default ContactsPage;
