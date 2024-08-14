import { useEffect, useState } from "react";
import { api } from "../utils/axios";

function useFetch(params = "", query = "") {
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
  return [data, loading];
}

export default useFetch;
