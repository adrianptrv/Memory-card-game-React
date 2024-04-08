import { useState} from "react";
import Grid from "./Grid.jsx"
import "../styles/SearchScreen.scss"


function SearchScreen() {
    //Used for changing pages between the search page and the grid(game) page
    const [pageNum, setPageNum] = useState(1)
    //Holds the value of the input
    const [inputWord, setInputWord] = useState()

    //Funtion for chaging pages
    const handlePageChange = () => {
        setPageNum(!pageNum)
    }

    return (
        <>
        {/* Tenary for the page changing */}
            {pageNum ?
                <div className="searchWrapper">
                    <h1>Please enter a category with which you would like to play.</h1>
                    <p>e.g. Nature, Cars, Pets...</p>
                    <input value={inputWord} onChange={(e) => {setInputWord(e.target.value) }} type="text"></input>
                    <br></br>
                    <button className="btn" onClick={handlePageChange}>Start game</button>
                </div>
                : <Grid wordSearch={inputWord} handleHomeScreen={handlePageChange} />}
        </>
    );
}
export default SearchScreen