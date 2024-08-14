import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function PostDetails() {
  const { id } = useParams();

  const [data, loading] = useFetch(id);
  console.log(data);

  return (
    <div>
      {data?.length != 0 ? (
        <>
          {" "}
          <div>{data?.title}</div>
          <div>{data?.body}</div>
          <Link to={`/${id}/edit`}>Edit Blog</Link>
        </>
      ) : (
        <h2>loadinggg</h2>
      )}
    </div>
  );
}

export default PostDetails;
