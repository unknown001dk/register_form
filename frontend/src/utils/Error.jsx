import React from 'react'
import { Link } from 'react-router-dom'
import { PageTitle } from '../components/pageTitle'

function Error() {
  return (
    <>
    <PageTitle title='Error' />
    <section className="bg-white mt-40">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-red-600">404</h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Something's missing.</p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can't find that page. Go to the home page. </p>
            <Link to='/'>
              <button className='px-12 bg-gray-600 hover:bg-gray-500 rounded-lg text-white font-semibold py-3'>Back to Home</button>
            </Link>
        </div>   
    </div>
  </section>
  </>
  )
}

export default Error