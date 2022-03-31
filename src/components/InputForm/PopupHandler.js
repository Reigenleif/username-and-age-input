import style from "./PopupHandler.module.css";
import ErrorPopup from "./ErrrorPopup";
import reactDOM from "react-dom";
import react from "react";

const PopupHandlerPortal = (props) => {
  return (
    <react.Fragment>
      {reactDOM.createPortal(<div className={style["popup-backdrop"]} onClick={props.onOkay}/>,document.getElementById("backdrop-root"))}
      {reactDOM.createPortal(<PopupHandler errorMsg={props.errorMsg} onOkay={props.onOkay} />,document.getElementById("popup-root"))}
    </react.Fragment>
  );
};
const PopupHandler = (props) => {
  return (
    <div className={style["popup-container"]}>
      <ErrorPopup errorMsg={props.errorMsg} onOkay={props.onOkay}></ErrorPopup>
    </div>
  );
};

export default PopupHandlerPortal;
