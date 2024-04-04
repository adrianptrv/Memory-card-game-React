import { useState, useEffect } from "react";
import "../styles/Grid.scss"

let firstArr = []

function Grid({wordSearch}) {


  useEffect(() => {
    fetch("https://api.unsplash.com/search/photos?query=" + wordSearch + "&client_id=nl2Ap7tFASL8YLZndqojgkL4o2wwGE5OqRCWR6b853Y")
      .then((response) => response.json())
      .then((data) => {
        let resultJson = data.results
        let arr1 = []
        for (let i = 0; i <= 9; i++) {
          arr1.push(resultJson[i].urls.small)
        }
        setBlocks(arr1)
        firstArr = arr1;
        console.log(arr1)
      })

  }, [])

  //Array with the images links
  const [blocks, setBlocks] = useState([]);

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
    setBlocks(firstArr)
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
      if (clickedBox.length == 9) {
        alert("Congrats you Won!")
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
    <div className="gridWrapper">
      {blocks.map((child, i) => <div className="gridItem" key={i} value={child} onClick={() => Comparer(child)}>
        <img className="gridImg" src={child}></img>
      </div>)}
      </div>
      <button className="btn" onClick={NewGame}>New game</button>
      <p>Score: {score}</p>

    </>
  );
}
export default Grid