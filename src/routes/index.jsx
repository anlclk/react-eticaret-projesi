import { createBrowserRouter } from "react-router-dom";
import Home from "~/pages/home";
import Man from "~/pages/manproducts"
import Bags from "~/pages/bags";
import Woman from "~/pages/womanproducts";
import NotFound from "~/pages/notfound";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/erkek',
        element: <Man />
    },
    {
        path: '/kadin',
        element: <Woman />
    },
    {
        path: '/canta',
        element: <Bags />
    },
    // yukarıdaki routelar ile eşleşmezse notfound ile eşleşsin
    {
        path: '*',
        element: <NotFound />
    }

])

export default routes