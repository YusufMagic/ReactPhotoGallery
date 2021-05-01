import React from "react";

const ProfileItem = (props) => {
  return (
    <div className="ProfileItem">
      <div className="profile">
        <div className="item">
          <h2>
            Name: <span>{props.name}</span>
          </h2>
        </div>
        <div className="item">
          <h2>
            Age: <span> {props.age}</span>
          </h2>
        </div>
        <div className="item">
          <h2>
            Education: <span>{props.edu}</span>
          </h2>
        </div>
        <div className="item">
          <h2>Technology stack:</h2>
          <ul>
            {props.stackTec.map((el) => (
              <p>{el}</p>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileItem;
