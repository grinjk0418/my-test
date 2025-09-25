import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App.jsx";
import BusStopList from "../components/BusStopList";
import Main from "../components/Main.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        index: true,
        element: <Main />
      },
      {
        path: 'bus-stops',
        element: <BusStopList />
      }
    ]
  }
]);

function Router() {
  return <RouterProvider router={router} />
}

export default Router;