import { PageTitle } from '../../components/pageTitle';

function Signup() {
  return (
    <div>
      <PageTitle title='Signup' />
      <div className='hero'>
        <form className='form'>
          <h3 className='form-header'>SignUp</h3>
          <label className='label' htmlFor="username">Username</label>
          <input className='input-box' type="text" name='username' id='username' placeholder='Enter your name' />

          <label className='label' htmlFor="email">Email</label>
          <input className='input-box' type="email" name='email' id='email' placeholder='Enter your email' />

          <label className='label' htmlFor="password">Password</label>
          <input className='input-box' type="password" name='password' id='password' placeholder='Enter your password' />

          <button className='btn' type='submit'>Signup</button>

          <div className='register'>
            <p>Do not have an Account? <a href='/signin'>Signin</a></p>
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
    </div>
  )
}

export default Signup