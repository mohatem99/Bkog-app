import BlogCard from "./BlogCard";

function BlogContainer({ blogs }) {
  return (
    <div className="p-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
      {blogs.map((element) => (
        <BlogCard blog={element} key={element.id} />
      ))}
    </div>
  );
}

export default BlogContainer;
