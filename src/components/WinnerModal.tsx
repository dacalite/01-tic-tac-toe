import Square from "./Square"
import confetti from "canvas-confetti"

export const WinnerModal = ({ganador, resetGame}: {ganador: string | false | null, resetGame: () => void}) => {
    if(ganador === null) return null
    
    confetti()
    const winnerText = ganador === false ? 'EMPATE' : 'GANADOR'
    return(
      <section className='winner'>
        <div className='text'>
          <h2>
            {winnerText}
          </h2>
          <header className='win'>
            {ganador && <Square isSelected={false} children={ganador} updateBoard={()=>{}} index={-1}/>}
          </header>
          <footer>
            <button onClick={resetGame}>
              Empezar de nuevo
            </button>
          </footer>
        </div>
      </section>
    )
  }