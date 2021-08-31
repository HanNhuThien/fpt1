import cz from "./Card.module.css";

const Card = (props) => {
  return <div className={`${cz.card} ${props.className}`}>{props.children}</div>;
};

export default Card;
