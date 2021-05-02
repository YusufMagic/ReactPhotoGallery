import React from "react";
import Card from "./Card";
import { faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useState } from "react";

const Slider = (props) => {
  const len_mas = props.images.length - 1;

  const [cur_card, setCur_card] = useState(0);

  useEffect(() => {}, [cur_card]);

  const handle_next = () => {
    if (cur_card === -(len_mas - 1)) {
      setCur_card(0);
    } else {
      setCur_card(cur_card - 1);
    }
  };

  const handle_prev = () => {
    if (cur_card === 0) {
      setCur_card(-1 * (len_mas - 1));
    } else {
      setCur_card(cur_card + 1);
    }
  };

  console.log(props.images);

  return (
    <div className="slider">
      {props.images.map((item, index) => {
        return (
          <div
            key={index}
            className="slide"
            style={{ transform: `translateX(${100 * cur_card}%)` }}
          >
            {<Card src={item.webformatURL} />}
          </div>
        );
      })}
      <button onClick={handle_prev} id="prev">
        <FontAwesomeIcon icon={faArrowLeft} className="icon-arrow" />
      </button>
      <button onClick={handle_next} id="next">
        <FontAwesomeIcon icon={faArrowRight} className="icon-arrow" />
      </button>
    </div>
  );
};

export default Slider;
