import "./styles.css";
import { useEffect, useState } from "react";
import Square from "./Square";
export default function App() {
  const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [0, 3, 6],
    [2, 5, 7]
  ];
  const [player, setPlayer] = useState("X");
  const [win, setWin] = useState({ player: "", win: false });
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const resetBoard = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setWin({ player: "", win: false });
    setPlayer("X");
  };
  const checkWin = () => {
    winningPatterns.forEach((pattern, idx) => {
      if (
        board[pattern[0]] === board[pattern[1]] &&
        board[pattern[0]] === board[pattern[2]] &&
        board[pattern[0]] !== ""
      ) {
        setWin({ player: board[pattern[0]], win: true });
      }
    });
  };
  useEffect(() => {
    checkWin();
    if (win.win) {
      alert(`player: ${win.player} won`);
      resetBoard();
    } 
//      else if (checkIfTie) {
//      alert(`nobody won!`);
//      resetBoard();
//    }
  }, [board, win]);
//
//  const checkIfTie =
//    board.filter((cell) => cell !== "").length === board.length && !win.win;
  const handleCellClick = (square) => {
    setBoard(
      board.map((val, index) => {
        if (val === "" && index === square) {
          return player;
        }
        return val;
      })
    );

    if (player === "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
    checkWin();
  };
  return (
    <div className="App">
      <div className="board">
        <div className="row">
          <Square val={board[0]} chooseSquare={() => handleCellClick(0)} />
          <Square val={board[1]} chooseSquare={() => handleCellClick(1)} />
          <Square val={board[2]} chooseSquare={() => handleCellClick(2)} />
        </div>
        <div className="row">
          <Square val={board[3]} chooseSquare={() => handleCellClick(3)} />

          <Square val={board[4]} chooseSquare={() => handleCellClick(4)} />

          <Square val={board[5]} chooseSquare={() => handleCellClick(5)} />
        </div>
        <div className="row">
          <Square val={board[6]} chooseSquare={() => handleCellClick(6)} />
          <Square val={board[7]} chooseSquare={() => handleCellClick(7)} />
          <Square val={board[8]} chooseSquare={() => handleCellClick(8)} />
        </div>
      </div>
    </div>
  );
}
