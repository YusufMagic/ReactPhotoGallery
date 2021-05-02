import React from "react";

const ProfileItem = (props) => {
  return (
    <div className="ProfileItem">
      <div className="profile">
        <div className="item">
          <h3>
            Имя: <span>{props.name}</span>
          </h3>
        </div>
        <div className="item">
          <h3>
            Возраст: <span> {props.age}</span>
          </h3>
        </div>
        <div className="item">
          <h4>
            Образование: <span>{props.edu}</span>
          </h4>
        </div>
        <div className="item">
          <h3>
            Стаж работы: <span>{props.work_year}</span>
          </h3>
        </div>
      </div>
      <h2>Что я могу</h2>
      <div className="tech_item">
            {props.stackTec.map((el) => (
              <div className="tech_item__elem"><span>{el}</span></div>
            ))}
        </div>
    </div>
  );
};

export default ProfileItem;
