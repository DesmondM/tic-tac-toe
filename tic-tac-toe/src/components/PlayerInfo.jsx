export default function PlayerInfo({player,symbol}) {
    return(
        <li>
        <span className="player">
        <span className="player-name">{player}</span>
        <span className="player-symbol">{symbol}</span>
        </span>
        <button>Edit</button>
    </li>
    )
}
