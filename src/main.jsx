import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider} from 'react-router-dom';
import routes from "./routes";
import Home from './pages/home';
import '~/assets/style.css';
import HeaderBar from './layouts/main/headerbar';
import MainLayout from './layouts/main';


ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router={routes} />

)
