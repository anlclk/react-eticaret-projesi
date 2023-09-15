import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider} from 'react-router-dom';
import routes from "./routes";
import Home from './pages/home';


ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router={routes} />

)
