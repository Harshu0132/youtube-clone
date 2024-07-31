import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./utils/store"
import Body from "./components/Body"
import MainContainer from './components/MainContainer';
import WatchVideo from './components/WatchVideo';
import SearchVideos from './components/SearchVideos';


const App = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Body />,
            children: [
                {
                    // path: "/",
                    index: true,
                    element: <MainContainer />
                },
                {
                    path: "watch",
                    element: <WatchVideo />
                },
                {
                    path: "results",
                    element: <SearchVideos />
                }
            ]
        }
    ])


    return (
        <Provider store={store}>
            <div>
                <RouterProvider router={appRouter} />
            </div>
        </Provider>
    )
}

export default App;