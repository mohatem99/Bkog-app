import { useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import BlogContainer from "../Components/Blog/BlogContainer";

import Loading from "../Components/Loader/Loading";
import AllTags from "../Components/Tags/AllTags";

import { PostsContext } from "../store/PostsContext";
import PaginationPosts from "../utils/PaginationPosts";
import FiltersComponent from "../Components/Blog/FiltersComponent";
function BlogPage() {
  const { data, loading, search, setSearch } = useContext(PostsContext);

  let [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    if (searchParams.get("q")) {
      setSearch(searchParams.get("q"));
    }
  }, [searchParams]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <AllTags />
          <div className="px-3 pt-2 flex items-center gap-2 mt-10 justify-between ">
            <div>
              <input
                type="text"
                placeholder="Search ..."
                className="border-gray-500 border-2 p-2 rounded-md focus:outline-cyan-800"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setSearchParams({ q: e.target.value });
                }}
              />
            </div>
            <FiltersComponent />
          </div>
          <BlogContainer blogs={data} />
          <PaginationPosts />
        </>
      )}
    </>
  );
}

export default BlogPage;
