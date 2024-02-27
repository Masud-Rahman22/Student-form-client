import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import AddStudent from "../AddStudent";
import UpdateInfo from "../UpdateInfo";

const Routers = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
    },
    {
        path: "/add",
        element: <AddStudent></AddStudent>
    },
    {
        path: "/update/:id",
        element: <UpdateInfo></UpdateInfo>
    },
]);


export default Routers;