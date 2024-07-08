import { PageTitle } from '../../components/pageTitle';
import useSignin from '../../hooks/users/useSignin';

function Signin() {
  const {
    handleChange, handleSubmit, loading
  } = useSignin();
  return (
    <div>
      <PageTitle title='Signin' />
      <div className='hero'>
        <form onSubmit={handleSubmit} className='form'>
          <h3 className='form-header'>SignIn</h3>

          <label className='label' htmlFor="email">Email</label>
          <input onChange={handleChange} className='input-box' type="email" name='email' id='email' placeholder='Enter your email' />

          <label className='label' htmlFor="password">Password</label>
          <input onChange={handleChange} className='input-box' type="password" name='password' id='password' placeholder='Enter your password' />

          <button className='btn' type='submit' disabled={loading}>{loading ? 'Loading..':'SignIn'}</button>

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