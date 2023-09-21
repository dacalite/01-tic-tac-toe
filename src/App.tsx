import { useState } from 'react'
import './App.css'
import Square from './components/Square'
import {TURNS} from './constants'
import { checkWinnerFrom } from './logic/board'
import { WinnerModal } from './components/WinnerModal'
import { saveGameStorage, resetGameStorage } from './logic/storage'

const  App = () => {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(16).fill(null)
  })

  const [turno, setTurno] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ? JSON.parse(turnFromStorage) : TURNS.X
  })

  const [ganador, setGanador] = useState<string | false | null>(null)

  const actualizarTablero = (index : number) => {
    //Actualizar el tablero
    if(board[index] || ganador) return
    const newBoard = [...board]
    newBoard[index] = turno
    setBoard(newBoard)
    
    //Comprobamos si hay ganador
    setGanador(checkWinnerFrom(newBoard))
    
    //cambiamos el turno
    setTurno(turno === TURNS.X ? TURNS.O : TURNS.X)

    //guardamos la partida
    saveGameStorage({board: newBoard, turn: turno})
  }

  const resetGame = () => {
    setBoard(Array(16).fill(null))
    setTurno(TURNS.X)
    setGanador(null)
    resetGameStorage()
  }

  return (
    <main className='board'>
      <h1>Cuatro En Raya</h1>
      <p>(Con React y Typescript)</p>
      <button onClick={resetGame}>
        Reiniciar tablero
      </button>
      <section className='game'>
        {
          board.map((square: string, index: number) => {
            return (
              <Square
                key={index}
                children={square}
                updateBoard={actualizarTablero}
                index={index}
                isSelected={false}
              />
            )
          })
        }
      </section>
      <section className='turn'>
        <Square isSelected = {turno === TURNS.X} children={TURNS.X} updateBoard={()=>{}} index={-1}/>
        <Square isSelected = {turno === TURNS.O} children={TURNS.O} updateBoard={()=>{}} index={-1}/>
      </section>
      <WinnerModal ganador={ganador} resetGame={resetGame}/>
      <footer>
        <h3>Hecho por Sergio Dacal Rodríguez</h3>
        <br /><br />
        <h5>Si dejas la partida a medias y recargas<br/>te carga la partida antigua</h5>
      </footer>
    </main>
  )
}

export default App