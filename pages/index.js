import Head from 'next/head';
import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';

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

      <main className='main'>
        <div className='container'>
            <h1>Test</h1>
        </div>

        <Footer />
      </main>
    </>
  )
}