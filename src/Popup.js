import React, { useState, useEffect } from "react";

const Popup = ({ data, i, setClick, id }) => {
  const [jokes, setJokes] = useState();
  const [count, setCount] = useState(0);

  // id.map((e)=>{
  // setUnique(e)
  // })

  const getData = async () => {
    let res = await fetch(
      `https://api.chucknorris.io/jokes/search?query=${data[i]}`
    );
    let res1 = await res.json();
    setJokes(res1.result);
  };
  useEffect(() => {
    getData();
  }, []);

  const handleClick = async () => {
    setCount(count + 1);

    console.log(jokes[count].value);
  };
  console.log(jokes);

  return (
    <div className="popup">
      <div className="popup-head">
        <div></div>
        <h1>{data[i]}</h1>
        <h2 onClick={() => setClick(false)}>X</h2>
      </div>
      <div className="joke-container">
        {jokes === [] || jokes[count].value === undefined ? (
          <div className="loader"></div>
        ) : (
          <div className="jokes">{jokes[count].value}</div>
        )}

        <div className="button">
          <button onClick={() => handleClick()}>Next joke</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
