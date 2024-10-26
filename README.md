# My blog about metal

## Requirements

Python 3.10+ and the dependencies in `requirements.txt`.

## Add a new post

- create JSON data (see below) for the post
- from `src/python` run `python new_post.py [path/to/json]` to create the post.

This will create:
- the post that you can start to edit
- the post card that you need to copy/paste in `posts.js`

## JSON data of a post

Example of JSON file, all fields are required:

```json
{
    "year": 2024,
    "fileName": "some-band-name",
    "title": "This band is incredible!",
    "date": "27/04/2003",
    "description": "Small description.",
    "rating": "Easy",
    "image": "some/link/to/the/picture",
    "country": "France",
    "formation": "2077",
    "metalArchives": "https://www.metal-archives.com/bands/Lymphatic_Phlegm/3288",
    "genre": "Some subgenre of Goregrind"
}
```