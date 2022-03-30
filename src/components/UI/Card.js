import cardStyle from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={`${cardStyle.card} ${props.className}`} style={{...props.style}}>
      {props.children}
    </div>
  );
};

export default Card;
