import React from 'react'
import Header from '../components/Header'
import { PageTitle } from '../components/pageTitle'

function Home() {
  return (
    <>
    <Header />
    <PageTitle title="Home" />
    <div className='container'>
      <h1>Home Page</h1>
      <p>Welcome to the home page</p>
    </div>
    </>
  )
}

export default Home