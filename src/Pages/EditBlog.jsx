import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
function EditBlog() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, loading] = useFetch(id);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    setTitle(data.title);
    setDescription(data.body);
  }, [data]);

  const handleOnUpdate = async (e) => {
    e.preventDefault();
    const body = {
      ...data,
      title,
      description,
    };
    console.log(body);
    try {
      let response = await axios.put(`https://dummyjson.com/posts/${id}`, body);
      console.log(response);
    } catch (e) {
      console.log(e.message);
    }
  };
  console.log(data);

  let handleDeletBlog = async () => {
    try {
      const res = await axios.delete(`https://dummyjson.com/posts/${id}`);
      console.log(res);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      {" "}
      <div>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Title
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  id="username"
                  name="username"
                  type="text"
                  placeholder="title"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="col-span-full">
            <label
              htmlFor="about"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Description
            </label>
            <div className="mt-2">
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                id="about"
                name="about"
                rows={3}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
          </div>
        </div>{" "}
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
            onClick={handleDeletBlog}
          >
            Delete Blog
          </button>
          <button
            type="submit"
            onClick={handleOnUpdate}
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditBlog;
