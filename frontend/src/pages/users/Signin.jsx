import { PageTitle } from '../../components/pageTitle';

function Signin() {
  return (
    <div>
      <PageTitle title='Signin' />
      <div className='hero'>
        <form className='form'>
          <h3 className='form-header'>SignIn</h3>

          <label className='label' htmlFor="email">Email</label>
          <input className='input-box' type="email" name='email' id='email' placeholder='Enter your email' />

          <label className='label' htmlFor="password">Password</label>
          <input className='input-box' type="password" name='password' id='password' placeholder='Enter your password' />

          <button className='btn' type='submit' >SignIn</button>

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
    </div>
  )
}

export default Signin