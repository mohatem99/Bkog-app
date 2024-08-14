
# Project Title


Certainly! Here's a more professional way to describe a blog app built in React for practicing CRUD operations:

Building a Blog Application with React: A Practical Guide to Mastering CRUD Operations
In this project, I developed a fully functional blog application using React, aimed at enhancing my understanding and proficiency in performing CRUD (Create, Read, Update, Delete) operations. This application serves as a practical, hands-on project that reinforces core concepts in modern web development.

Key Features:
Create: Users can easily add new blog posts with titles, content, and tags.
Read: The app displays a list of all posts, enabling users to browse and view detailed content.
Update: Existing posts can be edited, allowing users to update content as needed.
Delete: Posts can be removed from the system, demonstrating the delete operation.


## API Reference

#### Get all Blogs

```http
  GET "https://dummyjson.com/posts/add"
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET "https://dummyjson.com/posts/add/{id}"
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |




#### POST Blog

```http
  Pst "https://dummyjson.com/posts/add"
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `body` | `string` | **Required**. Your API key |




#### Delete item

```http
  DELETE "https://dummyjson.com/posts/add/{id}"
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`     | `string` | **Required**. Id of item to delete |


#### Update item

```http
  PUT "https://dummyjson.com/posts/add/{id}"
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id` ,body    | `string` | **Required**. Id of item to update |
