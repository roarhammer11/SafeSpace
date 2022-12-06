const Button = (props) => {
  function nextPage() {
    window.location.replace(props.location);
  }
  return (
    <button
      type="button"
      className="btn btn-primary btn-lg w-100"
      onClick={nextPage}
    >
      {props.name}
    </button>
  );
};
export default Button;
