import React, {useState} from 'react'
export default function PlayerInfo({player,symbol}) {
   const [isEditing, setIsEditing] = useState(false)

    const handleClick = () => {
        setIsEditing(prev=>!prev)
    }

    let playerName = <span className="player-name">{player}</span>
    let btnCaption = 'Edit'
    if (isEditing){
        playerName=<input type='text' required/>
        btnCaption='Save'
    }

    return(
        <li>
        <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleClick}>{btnCaption}</button>
    </li>
    )
}
