# My blog about metal

## Requirements

Python and the dependencies in `requirements.txt`.

## Add a new post

- create JSON data (see below) for the post in the proper folder : `blog/[year]/[month]/[day].json`
- from `src/python` run `python new_post.py [path]` to create the post. In instance `python new_post.py 2024/07/19`.
    This will create:
    - the post : `[day].html` that you can move in the same directory as the previous JSON file
    - the post card that you need to copy/paste in `posts.js`

## JSON data of a post

The name of the file must the day of the post, like `19.js`.

Example of JSON file, all fields are required:

```json
{
    "name": "19",
    "title": "Mes albums préférés",
    "date": "19 juillet 2024",
    "description": "Je vous présente mes albums préférés.",
    "link": "https://ludovic-estival.github.io/blog/2024/07/19.html",
    "categories": ["Black", "Speed", "Goregrind"],
    "image": "19-07-2024.png"
}
```