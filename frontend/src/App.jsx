import { Register, Home, About, Course, Project } from './pages/inc.jsx';
// import Error from './utils/Error.jsx';
import { Error } from './utils/inc.jsx';
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
        <Route path='/home' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/course' element={<Course />}/>
        <Route path='/project' element={<Project />}/>
        <Route path='/success-form' element={<SuccessForm />}/>
        <Route path='/*' element={<Error />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App