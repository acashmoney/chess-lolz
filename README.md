# Chess Lolz

Chess Lolz is a web application similar to Reddit for posting chess games. Users may create posts for chess games and add comments to these posts.

![Post](https://i.imgur.com/ZIlUJ6f.png)

![Comments](https://i.imgur.com/Nri7BND.png)

![ERD Diagram](https://i.imgur.com/TZaqR9O.png)

## Technologies Used
* JavaScript
* Express
* Node
* MongoDB
* Mongoose
* HTML
* CSS

## Getting Started

[Click to access Chess Lolz](https://chess-lolz.herokuapp.com/)

Users must login via Google in order to create/edit/delete their posts and make comments.

To create a post which is embedded correctly:
1. Play a Lichess game!
2. Go to game link.
3. Click 'Analysis Board'.
4. Copy URL of game analysis link.
5. Click 'Create Post' button on Chess Lolz.
6. Add Title, Post Text (optional), and Lichess game analysis link.
7. Hit Create Post.

To edit post:
1. Click 'Expand' on post.
2. Click 'Edit' button.
3. Update Post Text.
4. Press 'Submit'.

[Trello Board](https://trello.com/b/KxZLu2VI/ga-seir-project-2)

## Next Steps

The app is in alpha right now. Planned improvements are to continue working on Icebox items in the Trello Board prior to releasing for broader usage. In order of priority:
1. Upvote/downvote posts
2. Upvote/downvote comments
3. Comment on comments
4. Post sorting
5. Login via Lichess OAuth2