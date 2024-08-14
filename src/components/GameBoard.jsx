import { useState } from "react";

export default function GameBoard({ onSelectSquare,board }){
  
    // This is commented out beacuse we will now do the lifiting using the Logs component and gamebaord
    // the turns will now be coming out from a logic that we will formulate given above
    // const [gameBoard, setGameBoard] = useState(intialGameBoard);
 
    // function handleSelection(rowIndex,colIndex){
    //     //logic to handle selection goes here
    //     setGameBoard((prevGameBoard)=>{
    //         const updatedGameboard=[...prevGameBoard.map((indexArray)=>[...indexArray])]
    //         updatedGameboard[rowIndex][colIndex]=activePlayerSymbol;
    //         return updatedGameboard
    //     })

    //     onSelectSquare();
    // }

    return (
        <ol id="game-board">
            {board.map((row, rowIndex) => 
            <li key={rowIndex}>
                <ol>
                 {
                    row.map((playerSymbol, colIndex) =>
                        <li key={colIndex}>
                            <button onClick={()=>{onSelectSquare(rowIndex,colIndex)}} disabled={playerSymbol!==null}>{playerSymbol}</button>
                        </li>
                 )}
                </ol>
            </li>
        )}
        </ol>
    );
}