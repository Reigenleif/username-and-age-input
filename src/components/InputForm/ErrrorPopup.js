import Card from "../UI/Card";
import Button2 from "../UI/Button2";


const ErrorPopup = (props) => {
  return (
    <Card style={{ borderColor: "salmon", flexDirection: "column", alignItems:"center", width:"40vw" }}>
      <div
        style={{
          height: "1.2em",
          fontStyle: "bold",
          color: "red",
          padding: "0.1em",
          display: "block",
          margin:"0 0 1rem 0"
        }}
      >
        Error!
      </div>
      <div style={{ height: "1.2em", fontStyle: "italic", padding: "0.1em",margin:"0 0 2rem 0" }}>
        {props.errorMsg}
      </div>
      <Button2 onClick={props.onOkay}>Okay!</Button2>
    </Card>
  );
};

export default ErrorPopup;
