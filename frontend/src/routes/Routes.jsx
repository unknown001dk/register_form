import { createBrowserRouter } from "react-router-dom";
import { Register, Home, About, Course, Project, Signin, Signup } from '../pages/inc.jsx';
import SuccessForm from '../pages/SuccessForm.jsx';
import { Error } from "../utils/inc.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />, 
  },
  {
    path: '/project',
    element: <Project />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/course',
    element: <Course />,
  },
  {
    path: '/course-register',
    element: <Register />,
  },
  {
    path: '/success-form',
    element: <SuccessForm />,
  },
  {
    path: '/*',
    element: <Error />,
  },
  {
    path: '/signin',
    element: <Signin />,
  },
  {
    path: '/signup',
    element: <Signup />,
  }
])

export default router;