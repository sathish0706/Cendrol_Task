import React from "react";

const MainPage = ({ data, setClick, setIndex }) => {
  const handleClick = (i) => {
    setClick(true);
    setIndex(i);
  };

  return (
    <div>
      <h1 id="h1">Chuck Norries</h1>

      <div className="App">
        {data ? (
          data.map((dt, i) => (
            <div className="title" key={i} onClick={() => handleClick(i)}>
              <h1>{dt}</h1>
              <div>Unlimited Jokes On {dt}</div>
            </div>
          ))
        ) : (
          <div className="loader"></div>
        )}
      </div>
    </div>
  );
};

export default MainPage;
