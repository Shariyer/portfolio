/** @format */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./Components/Blog/Blog";
import Home from "./Components/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
