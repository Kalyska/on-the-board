import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import NewGameDisplay from '../components/NewGameDisplay';
import newgames from './api/newgames.js';

export default function Library() {
    newgames.map((game) => (
        console.log(game)
    ))

    return (
        <>
            <Header />
            <main className='main'>
                <div className='title'>
                    <h1>Nos jeux</h1>
                    <p>Notre ludothèque vous propose plus de 450 références, impressionant non ? Mais pas de panique ! Nos sommeliers du jeu sont là pour vous en expliquer les mécaniques, et vous permettre de passer un bon moment !</p>
                </div>

                <div className='new'>
                    <h2>Nouveautés</h2>

                    <div className='new-games'>
                        {/* on récupère les données de api newgames puis on affiche newgames display pour chaque id */}
                        {newgames.map((game) => (
                            <NewGameDisplay key={game.id} game={game}/>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )

};