import React from 'react'
import { PageTitle } from '../../components/pageTitle'
import useRegister from '../../hooks/useRegister.jsx';

function Register() {
  const {
    handleChange, handleSubmit, loading
  } = useRegister();

  return (
    <div>
    <PageTitle title='Course Registeration' />
    <div className='hero'>
      <form className='form' onSubmit={handleSubmit}>
        <h3 className='form-header'>Course Registeration</h3>
        <label className='label' htmlFor="name">Username</label>
        <input className='input-box' onChange={handleChange} type="text" name='name' id='name' placeholder='Enter your name' />

        <label className='label' htmlFor="email">Email</label>
        <input onChange={handleChange} className='input-box' type="email" name='email' id='email' placeholder='Enter your email' />

        <label className='label' htmlFor="phonenumber">Phonenumber</label>
        <input onChange={handleChange} className='input-box' type="tel" name='phonenumber' id='phonenumber' placeholder='Enter your phonenumber' />
        
        <label className='label' htmlFor="age">Age</label>
        <input onChange={handleChange} className='input-box' type="text" name='age' id='age' placeholder='Enter your Age' />

        {/* <label htmlFor="language" onChange={handleChange}>Course</label>
        <select className='select-values' name="language" id="language">
          <option defaultValue></option>
          <option value="c">C Programming Basics</option>
          <option value="frontend">Frontend Basics</option>
        </select> */}

        <button className='btn' type='submit' disabled={loading}>{loading ? 'Loading...' : 'Register'}</button>
      </form>
    </div>
  </div>
  )
}

export default Register