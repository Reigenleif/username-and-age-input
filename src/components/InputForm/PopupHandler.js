import style from "./PopupHandler.module.css";
import ErrorPopup from "./ErrrorPopup";

const PopupHandler = (props) => {
  return (
    <div>
      <div className={style["popup-backdrop"]}/>
      <div className={style["popup-container"]}>
        <ErrorPopup
          errorMsg={props.errorMsg}
          onOkay={props.onOkay}
        ></ErrorPopup>
      </div>
    </div>
  );
};

export default PopupHandler;
