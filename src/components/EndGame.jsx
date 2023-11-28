import Styles from './EndGame.module.css'
import rick from '../assets/icons/rick-icon.png'

export default function EndGame() {
    return (
        <div className={Styles.endgame_container}>
            <div className={Styles.endgame}>
                <div className={Styles.congrats_msg}>
                    <img src={rick} alt="bran_icon" className={Styles.icon_img} />
                    <p>Congratulations!!</p>
                    <p>You won the game</p>
                </div>
                <div className={Styles.play_again}>
                    <button className={Styles.play_button}>Play again</button>
                </div>
            </div>
        </div>
    )
}
