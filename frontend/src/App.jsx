import {  RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header.jsx';
import router from './routes/Routes.jsx';

function App() {
  return (
    <>
      <ToastContainer />
      {/* <Header /> */}
      <RouterProvider router={router} />
    </>
  )
}

export default App