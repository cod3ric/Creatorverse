import './App.css'
import { useRoutes } from 'react-router-dom'

import ShowCreators from './pages/ShowCreators'
import AddCreator from './pages/AddCreator'
import ViewCreator from './pages/ViewCreator'
import EditCreator from './pages/EditCreator'


function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <ShowCreators />,
    },
    { 
      path: "/add", 
      element: <AddCreator /> 
    },
    { 
      path: "/view/:id", 
      element: <ViewCreator /> 
    },
    { 
      path: "/edit/:id", 
      element: <EditCreator /> 
    },
  ]);

  return element
}

export default App
