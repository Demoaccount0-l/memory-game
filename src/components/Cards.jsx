import { useState } from "react";
import PropTypes from "prop-types"
import Styles from "./Cards.module.css"

export default function Cards(props) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if(isClicked){
      props.setGameOver();
    }
    else{
      setIsClicked(true);
      const elemObj = {name: props.name};
      props.handleClickedElements(elemObj);
      props.incrementScore();
    }
  }

  return (
    <div className={Styles.card}>
      <img  className={Styles.card_img} src={props.url} alt={props.name} onClick={handleClick}/>
      <p className={Styles.card_text}>{props.name}</p>
    </div>
  )
}

Cards.propTypes = {
  url: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  incrementScore: PropTypes.func.isRequired,
  setGameOver: PropTypes.func.isRequired,
  handleClickedElements: PropTypes.func.isRequired
}