"""
Create the post. See README for usage.
"""

import os
import argparse
import json
from jinja2 import Environment, FileSystemLoader

if not os.path.isdir("out"):
    os.mkdir("out")

env = Environment(loader=FileSystemLoader("templates/"))

BASE_LINK = "https://ludovic-estival.github.io"


def create_post(json_file: str) -> None:
    """
    json: json file with necessary data. See 'example.json' for a template.
    """
    template = env.get_template("post.html")

    data = None
    with open(json_file, mode="r", encoding="UTF-8") as f:
        data = json.load(f)
        _validate_json(data)

    rating = _create_rating_span(data["rating"])

    # --- Post --- #
    file_path = f"/blog/{data['year']}/{data['fileName']}.html"
    file = "../.." + file_path

    with open(file, mode="w", encoding="UTF-8") as f:
        f.write(
            template.render(
                image=data["image"],
                title=data["title"],
                date=data["date"],
                rating=rating,
                country=data["country"],
                formation=data["formation"],
                archives=data["metalArchives"],
                genre=data["genre"],
            )
        )

    # --- Post card to copy and paste in posts.js --- #

    template = env.get_template("card.html")
    link = BASE_LINK + file_path

    with open("out/card.html", mode="w", encoding="UTF-8") as f:
        f.write(
            template.render(
                link=link,
                image=data["image"],
                title=data["title"],
                rating=rating,
                description=data["description"],
                date=data["date"],
            )
        )

    print(f"Post file generated in '{str(data['year'])}' folder.")
    print("Post card generated in 'out' folder.")


def _validate_json(data: dict) -> None:
    """
    Validates JSON data.
    """
    assert isinstance(data["year"], int)

    ratings = ["Easy", "Medium", "Hard", "Extreme"]
    assert data["rating"] in ratings

    fields = [
        "fileName",
        "title",
        "date",
        "description",
        "image",
        "country",
        "formation",
        "metalArchives",
        "genre",
    ]

    for field in fields:
        assert isinstance(data[field], str) and data[field] != ""


def _create_rating_span(rating: str) -> str:
    """
    rating: rating in the json file
    """
    match rating:
        case "Easy":
            return "<span class='badge bg-success'>Easy</span>"
        case "Medium":
            return "<span class='badge bg-warning'>Medium</span>"
        case "Hard":
            return "<span class='badge bg-danger'>Hard</span>"
        case "Extreme":
            return "<span class='badge bg-dark'>Extreme</span>"


if __name__ == "__main__":
    parser = argparse.ArgumentParser("new_article")
    parser.add_argument("json", help="JSON file for post creation", type=str)
    args = parser.parse_args()
    create_post(args.json)
