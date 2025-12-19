import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import LoginPage from "./LoginPage";
import { Provider } from "react-redux";
import store from "../Store/store";

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<LoginPage/>
        },
        {
            path:"/browse",
            element:<Browse />
        },

    ])
    return(
        <div>
            <Provider store={store}>
            <RouterProvider router={appRouter}/>
            </Provider>
        </div>
    )
}
export default Body ; 