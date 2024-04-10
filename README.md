# Overview

This is my solution to the [Memory Card](https://www.theodinproject.com/lessons/node-path-react-new-memory-card) game project from The Odin Project. 

### The challenge

The challenge is to create a Memory card game.
To win the player have to click on all 10 different picutres, while they are shuffled after every click. If the user clicks on a picture he already clicked, the game ends.

This was my second "real" React project, here I used "useEffect()" hook for the first time and also used an API with React for the first time.
Used Unsplash API for the images.

### Functionalities

- The player can write in the input field on the home screen, on what theme he wants the images for the game to be. When he writes the theme, the string is sent through the Unplash API, which fetches images for that theme.
- The player can start a new game at any time, which resets the current score, and shuffles the images back to the default view.
- When the player looses, the game is automatically restarted and if his score was the highest till this moment, it gets updated as High score.
- When the player wins, he can either start a new game again, or change the theme of the images, with which he is playing.

### Links

- Live Site URL on which you can check out the project: https://adrianptrv.github.io/Memory-card-game-React/

### Built with

- HTML
- React
- React Hooks
- SCSS


### Screenshots

<table>
  <tr>
    <td align="center" ><b>Mobile layout</b> </td>
    <td align="center" ><b>Desktop layout</b> </td>
  </tr>
  <tr>
    <td><img src="https://github.com/adrianptrv/Memory-card-game-React/assets/99720888/c740561b-e8ff-4cef-b87a-548b7733a10a"  /></td>
    <td><img src="https://github.com/adrianptrv/Memory-card-game-React/assets/99720888/969bbd47-2357-48b3-856a-03e08af2bb49" /> </td>
  </tr>
    <tr>
    <td><img src="https://github.com/adrianptrv/Memory-card-game-React/assets/99720888/e68418e8-dfa3-4b56-b546-f728d0f86549"  /></td>
    <td><img src="https://github.com/adrianptrv/Memory-card-game-React/assets/99720888/bd242aaa-e3f0-4b8d-9621-5d9496bf0430" /> </td>
  </tr>
    <tr>
    <td><img src="https://github.com/adrianptrv/Memory-card-game-React/assets/99720888/28ae6593-3ad9-4899-a6db-6d5c39ef86b6"  /></td>
    <td><img src="https://github.com/adrianptrv/Memory-card-game-React/assets/99720888/115a0db1-062f-459f-b533-3e5472808a0f" /> </td>
  </tr>
    <tr>
    <td colspan="2"><img src="https://github.com/adrianptrv/Memory-card-game-React/assets/99720888/5cf87fa6-19f2-440a-bdcf-fce36b07020d"  /></td>
  </tr>
</table>                                                                                                                                                    

