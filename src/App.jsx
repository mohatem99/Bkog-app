import "./App.css";
import BlogPage from "./Pages/BLogPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import NotFound from "./Components/NotFound/NotFound";
import PostDetails from "./Pages/PostDetails";
import AddBlog from "./Pages/AddBlog";
import EditBlog from "./Pages/EditBlog";
import NewPage from "./Pages/NewPage";
import { PostsContextProvioder } from "./store/PostsContext";
function App() {
  let router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <BlogPage />,
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
        { path: "new", element: <NewPage /> },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
  return (
    <PostsContextProvioder>
      {" "}
      <RouterProvider router={router}></RouterProvider>;
    </PostsContextProvioder>
  );
}

export default App;
