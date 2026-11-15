import Header from "./components/Header"
import Scoreboard from "./components/Scoreboard"
import CardGrid from "./components/CardGrid"
import Confetti from 'react-confetti-explosion';

import { getCharacterArray } from "./functions/characters";

import { useState, useEffect } from "react";

function App() {
  const [characters,setCharacters] = useState([]);
  const [chosenCharacters, setChosenCharacters] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [isShuffling, setIsShuffling] = useState(false);

  const [bestScore, setBestScore] = useState(Number(localStorage.getItem('bestscore') || 0));
  const score = chosenCharacters.length;

  const [isWinning, setIsWinning] = useState(false);

  const [error, setError] = useState(null);

  useEffect(() => {
    getCharacterArray().then((data) => {
        setCharacters(data);
        
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }).catch((error) => {
      console.error(error);
      setError("Failed to load characters. Please reload.");
      setIsLoading(false);
    });;
  }, []);

  function handleCardClick(id) {
    if (chosenCharacters.includes(id)) {
        setChosenCharacters([]);
    } else {
        const updatedCharacters = [...chosenCharacters, id];
        const newScore = updatedCharacters.length;

        setChosenCharacters(updatedCharacters);

        if (newScore > bestScore) {
          setBestScore(newScore);
          localStorage.setItem('bestscore', newScore);
        }

        if (newScore === characters.length) {
          setIsWinning(true);
          setChosenCharacters([]);

          setTimeout(() => {
            setIsWinning(false);
          }, 3000);
        }
    }
    shuffleCharacters();
  }

  function shuffleCharacters(){
    setIsShuffling(true);

    setTimeout(()=>{
      const arr = [...characters]
      for(let i = arr.length - 1; i > 0 ; i--){
        const j = Math.floor(Math.random()*(i+1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      setCharacters(arr)

      setTimeout(() => {
        setIsShuffling(false);
      }, 500);
    },500)
  }

  
  return (
    <>
      {isWinning && <div style={{
        position: 'fixed',
        top: '30%',
        bottom: '50%',
        left: '50%',
        right: '50%',
        transform: 'translate(-50%, -50%)'
      }}>
        <Confetti 
          duration={3000}
          particleCount={200}
          particleSize={14}
          width={1600}
          colors={['#97F70A', '#67B751', '#396F4F', '#24613A']}
        />
      </div>
      }
      <Header/>
      <Scoreboard
        score={score} 
        bestScore={bestScore} 
      />
      {error ? (
        <p className="errorMessage">{error}</p>
      ) : (
        <CardGrid
          characters={characters}
          isLoading={isLoading}
          shuffleCharacters={handleCardClick}
          isShuffling={isShuffling}
        />
      )}
    </>
  )
}

export default App
