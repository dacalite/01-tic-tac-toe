import { WINNER_COMBOS } from "../constants";

export const checkWinnerFrom = (boardToCheck: Array<string>) => {
    let tableroLleno = true
    for(const combo of WINNER_COMBOS){
      const [a, b, c] = combo
      if(boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c] && boardToCheck[a]){
        return boardToCheck[a]
      }else if(boardToCheck[a] === null || boardToCheck[b] === null || boardToCheck[c] === null){
        tableroLleno = false
      }
    }
    return tableroLleno ? false: null
  }