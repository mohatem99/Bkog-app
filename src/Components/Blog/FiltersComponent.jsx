import { useContext } from "react";
import { PostsContext } from "../../store/PostsContext";

function FiltersComponent() {
  const { handlingOdring, orderBy, setOrderBy } = useContext(PostsContext);
  return (
    <div>
      <form className="max-w-sm mx-auto">
        <select
          value={orderBy}
          onChange={(e) => {
            setOrderBy(e.target.value);
            handlingOdring(orderBy);
          }}
          id="countries"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected="">Order By</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </form>
    </div>
  );
}

export default FiltersComponent;
