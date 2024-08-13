import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './pages/root'
import Home from './pages/home-page'
import DetailDestination from './pages/detail-destination'
import SignUp from './pages/sign-up-page'
import Login from './pages/login-page'
import SignUpPage from './pages/sign-up-page'
import LoginPage from './pages/login-page'
import HomePage from './pages/home-page'
import ReservationPage from './pages/reservation-page'


const route = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <HomePage />
      },
      {
        path: 'signup',
        element: <SignUpPage />
      },
      {
        path: 'login',
        element: <LoginPage />
      },
      {
        path: 'reservation',
        element: <ReservationPage />
      },
      {
        path: 'destinations/:id',
        element: <DetailDestination />
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={route} />
  )
}

export default App
