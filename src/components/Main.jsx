import { Suspense, useEffect, useState } from 'react'
import PropTypes from "prop-types"

import Loading from './Loading'
import Styles from './Main.module.css'
import charactersArray from './handleImages'
import Cards from './Cards'
import _ from 'lodash'

export default function Main(props) {
    const [clickedElement,setClickedElement] = useState([]);
    const [index,setIndex] = useState(0);

    let cards;
    let imagesArray = charactersArray.map((arr) => arr.slice());
    console.log(imagesArray);

    const handleClickedElements = (elem) =>{
      setClickedElement(clickedElement.concat(elem));
    }

    const clearClickedElements = () => {
      setClickedElement([]);
    }

    imagesArray[index] = _.shuffle(imagesArray[index]);

    useEffect(() => {
      if(clickedElement.length >= imagesArray[index].length && index<5){
        setIndex(index => index+1);
        clearClickedElements();
      } 
    },[clickedElement,index,imagesArray]);

    cards = imagesArray[index].map((obj) => {
      return(
        <Cards 
        key={obj.text}
        url= {obj.image}
        name = {obj.text}
        handleClickedElements ={handleClickedElements}
        incrementScore = {props.incrementScore}
        setGameOver = {props.setGameOver}
        />
      )
    })

    return (
        <div className={Styles.main_board_container}>
            <div className={index > 4 ? Styles.main_board_flex : Styles.main_board}>
                <Suspense fallback={<Loading />}>{cards}</Suspense>
            </div>
        </div>
    )
}

Main.propTypes = {
  incrementScore: PropTypes.number.isRequired,
  setGameOver: PropTypes.func.isRequired,
}