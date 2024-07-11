import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './pages/root'
import Home from './pages/home'


const route = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Home />
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
