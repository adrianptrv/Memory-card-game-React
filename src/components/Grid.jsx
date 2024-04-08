import { useState, useEffect } from "react";
import "../styles/Grid.scss"

let firstArr = []

function Grid({ wordSearch, handleHomeScreen }) {

 //Calls the API with the desired category name *wordSearch* and when it gets the results, adds them to an array
  useEffect(() => {
    fetch("https://api.unsplash.com/search/photos?query=" + wordSearch + "&client_id=nl2Ap7tFASL8YLZndqojgkL4o2wwGE5OqRCWR6b853Y")
      .then((response) => response.json())
      .then((data) => {
        //Gets the raw data results
        let resultJson = data.results
        let arr1 = []
        //Pushesh the first 10 results, image urls into an array
        for (let i = 0; i <= 9; i++) {
          arr1.push(resultJson[i].urls.small)
        }
        //Sets the blocks array which we are using to show the picture blocks in out grid, with the arr1 array in which we stored the result from the API.
        setBlocks(arr1)
        //Sets the arr1 result to the firstArr variable, so we can have the default view of the grid, when we are starting a new game.
        firstArr = arr1;
      })

  }, [])

  //Array with the images links
  const [blocks, setBlocks] = useState([]);

  //Clicked list
  const [clickedBox, setClickedBox] = useState([]);

  //Score
  const [score, setScore] = useState(0);

  //High score
  const [highScore, setHighScore] = useState(0);

  //Modal trigger
  const [modalT, setModalT] = useState(0);

  //Shuffle the pictures function
  const Shuffle = () => {
    let arr = [...blocks]
    arr.sort(() => Math.random() - 0.5)
    setBlocks(arr)
  }

  //New game button function 
  const NewGame = () => {
    //Sets the block images to the default values they were.
    setBlocks(firstArr)
    //Resets the clicked boxes array to empty for the new game.
    setClickedBox([]);
    //Resets the score.
    setScore(0)
  }

  //Handle modal change 
  const HandleModalChange = () => {
    setModalT(!modalT)
  }

  //Main function
  const Comparer = (child) => {

    //Checks if the picture was already clicked. And if was, ends the game.
    if (clickedBox.includes(child)) {
      alert("GAME OVER! Your score is: " + score);

      //Checks and updates the high score
      if (highScore != score && highScore < score) {
        setHighScore(score)
      }
      //Resets varibles to default
      NewGame();
    }
    else {
      //Increases the score
      setScore(score + 1);

      //Checks if the player clicked all of the pictures
      if (clickedBox.length == 9) {
        setHighScore(10)
        HandleModalChange();
        NewGame();
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
   <div>
      <button className="btn new" onClick={NewGame}>New game</button>
      <div className="scores">
      <p>Score: {score}</p>
      <p>High score: {highScore}</p>
      </div>
      <div className="gridWrapper">
        {/* Maps the whole array and creates block for every img */}
        {blocks.map((child, i) => <div className="gridItem" key={i} value={child} onClick={() => Comparer(child)}>
          <img className="gridImg" src={child}></img>
        </div>)}
      </div>
      </div> 
      {/* Modal switch */}
      {modalT ? <div className="modalScreen">
        <div className="btnWrapper">
      <h1>YOU WON</h1>
      <button onClick={HandleModalChange}>New game</button>
      <button onClick={handleHomeScreen}>New search</button>
      </div>
    </div> : <></>} 
    </>
  );
}
export default Grid