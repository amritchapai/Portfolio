import './App.css'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './Components/Main'
import About from './Components/About'
import Contact from './Components/Contact'
import Projects from './Components/Projects'
import Body from './Components/Body'

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={browserRouter}/>
  )
}

export default App
