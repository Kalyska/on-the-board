import Head from 'next/head';
import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function Home() {

  return (
    <>
      <Head>
        <title>On The Board</title>
        <meta name="description" content="Bar à jeux fictif" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

        <Header />

        <main className='main home'>
          <h1>Bienvenue à bord !</h1>

          <p>On The Board est un bar à jeux fictif, créé dans le cadre d'un projet de formation.</p>

          <img src='/img/otb.webp' alt='On The Board' height={450} />
        </main>

        <Footer />
    </>
  )
}