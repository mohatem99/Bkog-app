import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import BlogCard from "../Components/Blog/BlogCard";
import useFetch from "../hooks/useFetch";
function Blogs() {
  const [search, setSearch] = useState("");
  const [data, loading] = useFetch();
  let [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("q"));
  return (
    <>
      {loading ? (
        <button type="button" className="bg-indigo-500 ..." disabled>
          <svg
            className="animate-spin h-5 w-5 mr-3 ..."
            viewBox="0 0 24 24"
          ></svg>
          Processing...
        </button>
      ) : (
        <>
          <div className="pt-2 flex items-center gap-2">
            <input
              type="text"
              className="border-black border-2 p-1"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <button className="bg-blue-800 text-white p-3 rounded-md">
              Search
            </button>
          </div>
          <div className="mt-9 grid grid-cols-4 gap-4">
            {data.map((el) => (
              <BlogCard blog={el} key={el.id} />
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default Blogs;
