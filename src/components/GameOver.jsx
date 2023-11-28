
import Styles from './GameOver.module.css'
import { VscDebugRestart } from "react-icons/vsc";


export default function GameOver(props) {
    return (
        <div className={Styles.game_container}>
            <div className={Styles.game_over}>
                <p>Game Over!</p>
                <p className={Styles.gameScore}>Your Best Score is: {props.bestScore}</p>
                <button className={Styles.restartButton} onClick={props.restartGame}>
                    <VscDebugRestart className={Styles.icon_styles} />
                    Restart Game
                </button>
            </div>
        </div>
    )
}
