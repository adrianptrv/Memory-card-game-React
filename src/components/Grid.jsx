import { useState, useEffect } from "react";


function Person() {
  const [person, setPerson] = useState(["box1", "box2", "box3", "box4", "box5"]);



  const Shuffle = () => {
    let arr = [...person]
    arr.sort(() => Math.random() - 0.5)
    setPerson(arr)
  }

  const Comparer = (child) => {
   console.log(child)
   console.log(person.includes(child))
  }

  return (
    <>
      {person.map((child, i) => <div key={i} value={child} onClick={() => Comparer(child)} style={{ border: "3px solid black" }}>
        <h1>{child}</h1>
      </div>)}
      <button onClick={Shuffle}>Click</button>

    </>
  );
}
export default Person