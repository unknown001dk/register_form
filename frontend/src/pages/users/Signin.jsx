import { Link } from 'react-router-dom';

function Signin() {
  return (
    <div className='hero'>
      <form>
        <h3>SignIn</h3>

        <label htmlFor="email">Email</label>
        <input type="email" name='email' id='email' placeholder='Enter your email' />

        <label htmlFor="password">Password</label>
        <input type="password" name='password' id='password' placeholder='Enter your password' />
        <Link to='signin'>
          <button>Signin</button>
        </Link>
        <div className='register'>
          <p>Do not have an Account? <a href='/signup'>Signup</a></p>
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

export default Signin