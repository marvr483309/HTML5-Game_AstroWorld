# HTML5-Game_AstroWorld
My DIG2500 Final Project

# Project Title
// AstroWorld

## Project Option
// Simple Browser Game

## Project Description
// Upon loading the browser website, you are met with a simplistic game menu, where you can choose to start a "New Game". Upon clicking this button, you are met with a scrolling introduction cutscene and some music. After the scroll text animation concludes, a flashing message will appear, telling the user to press any key to continue. Once the user does this, they are taken to a very short dialogue scene with sound and visual effects meant to signal the start of an intense narrative moment. After finishing the dialogue, the user is transported to a new screen with a guide poster on how to play the incoming mini-game. The user can then press any button to proceed, where they are tasked with 20 seconds of surviving the falling obstacles on the screen without being hit, using the arrow keys to navigate and dodge. If they lose, the user has the ability to retry the mini-game. If they win, the user has the ability to quit the game.

## Theme Interpretation
// The setting of my game's world is in space, specifically in a universe surrounded by many planets that are inhabited by countless alien species civilizations. Throughout my project, I use all sorts of space-themed motifs...even down to having the cursor be a rocket ship. 

## Intended User or Player
// The project is designed for video game enjoyers who are looking for a nostalgic, pixel-style rpg that feels like it came straight from an arcade in the 80's.

## User or Player Goal
// The user should be able to navigate the cutscenes, play the game, and achieve a win or lose state. 

## Main Features
// Main Menu => Introduction Cutscene => Dialogue Cutscene => Player Guide => Chase Sequence => Win/Lose State

## JavaScript Features
// I used script as my primary language, as it made everything flow a lot easier for the specific features I wanted. These were the most notable interactions that I used in my script.js: document.addEventListener for initiating events in the code, [ID].classList.remove/add("hidden") for adding and removing my overlays, proceedHandler for establishing a proceeding sequence (such as a dialogue state), and setTimeout(() => {} for adding timing alternations to unfolding events. More generally, I used my script to control the behavior of my music, add fixed features such as the countdown and alarm, and obviously...to configure the movement values for my player and obstacles.

## Responsive Design
// This was tough because I did not initially think about this game being for anyone other than a pc user. If I had more time, I would've focused more on my responsive design for sure. Upon accessing the website on my smaller mobile devices, I can see I have a lot of work to do in that area. However, it could be worse; for the most part, the elements are visible and decipherable. 

## User Testing
// I tested the website with almost every little change I did in the code, so it definitely got very tedious. Since I was late with my Checkpoint 2 discussion post, I ended up asking my friends to play the games and give me their feedback. This is what I recieved:
Pros - The overall functionality of website, music, some strong visual aspects.
Cons - Mouse pointer orientation is slightly off, unclear hover effects for buttons, no indicator for how to proceed dialogue, hit box issues with player vs obstacle, unclear win/lose state at this point in the development.

## Revisions
// 1. Added a clearer win/lose state for the mini-game, 2. Improved hit box & mouse orientation issues, 3. Changed the dialogue from onclick to keypress so it was more consistent with the rest of the cutscenes.

## Technologies Used
- HTML
- CSS
- JavaScript
- GitHub Pages

## Credits
// A huge thanks to my best friend, Gray Castro for making the music for this project.
The alarm sound effect came from MyInstants
Stock photos from Pexels, Gifs from Giphy, Icons from FlatIcon
Character Portraits made by me (Procreate)
AstroWorld Logo made by me (Adobe Illustrator)
Guide Poster made by me (Canva)
Used W3Schools, Mozilla, Reddit, & GitHub as coding references

## Future Improvements
// There is definitely a lot I could improve in. My main focuses would be to make my UI more responsive for mobile devices, add more to the actual mini-game itself, and lengthen the dialogue sequence to make the narrative a lot clearer for the audience.
