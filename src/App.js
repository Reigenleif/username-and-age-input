import style from "./App.module.css";
import FormContainer from "./components/InputForm/FormContainer.js";
import ListContainer from "./components/InputList/ListContainer.js";
import { useState } from "react";

function App() {
  const [userList, setUserList] = useState([]);

  const inputHandler = (inputData) => {
    setUserList((prevState) => {
      return [...prevState, inputData];
    });
  };

  
  return (
    <div className={style.main}>
      <div style={{ width: "50vw" }}>
        <FormContainer onInput={inputHandler}  />
        <ListContainer userList={userList} />
      </div>
    </div>
  );
}

export default App;
