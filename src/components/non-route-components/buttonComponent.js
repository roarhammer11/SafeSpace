import {useNavigate} from "react-router-dom";
const Button = (props) => {
  const navigate = useNavigate();
  function handleClick(e) {
    navigate(e);
  }
  return (
    <button
      type="button"
      className="btn btn-primary btn-lg w-100"
      onClick={() => handleClick(props.location)}
    >
      {props.name}
    </button>
  );
};
export default Button;
