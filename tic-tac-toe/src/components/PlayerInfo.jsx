import React, {useState} from 'react'
export default function PlayerInfo({initialName, symbol, isActive}) {
   const [playerName, setPlayerName] = useState(initialName)
   const [isEditing, setIsEditing] = useState(false)

    const handleClick = () => {
        setIsEditing(prev=>!prev)
    }
    function handleChange(e){
        setPlayerName(e.target.value)
    }
    let editablePlayerName = <span className="player-name">{playerName}</span>
    let btnCaption = 'Edit'
    if (isEditing){
        editablePlayerName=<input type='text'  value={playerName} onChange={handleChange}/>
        btnCaption='Save'
    }

    return(
        <li className={isActive?'active':undefined}>
        <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleClick}>{btnCaption}</button>
    </li>
    )
}
