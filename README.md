# Database Service

This API works as a mockup/prototype of the database service, fetching video metadata to load on the front page of the application.

## Deployment

The API is currently deployed in Render: https://database-service-nw0o.onrender.com/metadata/videos

## Features

- **GET /metadata/videos**: Fetches a list of video metadata from the database.

## Documentation

**GET /metadata/videos**

Fetch a list of 15 video metadata documents from the MongoDB database.

- **URL**: `/metadata/videos/`
- **Method**: `GET`
- **Response**: JSON array of video metadata objects

## Example
`curl https://database-service-nw0o.onrender.com/metadata/videos`

Response: 

```
[
    {
        "_id": "66c2d9ba26711cf70bfa6566",
        "title": "Video Title 1",
        "description": "Description for video 1",
        "category": "Category",
        "uploaded_by": "user1",
        "upload_date": "2024-08-19T05:35:54.303Z",
        "thumbnail_url": "https://example.com/thumbnail1.jpg",
        "video_id": "testvideo_1",
        "__v": 0
    },
    {
        "_id": "66c2d9ba26711cf70bfa6567",
        "title": "Video Title 2",
        "description": "Description for video 2",
        "category": "Category",
        "uploaded_by": "user2",
        "upload_date": "2024-08-19T05:35:54.303Z",
        "thumbnail_url": "https://example.com/thumbnail2.jpg",
        "video_id": "testvideo_2",
        "__v": 0
    },
]
```
## Usage

Using our client application (React), we can fetch this array of objects and display them in the front page of the video-sharing application.




