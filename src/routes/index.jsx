import { createBrowserRouter } from "react-router-dom";
import Home from "~/pages/home";
import NotFound from "~/pages/notfound";
import MainLayout from "~/layouts/main";
import BagProducts from "~/pages/bags";
import ManProducts from "~/pages/manproducts";
import WomanProducts from "~/pages/womanproducts";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
                {
                    index: true,
                    element: <Home />
                },
                {
                    path: 'erkek',
                    element: <ManProducts />
                },
                {
                    path: 'kadin',
                    element: <WomanProducts />
                },
                {
                    path: 'canta',
                    element: <BagProducts />
                },
                // yukarıdaki routelar ile eşleşmezse notfound ile eşleşsin
                {
                    path: '*',
                    element: <NotFound />
                } 
        ]
    }

])

export default routes