import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './pages/root'
import DetailDestination from './pages/detail-destination'
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
        path: 'reservations',
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
