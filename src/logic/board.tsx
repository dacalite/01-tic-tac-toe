import { WINNER_COMBOS_4X4 } from "../constants";

export const checkWinnerFrom = (boardToCheck: Array<string>) => {
    let tableroLleno = true
    for(const combo of WINNER_COMBOS_4X4){
      const [a, b, c, d] = combo
      if(boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c] && boardToCheck[a] === boardToCheck[d]){
        return boardToCheck[a]
      }else if(boardToCheck[a] === null || boardToCheck[b] === null || boardToCheck[c] === null || boardToCheck[d] === null){
        tableroLleno = false
      }
    }
    return tableroLleno ? false: null
  }