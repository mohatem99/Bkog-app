import "./App.css";
import Navbar from "./Components/Navbar";
import Blogs from "./Pages/Blogs";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import NotFound from "./Components/NotFound/NotFound";
import PostDetails from "./Pages/PostDetails";
import AddBlog from "./Pages/AddBlog";
import EditBlog from "./Pages/EditBlog";
function App() {
  let router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Blogs />,
        },
        {
          path: ":id",
          element: <PostDetails />,
        },
        {
          path: "add-blog",
          element: <AddBlog />,
        },
        { path: ":id/edit", element: <EditBlog /> },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
