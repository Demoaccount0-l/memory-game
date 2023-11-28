import './index.css'
import Scoreboard from './components/Scoreboard'
import Main from './components/Main'
import { useEffect, useState } from 'react'
import GameOver from './components/GameOver'
import EndGame from './components/EndGame'
import Footer from './components/Footer'

function App() {

  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);


  const handleGameOver = () => {
    setGameOver(true);
  }

  const IncrementScore = () => {
    setScore(score + 1);
  }

  

  const handleRestart = () =>{
    setGameOver(false);
    setScore(0);
  }

  const handleWin = () =>{
    setScore(0);
    setBestScore(0);
  }

  useEffect(() => {

    const incrementBestScore = () => {
      if (bestScore === 0) {
        setBestScore(score);
      }
      if (bestScore > 0) {
        if (score > bestScore) {
          setBestScore(score);
        }
      }
    }

    incrementBestScore();

  },[score,bestScore])

  return (
    <>
      <div className='main-container'>
        <Scoreboard score={score} bestScore={bestScore} />
        {!gameOver && bestScore<58 &&(
          <Main gameOver={gameOver} setGameOver={handleGameOver} incrementScore={IncrementScore} />
        )}
        {gameOver && <GameOver restartGame = {handleRestart} bestScore={bestScore}/>}

        {bestScore === 58 && <EndGame handleWin={handleWin} />}
        <Footer />
      </div>
    </>
  )
}

export default App
