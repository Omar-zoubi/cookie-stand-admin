import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Main from '../compotent/Main'
import Header from '../compotent/Header'
import React from 'react'
import Footer from '../compotent/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cookie Stand Admin</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
      </Header>

      <Main>
      </Main>
 


      <p>Report Table comming soon .....</p>

      <Footer>
      </Footer>
    </div>
  )
}
