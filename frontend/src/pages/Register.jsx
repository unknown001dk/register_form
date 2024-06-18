import React from 'react';

function Register() {
  return (
    <div className='p-3 max-w-lg mx-auto bg-slate-50 rounded-md shadow-xl mt-48 shadow-yellow-100/40 md:mt-40'>
    <h1 className='text-3xl text-center font-semibold my-7'>Register Form</h1>
    <form className='flex flex-col gap-4 '>
      <input
        className='bg-slate-100 p-3 rounded-lg'
        type="text"
        placeholder='Username'
        id='username' />
      <input
        className='bg-slate-100 p-3 rounded-lg'
        type="email"
        placeholder='Email'
        id='email' />
      <input
        className='bg-slate-100 p-3 rounded-lg'
        type="tel"
        placeholder='Phonenumber'
        id='phonenumber' />
        <button
          className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95'>
            Register
        </button>
    </form>
    </div>
  )
}

export default Register