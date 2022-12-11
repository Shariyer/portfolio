/** @format */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "../src/Components/Blog/Blog";
import Main from "./Layout/Main";
import MainContent from "./Components/Home/MainContent/MainContent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <MainContent></MainContent>,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/about",
        element: <Blog />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
