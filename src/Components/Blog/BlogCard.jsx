import { Link } from "react-router-dom";
const BlogCard = ({ blog }) => {
  return (
    <>
      <div className="w-[350px]  bg-gray-400 rounded-lg overflow-hidden">
        <img
          src="https://www.shutterstock.com/image-photo/bloggingblog-concepts-ideas-white-worktable-260nw-1029506242.jpg"
          alt=""
          className="w-full h-100 "
        />
        <h3 className="pt-2 text-gray-700 text-center font-semibold">
          {blog.title}
        </h3>
        <p className="text-gray-900 text-center mb-5">
          {blog?.body.split(" ").splice(0, 10).join(" ")}
        </p>
        <Link to={`${blog.id}`}> Post Details</Link>
      </div>
    </>
  );
};

export default BlogCard;
