import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './pages/root'
import SignUpPage from './pages/sign-up-page'
import LoginPage from './pages/login-page'
import HomePage from './pages/home-page'
import ReservationPage from './pages/reservation-page'
import DestinationPage from './pages/destination-page'
import PageNotFound from './pages/page-not-found'

const route = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <PageNotFound />,
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
        path: 'reservations',
        element: <ReservationPage />
      },
      {
        path: 'destinations/:id',
        element: <DestinationPage />
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
