import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toastError, toastInfo, toastSuccess } from '../utils/Toast';

function Register() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  // const [validationmessage, setValidationMessage] = useState({});

  const navigate = useNavigate();

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
      if(res.success = true) {
        toastSuccess(message);
        navigate('/success-form');
      } else {
        toastError('Something went wrong. Please try again later.');
      }
      setLoading(false);  
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  } 
  
  return (
    <div className='p-3 max-w-lg mx-auto bg-slate-50 rounded-md shadow-xl mt-48 shadow-yellow-100/40 md:mt-40'>
    <h1 className='text-3xl text-center font-semibold my-7'>Register Form</h1>
    <form onSubmit={handleSubmit} className='flex flex-col gap-4 '>
      <input
        onChange={handleChange}
        className='bg-slate-100 p-3 rounded-lg'
        type="text"
        placeholder='Username'
        id='name' />
      <input
        onChange={handleChange}
        className='bg-slate-100 p-3 rounded-lg'
        type="email"
        placeholder='Email'
        id='email' />

      <input
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

export default Register