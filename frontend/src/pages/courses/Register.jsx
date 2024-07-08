import useRegister from '../../hooks/useRegister';
import BounceLoader from 'react-spinners/BounceLoader'
import { PageTitle } from '../../components/pageTitle';

function Register() {
  const {
    handleChange, handleSubmit, loading, loader
  } = useRegister();
  
  return (
    <div>
      <PageTitle title="Register Form" />
      {
        loader ? (
          <div className='flex justify-center items-center h-screen'>
            <BounceLoader color="rgb(51 65 85 / 0.4)" />
          </div>
        ) : (
          <div className='p-3 max-w-lg mx-auto bg-slate-50 rounded-md shadow-xl mt-48 shadow-yellow-100/40 md:mt-40'>
            <h1 className='text-3xl text-center font-semibold my-7'>Register Form</h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4 '>
              <input
                onChange={handleChange}
                className='bg-slate-100 p-3 rounded-lg'
                type="text"
                placeholder='Username'
                id='name'
                />
              <input
                onChange={handleChange}
                className='bg-slate-100 p-3 rounded-lg'
                type="email"
                placeholder='Email'
                id='email' 
                />

              <input
                type='tel'
                onChange={handleChange}
                className='bg-slate-100 p-3 rounded-lg'
                placeholder='Phonenumber'
                id='phonenumber'
                />

                <button
                  type='submit'
                  disabled={loading}
                  className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95'>
                    {loading ? 'Loading...' : 'Register'}
                </button>
            </form>
          </div>
        )
      }
    </div>
    
  )
}

export default Register