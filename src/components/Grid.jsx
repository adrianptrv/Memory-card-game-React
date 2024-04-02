import { useState, useEffect } from "react";


fetch("https://api.unsplash.com/search/photos?query=dog&client_id=nl2Ap7tFASL8YLZndqojgkL4o2wwGE5OqRCWR6b853Y")
.then((response) => response.json())
.then((data) => {
    let test2 = data.results
    console.log(test2[3].urls.small)
})

function Person() {
  const [blocks, setBlocks] = useState(["box1", "box2", "box3", "box4", "box5"]);

  //Clicked list
  const [clickedBox, setClickedBox] = useState([]);

  //Score
  const [score, setScore] = useState(0);

  //Shuffle the pictures function
  const Shuffle = () => {
    let arr = [...blocks]
    arr.sort(() => Math.random() - 0.5)
    setBlocks(arr)
  }

  //New game button function 
  const NewGame = () => {
    setBlocks(["box1", "box2", "box3", "box4", "box5"])
    setClickedBox([]);
    setScore(0)
  }


 //Main function
  const Comparer = (child) => {

    //Checks if the picture was already clicked. And if was, ends the game.
    if (clickedBox.includes(child)) {
      alert("GAME OVER! Your score is: " + score);

      //Resets varibles to default
      NewGame();
    }
    else {
      //Increases the score
      setScore(score + 1);

      //Checks if the player clicked all of the pictures
      if (clickedBox.length == 4) {
        alert("Congrats you Won!", {score})
      }

      //If he still haven't, adds the clicked one to the "clicked" list, and Shuffle the pictures
      else {
        const currentArr = clickedBox;
        currentArr.push(child);
        setClickedBox(currentArr); 
        Shuffle();
      }
    }
  }

  return (
    <>
      {blocks.map((child, i) => <div key={i} value={child} onClick={() => Comparer(child)} style={{ border: "3px solid black" }}>
        <h1>{child}</h1>
      </div>)}
      <button onClick={Shuffle}>Click</button>
      <button onClick={NewGame}>New game</button>
      <p>Score: {score}</p>

    </>
  );
}
export default Person