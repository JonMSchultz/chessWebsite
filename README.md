# Chesscraft — Interactive Chess Learning Website

A browser-based chess learning site built with HTML5, CSS3, and vanilla JavaScript.

## Run locally
1. Extract the ZIP.
2. Open the `chess-learning-website` folder in Visual Studio Code.
3. Install the **Live Server** extension if you do not already have it.
4. Right-click `index.html` and choose **Open with Live Server**.

You can also open `index.html` directly, but Live Server is recommended.

## Project structure
- `index.html` — home page and learning dashboard
- `fundamentals.html` — beginner lessons and knowledge check
- `openings.html` — searchable opening library with move navigation
- `middlegame.html` — tactics, positional ideas, and planning
- `endgame.html` — basic and intermediate endgame concepts
- `puzzles.html` — interactive chess puzzle board
- `css/` — shared styling and responsive rules
- `js/main.js` — shared navigation, theme, and page interactions
- `js/progress.js` — local progress storage
- `js/openings.js` — opening data and move viewer
- `js/puzzles.js` — puzzle data, board interaction, and answer checking
- `assets/images/` — original SVG illustrations

## Libraries and connectivity
The opening and puzzle pages use chess.js 0.10.3 from cdnjs for legal chess move generation and board-state handling. Google Fonts is used for typography. Those features require an internet connection. The rest of the site is plain HTML/CSS/JavaScript and requires no backend, API key, or account.

## Progress and privacy
Theme preference, lesson completions, and puzzle stats are saved in this browser using `localStorage`. They are not synced between devices or browsers. Use the same browser profile to retain progress.

## Notes / future improvements
- Expand the curated puzzle set and independently verify each FEN/solution pair before publishing.
- Add full multi-move opponent replies and move-tree explanations.
- Add board coordinates, drag-and-drop, and keyboard accessibility refinements.
- Add lesson quizzes to each learning topic and achievement badges.
- Add an opening variation explorer with annotated branches.
- Consider using a maintained chessboard UI library if the project grows.

This is a learning project, not an online multiplayer chess server. The puzzle interface uses click-to-move rather than drag-and-drop.
