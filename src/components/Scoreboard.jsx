import Styles from './Scoreboard.module.css'
import rick_icon from '../assets/icons/rick-icon.png'

export default function Scoreboard(props) {
  return (
    <div className={Styles.scoreboard}>
      <div className={Styles.left_container}>
        <div className={Styles.brand_container}>
          <img className={Styles.brand_img} src={rick_icon} alt="Brand icon" />
          <p className={Styles.brand_text}>Memory Game</p>
        </div>
      </div>
      <div className={Styles.right_container}>
        <div className={Styles.score_container}>
          <div className={Styles.show_score}>Current Score:{props.score}</div>
          <div className={Styles.show_score}>Best Score:{props.bestScore}</div>
        </div>
      </div>
    </div>
  )
}
