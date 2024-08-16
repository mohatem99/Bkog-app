import { useEffect, useState } from "react";
import { api } from "../utils/axios";

function useFetch(params = "", query = "", tag = "") {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await api.get(`${params}`);
      if (res.data.hasOwnProperty("posts")) {
        setData(res.data.posts);
      } else {
        setData(res.data);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [query]);

  const fetchtagPostsUpdate = async () => {
    try {
      const res = await api.get(`tag/${tag}`);
      console.log("hiiiii");

      setData(res.data.posts);
    } catch (e) {
      console.log(e.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchtagPostsUpdate();
  }, [tag]);
  return [data, loading];
}

export default useFetch;
