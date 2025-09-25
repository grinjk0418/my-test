
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import App from "../App.jsx"
import BusStopList from "../components/BusStopList.jsx";
import Main from "../components/Main.jsx"
import Map from "../components/Map.jsx"
import BusList from "../components/BusList.jsx"
import BusListDetail from "../components/BusListDetail.jsx";

const router = createBrowserRouter([
    {
        element: <App/>,
        children : [
            {
                path: '/',
                element:<Main/>
            },
            {
                path: '/busstop',
                element:<BusStopList/>
            },
            {
                path: '/map',
                element:<Map/>
            },
            {
                path: '/bus',
                element: <BusList/>
            },
            {
                path: '/busdetail/:routeId',
                element: <BusListDetail/>
            }

        ]
    }
]);

function Router(){
    return <RouterProvider router={router}/>
}

export default Router;