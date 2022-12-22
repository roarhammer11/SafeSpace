import {useNavigate} from "react-router-dom";
const Button = (props) => {
  const navigate = useNavigate();
  const {width = "w-100"} = props;
  function handleClick(e) {
    navigate(e);
  }
  return (
    <button
      type="button"
      className={"btn btn-primary btn-lg " + width}
      onClick={() => handleClick(props.location)}
      style={props.style}
    >
      {props.name}
    </button>
  );
};
export default Button;
