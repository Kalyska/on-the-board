import React from "react";
import { useRouter } from 'next/router';

const NewGameDisplay = (props) => {
    const router = useRouter();
    const handleClick = (game => router.push(`/${game}`))

    const game = props.game;

    return (
        <div className="new-game" onClick={() => handleClick(`${game.url}`)}>
            <img src={`img/${game.img[0]}`} alt={game.name} />
            <h3>{game.name}</h3>
        </div>
    );
}

export default NewGameDisplay;