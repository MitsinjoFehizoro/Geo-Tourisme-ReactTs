import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './pages/root'
import Home from './pages/home'
import DetailDestination from './pages/detail-destination'
import SignUp from './pages/sign-up'


const route = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'signup',
        element: <SignUp />
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
