# HTTP Requests

## What Is HTTP?
**HyperText Transfer Protocol** is the protocal for sending and receiving data on the web.

HTTP is a **client / server** protocol. Requests are initiated by the client (you) and the server will respond with a "response".

The response could be HTML, CSS, JS files, images and other sources as well as data formatted as JSON or XML.

## Making Requests From JavaScript
Many times, you will want to fetch some data and update a specific part of the DOM/webpage. We can do this using JavaScript.

**Ajax / XMLHttpRequest** object was the original way of doing this, however the days we mostly use the **fetch API** that is available to us in the browser environment.

## HTTP Methods
| Method  | Functionality  |
|----|:---|
| **GET** Request |  Fetch / retrieve data from the server |
| **POST** Request |  Send data to the server |
| **PUT** & **PATCH** Request |  Update data on a server |
| **DELETE** Request |  Delete data from a server |

## HTTP Status Codes
|   |   |
|----|:---|
| **100** Range |  Continue | 
| **200** Range |  Success <br> 201 Created, 204 No Content |
| **300** Range |  Redirects <br> 301 Resource Moved |
| **400** Range |  Client Error, Bad Request <br> 401 Unauthorized, 403 Forbidden, 404 Not Found |
| **500** Range |  Server Error, Error on Server |
