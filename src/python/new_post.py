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



def create_post(arg: str) -> None:
    """
    path: path in blog folder
    In instance, "2024/07/19" will create "blog/2024/07/19.html" file.
    """
    path = "../../blog/" + arg
    template = env.get_template("post.html")

    data = None
    with open(path + ".json", mode="r", encoding="UTF-8") as f:
        data = json.load(f)
        _validate_json(data)

    # --- Post --- #

    file = "out/" + data["name"] + ".html"
    with open(file, mode="w", encoding="UTF-8") as f:
        f.write(
            template.render(
                date=data["date"], title=data["title"], categories=data["categories"]
            )
        )

    # --- Post card for index.html, related categories and posts.html --- #

    template = env.get_template("card.html")
    with open("out/index-card.html", mode="w", encoding="UTF-8") as f:
        f.write(
            template.render(
                date=data["date"],
                title=data["title"],
                categories=data["categories"],
                link=data["link"],
                image="src/images/" + data["image"],
                description=data["description"],
                index_card=True
            )
        )

    with open("out/post-card.html", mode="w", encoding="UTF-8") as f:
        f.write(
            template.render(
                date=data["date"],
                title=data["title"],
                categories=data["categories"],
                link=data["link"],
                image="../../src/images/" + data["image"],
                description=data["description"],
                index_card=False
            )
        )

    print("Files generated in 'out' folder.")

def _validate_json(data: dict) -> None:
    """
    Validates JSON data.
    """
    fields = ["name", "title", "date", "description", "link", "image"]

    for field in fields:
        assert isinstance(data[field], str) and data[field] != ""

    assert isinstance(data["categories"], list) and len(data["categories"]) > 0
    for category in data["categories"]:
        assert isinstance(category, str) and category != ""



if __name__ == "__main__":
    parser = argparse.ArgumentParser("new_article")
    parser.add_argument("path", help="Path in blog folder, like '2024/07/19'", type=str)
    args = parser.parse_args()
    create_post(args.path)
