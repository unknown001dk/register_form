import React from 'react'

function Signup() {
  return (
    <div className='hero'>
      <form>
        <h3>SignUp</h3>
        <label htmlFor="username">Username</label>
        <input type="text" name='username' id='username' placeholder='Enter your name' />

        <label htmlFor="email">Email</label>
        <input type="email" name='email' id='email' placeholder='Enter your email' />

        <label htmlFor="password">Password</label>
        <input type="password" name='password' id='password' placeholder='Enter your password' />

        <button>Signup</button>
        <div className='register'>
          <p>Do not have an Account? <a href='#'>Signin</a></p>
        </div>
      </form>
      <div className='bubbles'>
        <img src="bubble.png" alt="" />
        <img src="bubble.png" alt="" />
        <img src="bubble.png" alt="" />
        <img src="bubble.png" alt="" />
        <img src="bubble.png" alt="" />
        <img src="bubble.png" alt="" />
        <img src="bubble.png" alt="" />
      </div>
    </div>
  )
}

export default Signup