import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './pages/root'
import SignUpPage from './pages/sign-up-page'
import LoginPage from './pages/login-page'
import HomePage from './pages/home-page'
import ReservationPage from './components/reservation/reservation-page'
import DestinationPage from './pages/destination-page'
import PageNotFound from './pages/page-not-found'
import SearchPage from './pages/search-page'

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
        path: 'destinations',
        element: <DestinationPage />
      },
      {
        path: 'search',
        element: <SearchPage />
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
