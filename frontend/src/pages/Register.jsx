import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toastError, toastInfo, toastSuccess } from '../utils/Toast';

function Register() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [validationmessage, setValidationMessage] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  const validationMessage = (e) => {
    const { name, email, phonenumber } = formData;

    let message = '';
    if (name === '')  {
      message = 'Name is required';
    } else if (value.length < 2) {
      message = 'Name must be at least 2 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if ( email === '') {
      message = 'Email is required';
    } else if (!emailRegex.test(value)) {
      message = 'Invalid email address'
    }

    if (phonenumber === '') {
      message = 'Phonenumber is required';
    } else if (!phoneRegex.test(value)) {
      message = 'Phone number must be 10 digits long';
    }
    return message;
    setValidationMessage({
      ...validationMessage,
      [name] : message
    })
  }

  const validateInput = (e) => {
    const name = formData;
    let message = '';
    if (name === 'name') {
      if(!value) {
        message = 'Name is required';
      } else if (value.length < 2) {
        message = 'Name must be at least 2 characters';
      } else {
        message = '';
      }
    } else if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        message = 'Invalid email address.';
      } else {
        message = 'Valid email.';
      }
    } else if (name === 'phoneNumber') {
      const phoneRegex = /^\d{10}$/;
      if (!phoneRegex.test(value)) {
        message = 'Phone number must be 10 digits long.';
      } else {
        message = 'Valid phone number.';
      }
    }
    return message;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    validationMessage(e);
  
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