import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {

  return (
    <>
      <Header />

      <main className='main'>
            <h1>Contact</h1>

            <form className="contact-form">
                <div className='flex-form'>
                <label htmlFor="email">Votre email*</label>
                <input type='email' name='email' />
                </div>

                <div className='flex-form'>
                <label htmlFor="subject">Sujet du message*</label>
                <input type='text' name='subject' />
                </div>

                <div className='flex-form'>
                <label htmlFor="message">Votre message*</label>
                <textarea name="message" id="message" cols="30" rows="10"></textarea>
                </div>

                <button type='submit'>Envoyer</button>
            </form>
      </main>

      <Footer />
    </>
  )
}