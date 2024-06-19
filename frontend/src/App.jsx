import Register from './pages/Register.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SuccessForm from './pages/SuccessForm.jsx';
import UserForm from './pages/res.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (  
    <BrowserRouter>
        <ToastContainer />
      <Routes>
        <Route path='/' element={<Register />}/>
        <Route path='/res' element={<UserForm />}/>
        <Route path='/success-form' element={<SuccessForm />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App