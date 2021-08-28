import cz from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={`${cz.button} ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
