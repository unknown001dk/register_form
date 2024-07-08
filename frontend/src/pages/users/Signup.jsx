import { PageTitle } from '../../components/pageTitle';
import useSignup from '../../hooks/users/useSignup';

function Signup() {
  const { handleSubmit, handleChange, loading } = useSignup();
  return (
    <div>
      <PageTitle title='Signup' />
      <div className='hero'>
        <form onSubmit={handleSubmit} className='form'>
          <h3 className='form-header'>SignUp</h3>
          <label className='label' htmlFor="name">Username</label>
          <input onChange={handleChange} className='input-box' type="text" name='name' id='name' placeholder='Enter your name' />

          <label className='label' htmlFor="email">Email</label>
          <input onChange={handleChange} className='input-box' type="email" name='email' id='email' placeholder='Enter your email' />

          <label className='label' htmlFor="password">Password</label>
          <input onChange={handleChange} className='input-box' type="password" name='password' id='password' placeholder='Enter your password' />

          <button className='btn' type='submit' disabled={loading}>{loading ? 'Loading...' : 'Signup'}</button>

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