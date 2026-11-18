# The Midnight Ball

## Game Concept
The Midnight Ball is an interactive text-based choose-your-own-adventure game. The player takes on the role of a young noblewoman attending the royal midnight ball, where she makes choices to determine how her night goes. 

Throughout the evening, players make choices that lead them to different storylines involving mystery, romance, and royal secrets. Depending on the choices made, players can discover the identity of a mysterious prince, solve the mystery of the queen's missing necklace, or reveal a secret of the royal family.

## Game Structure
- The game begins with the player arriving at the royal midnight ball and deciding if they want to dance with a mysterious stranger or meet a gentleman introduced by her mother
- As the story goes on, players can decide to explore different palace areas, make different decisions, and this determines which ending they reach
- The game has 11 scenes and 3 possible endings

## Game Logic Overview
- Uses an array of objects called story, where each object represents a scene containing a title, text, and available choices
- A variable named currentScene is set to 0 and tracks the player's current scene
- In startGame(), displayScene() is called to display the current scene's components
- Game features were split into multiple functions in order to have modular program structure
- When the player selects a choice, the current scene is updated based on the selected option. If the scene has no remaining choices, the game ends and shows a Play Again button

## Website Link
- https://angelicahanley.github.io/the-midnight-ball/