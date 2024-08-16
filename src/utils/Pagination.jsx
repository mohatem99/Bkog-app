import { Fragment, useContext, useState } from "react";

import ReactPaginate from "react-paginate";

import { PostsContext } from "../store/PostsContext";

function Items({ currentItems }) {
  const { setTag } = useContext(PostsContext);
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {currentItems &&
          currentItems.map((item, i) => (
            <Fragment key={i}>
              <div className="">
                <button
                  className="flex-1 rounded-2xl shadow-sm p-4 hover:bg-cyan-900 hover:text-white"
                  onClick={() => {
                    setTag(item.slug);
                  }}
                >
                  {item.slug}
                </button>
              </div>
            </Fragment>
          ))}
      </div>
    </>
  );
}
function Pagination({ itemsPerPage, items }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;

    setItemOffset(newOffset);
  };

  return (
    <div className=" sm:max-sm:">
      <Items currentItems={currentItems} className="" />
      <div className=" ">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="prev"
          renderOnZeroPageCount={null}
          containerClassName={"flex justify-center mt-8"}
          pageClassName={"mx-3 "}
          pageLinkClassName={
            "w-10 h-10 flex items-center justify-center border rounded-full  hover:bg-cyan-800 "
          }
          previousClassName={"mx-1"}
          previousLinkClassName={
            "w-10 h-10 flex items-center justify-center border rounded-full text-gray-700 hover:bg-cyan-800 hover:text-white"
          }
          nextClassName={"mx-1 "}
          nextLinkClassName={
            "w-10 h-10 flex items-center justify-center  border rounded-full text-gray-700 hover:bg-cyan-800 hover:text-white"
          }
          breakClassName={"mx-1"}
          breakLinkClassName={
            "w-10 h-10 flex items-center justify-center  border rounded-full text-gray-700"
          }
          activeClassName={"text-white bg-cyan-800 rounded-full font-bold"}
        />
      </div>
    </div>
  );
}

export default Pagination;
