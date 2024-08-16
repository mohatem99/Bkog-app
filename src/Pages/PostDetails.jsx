import { Link, useParams, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Loading from "../Components/Loader/Loading";
import { Button } from "flowbite-react";
import {
  EyeIcon,
  PencilSquareIcon,
  ArchiveBoxXMarkIcon,
} from "@heroicons/react/24/outline";

function PostDetails() {
  const { id } = useParams();

  const navigate = useNavigate();
  const [data, loading] = useFetch(id);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      {/* Hello world */}
      <div className="sm:px-2">
        {/* Blog Title and Meta Information */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {data.title}
          </h1>
          <div className="flex items-center text-gray-600 space-x-4">
            <div className="flex items-center">
              <span>Author : {data.id}</span>
            </div>

            <EyeIcon class="pr-2 h-6 w-6 text-gray-500" />

            {data.views}
          </div>
        </div>
        {/* Blog Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              {data.body}
            </div>
          </div>
          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Tags
              </h3>
              <ul className="space-y-4">
                {data.tags.map((el, index) => (
                  <li className="text-blue-600 hover:underline" key={index}>
                    {el}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
      <div className="flex justify-end items-center gap-3 mt-5">
        <button className="flex justify-center gap-3 hover:bg-red-500 p-3 hover:rounded-md">
          {" "}
          Delete Post
          <ArchiveBoxXMarkIcon class="h-6 w-6 text-white " />
        </button>{" "}
        <Button
          classNAme="rounded-lg"
          onClick={() => navigate(`/${data.id}/edit`)}
        >
          Update Post
          <PencilSquareIcon class="h-6 w-6 ml-3 text-white " />
        </Button>
      </div>
    </>
  );
}

export default PostDetails;
