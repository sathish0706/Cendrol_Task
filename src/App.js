import { useState, useEffect } from "react";
import "./App.css";
import MainPage from "./MainPage";
import Popup from "./Popup";

function App() {
  const [data, setData] = useState();
  const [click, setClick] = useState(false);
  const [index, setIndex] = useState(null);

  let id = [
    "30lywvzfsowzxkiiy2voyw",
    "38j4lbnvtjcf0h9zzel65g",
    "3peetor-txmf9v01ufujoq",
    "3y7vnqsvtvuvvmhtuqjuma",
    "4a6ueyaysnir-nnc2sv7sa",
    "4hhre-gnqfosybe7-4x3pa",
    "4mm3nlyasfsorkgooazxxq",
    "4n76tu_jtcuutl1xl5k9sg",
    "4y_kptjmsmkt71tlbkalra",
    "52B8XDJ6R9-0lp0z_JLUdA",
  ];

  const getData = async () => {
    let res = await fetch("https://api.chucknorris.io/jokes/categories");
    let res1 = await res.json();
    setData(res1);
  };
  useEffect(() => {
    getData();
  }, []);

  console.log(click);

  return (
    <>
      <MainPage data={data} setClick={setClick} setIndex={setIndex} />
      {click ? <Popup data={data} i={index} setClick={setClick} id={id} /> : ""}
    </>
  );
}

export default App;
