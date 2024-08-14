import { useState } from "react";

export default function Player({initialName,symbol,isActive,onChangeName}){
 const [playerName,setIsName]= useState(initialName);
 const [isEditing, setIsEditing] = useState(false);

 function handleClick(){
    setIsEditing((editing)=>!editing); // Rather than using the !isEdiitong we use this as it will help us to perofmr better
                                        // React keeps these fucntions scheudling and having them the above way can create some issues and hence we use this.
    if (isEditing){
        onChangeName(symbol,playerName);
    }
                                    }

 function onChange(event){ // Two Way Binding example 
    setIsName(event.target.value);
 }

 let editPlayerName= <span className="player-name">{playerName}</span>
 if (isEditing){
    editPlayerName = <input type="text" value={playerName} onChange={onChange} required></input> // Two Way binding 
 }
// Every letter typed on the input will trigger the input and onChange function, this will lead to get the value and then assign that value
    return (
        <li className={isActive ? 'active' :undefined }>
            <span className="player">
                {editPlayerName}
                <span className="player-symbol">{symbol}</span>
                <button onClick={handleClick}>{isEditing ? 'Save' : 'Edit'}</button>
            </span>
          </li>
    );
};