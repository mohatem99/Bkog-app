
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
