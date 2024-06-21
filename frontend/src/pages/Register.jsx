import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toastError, toastInfo, toastSuccess } from '../utils/Toast';
import BounceLoader from 'react-spinners/BounceLoader'

function Register() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [loader, SetLoader] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      SetLoader(false);
    },3000);
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch('/api/users/create' ,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      const message = data.message;
      const statusCode = data.status;

      if(statusCode === 201) {
        toastSuccess(message);
        navigate('/success-form');
      } else if(statusCode === 404) {
        toastError('Invaild details');
      } else if(statusCode === 400) {
        toastError(message);
      }
      setLoading(false);  
    } catch (error) {
      setLoading(false);
      console.log(error);
      toastError(res.message);
    }
  } 
  
  return (
    <div>
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
                required />
              <input
                onChange={handleChange}
                className='bg-slate-100 p-3 rounded-lg'
                type="email"
                placeholder='Email'
                id='email' 
                required />

              <input
                type='tel'
                onChange={handleChange}
                className='bg-slate-100 p-3 rounded-lg'
                placeholder='Phonenumber'
                id='phonenumber'
                pattern="[0-9]{5}[0-9]{5}"
                required />

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