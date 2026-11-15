import '../styles/Scoreboard.css'

function Scoreboard({score,bestScore}){
    return(
        <div className='scoreboardDisplay'>
            <div className='scoreDisplay'>
                <p>CURRENT SCORE</p>
                <p id='currentScore'>{score}</p>
            </div>
            <div className='scoreDisplay'>
                <p>BEST SCORE</p>
                <p id='bestScore'>{bestScore}</p>
            </div>
        </div>
    )
}

export default Scoreboard;