import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toastError, toastSuccess } from '../../utils/Toast';

export default function useSignup () {
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
      const res = await fetch('/api/users/signup' ,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      const message = data.message;
      const success = data.success;

      if(success === true) {
        toastSuccess(message);
        navigate('/signin');
      } else {
        toastError(message);
      }
      setLoading(false);  
    } catch (error) {
      setLoading(false);
      console.log(error);
      toastError(res.message);
    }
  } 

  return { formData, handleChange, handleSubmit, loading, loader }
};