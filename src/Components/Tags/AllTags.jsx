import useFetchTags from "../../hooks/useFetchTags";
import Loading from "../Loader/Loading";

import Pagination from "../../utils/Pagination";

function AllTags() {
  const [tags, loading] = useFetchTags();

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="pt-3">
      <Pagination itemsPerPage={10} items={tags} />
    </div>
  );
}

export default AllTags;
