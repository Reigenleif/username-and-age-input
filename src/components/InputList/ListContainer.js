import Card from "../UI/Card";
import style from "./ListContainer.module.css";

const ListContainer = (props) => {
  const userList = props.userList;

  const listGenerator = (user, index) => {
    return (
      <div key={index} style={{background : "#ffffff"}}>
        {user.name}, ({user.age.toString()} Years Old)
      </div>
    );
  };
  
  if (userList.length === 0) {
    return (
      <Card className={`${style["list-container"]} ${style.empty}`}>
        No User Inputted
      </Card>
    );
  }

  return (
    <Card className={`${style["list-container"]} ${style.filled}`}>
      {userList.map((element, index) => listGenerator(element, index))}
    </Card>
  );
};

export default ListContainer;
