import React, { useState } from 'react'
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import newgames from './api/newgames';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { IoIosTimer } from 'react-icons/io';
import GameCarousel from '../components/GameCarousel';

const Game = ({ data }) => {
    const game = data;
    if (!game) {
        return (
            <>
                <main className='main'>
                    <h1>404</h1>
                    <p>La page que vous cherchez n'existe pas</p>
                </main>
            </>
        )
    }

    return (
        <>
            <Header />

            <main className='main'>
                <div className='game-display'>
                    <h1>{game.name}</h1>

                    {/* <Image src={`/img/${game.img[0]}`} alt={game.name} width={300} height={300} /> */}
                    <GameCarousel  game={game} />

                    <div className='game-infos'>
                        <p>
                            <BsFillPersonPlusFill />
                            <span>{game.min} à {game.max} joueurs</span>
                        </p>
                        <p>
                            <IoIosTimer />
                            <span>{game.time} minutes</span>
                        </p>
                    </div>

                    <p className='description'>{game.description}</p>
                </div>

                <a className='back-link' href='/library'>Retour</a>
            </main>

            <Footer />
        </>
    )

}

export default Game;

export async function getStaticPaths() {
    const paths = newgames.map(game => {
        return {
            params: { game: game.url }
        }
    })
    return { paths, fallback: false }
}

export function getStaticProps({ params }) {
    const data = newgames.find(game => game.url === params.game)
    return {
        props: {
            data
        }
    }
}