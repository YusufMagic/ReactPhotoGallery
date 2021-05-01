import React from "react";
import { faInstagram, faVk, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from 'react-router-dom'

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="me">
        <div className="me-text">
          <h1>
            Привет, меня зовут <span>Юсуф</span>
          </h1>
          <p>
            Это мое первое тестовое задание в компании ICL. Домашняя страница
            приветствует Вас. Тут можно разместить текст, который приветствует
            клиентов. Слева меню для перехода на другие страницы.
          </p>
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
      </header>
    </div>
  );
};

export default HomePage;
