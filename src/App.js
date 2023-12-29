import React, { useState, useCallback, useEffect } from "react";
import "./App.css";
import DemoList from "./components/Demo/DemoList";
import Button from "./components/UI/Button/Button";

function App() {
  const [listTitle, setListTitle] = useState("My List");
  const [ascending, setAscending] = useState(true);
  const [btnText, setBtnText] = useState("change to descending");

  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  const changeOrder = () => {
    setAscending((prevAscending) => !prevAscending);
  };

  useEffect(() => {
    setBtnText(ascending ? "change to descending" : "change to ascending");
  }, [ascending]);

  const listItems = [5, 3, 1, 10, 9];

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} ascending={ascending} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={changeOrder}>{btnText}</Button>
    </div>
  );
}

export default App;
