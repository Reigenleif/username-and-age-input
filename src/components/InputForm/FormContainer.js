import Card from "../UI/Card";
import Button1 from "../UI/Button1";
import FormStyle from "./FormContainerForm.module.css";
import PopupHandler from "./PopupHandler";
import { useState } from "react";

const FormContainer = (props) => {
  const [inputData, setInputData] = useState({ name: "", age: "" });
  const [isValid, setIsValid] = useState({ name: true, age: true });
  const [errorPopup, setErrorPopup] = useState(<div></div>)

  const nameChangeHadler = (event) => {
    setInputData((prevState) => {
      return {
        ...prevState,
        name: event.target.value,
      };
    });
    setIsValid((prevState) => {
      return {
        ...prevState,
        name: true,
      };
    });
  };

  const ageChangeHadler = (event) => {
    setInputData((prevState) => {
      return {
        ...prevState,
        age: parseInt(event.target.value),
      };
    });
    setIsValid((prevState) => {
      return {
        ...prevState,
        age: true,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    // Case 1 : Empty name
    if (inputData.name === "") {
      setIsValid((prevState) => {
        return {
          ...prevState,
          name: false,
        };
      });
      triggerErrorPopup("Please enter a name");
      return;
    }

    // Case 2 : Empty age
    if (inputData.age === undefined) {
      setIsValid((prevState) => {
        return {
          ...prevState,
          age: false,
        };
      });
      triggerErrorPopup("Please enter an age");
      return;
    }

    // Case 3 : age < 0
    if (inputData.age < 0) {
      setIsValid((prevState) => {
        return {
          ...prevState,
          age: false,
        };
      });
      triggerErrorPopup("Do not insert negative age!");
      return;
    }

    // Case 4 : age is not an integer
    if (inputData.age % 1 !== 0) {
      setIsValid((prevState) => {
        return {
          ...prevState,
          age: false,
        };
      });
      triggerErrorPopup("Please insert an integer age");
      return;
    }

    props.onInput(inputData);
    setInputData({ name: "", age: "" });
  };

  const triggerErrorPopup = (errorMsg) => {
    setErrorPopup(<PopupHandler errorMsg={errorMsg} onOkay={onOkayHandler}></PopupHandler>)
  }

  const onOkayHandler = () => {
    setErrorPopup(<div></div>)
  }

  return (
    <div>
      {errorPopup}
      <Card
        style={{ padding: "1rem", margin: "2px", justifyContent: "center" }}
      >
        <div style={{ width: "30vw" }}>
          <form onSubmit={submitHandler}>
            <div className={`${FormStyle["form-control"]} `}>
              <label>Name</label>
              <input
                className={`${!isValid.name ? FormStyle["invalid"] : ""}`}
                type="text"
                value={inputData.name}
                onChange={nameChangeHadler}
              ></input>
              <label>Age</label>
              <input
                className={`${!isValid.age ? FormStyle["invalid"] : ""}`}
                type="number"
                value={inputData.age}
                onChange={ageChangeHadler}
              ></input>
            </div>
            <div className={FormStyle["form-submit"]}>
              <Button1 type="submit">Submit</Button1>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default FormContainer;
