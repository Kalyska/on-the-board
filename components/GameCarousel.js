import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function GameCarousel(props) {

    const game = props.game;
    const gameImgs = game.img;

    return (
        <Carousel>
            {gameImgs.map((img, index) => {
                return (
                    <Carousel.Item key={index}>
                        <img src={`/img/${img}`} alt={game.name} height={300} />
                    </Carousel.Item>
                )
            }
            )}
        </Carousel>
    )
}
