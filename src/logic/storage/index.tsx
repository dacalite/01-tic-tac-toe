export const saveGameStorage = ({board: newBoard, turn: currentTurn}: {board: Array<string>, turn: string}) => {
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', JSON.stringify(currentTurn))
}

export const resetGameStorage = () => {
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
}