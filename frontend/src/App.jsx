import Register from './pages/Register.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SuccessForm from './pages/SuccessForm.jsx';

function App() {
  return (  
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register />}/>
        <Route path='/success-form' element={<SuccessForm />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App