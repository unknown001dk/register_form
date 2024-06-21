import Register from './pages/Register.jsx';
import Error from './utils/Error.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SuccessForm from './pages/SuccessForm.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Register />}/>
        <Route path='/success-form' element={<SuccessForm />}/>
        <Route path='/*' element={<Error />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App