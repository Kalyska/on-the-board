import React from 'react'
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import newgames from './api/newgames';

const Game = ({ data }) => {
    const game = data
    if (!game) {
        // retourner une page 404
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
        <div>
            <Header />

            <main className='main'>
                {/* un display avec le name, une image, une div avec min et max joueurs, la durée, la description */}
                <div className='game-display'>
                    <h1>{game.name}</h1>

                    <Image src={`/img/${game.img[0]}`} alt={game.name} width={300} height={300} />
                    
                    <div className='game-infos'>
                        <p>Nombre de joueurs : {game.min} à {game.max}</p>
                        <p>Durée : {game.time} minutes</p>
                    </div>    
                    
                    <p>{game.description}</p> 
                </div>

                <a href='/library'>Retour</a>
            </main>

            <Footer />
        </div>
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