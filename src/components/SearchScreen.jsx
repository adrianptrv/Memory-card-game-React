import { useState, useEffect } from "react";
import Grid from "./Grid.jsx"


function SearchScreen() {
    const [pageNum, setPageNum] = useState(1)
    const [inputWord, setInputWord] = useState()

    const handlePageChange = () => {
        setPageNum(!pageNum)
    }

    return (
        <>
            {pageNum ?
                <div>
                    <h1>Please enter a category with which you would like to play.</h1>
                    <p>e.g. Nature, Cars, Pets...</p>
                    <input value={inputWord} onChange={(e) => {setInputWord(e.target.value) }} type="text"></input>
                    <button onClick={handlePageChange}>Start game</button>
                </div>
                : <Grid wordSearch={inputWord} />}
        </>
    );
}
export default SearchScreen