const Button = ({ children, text, color = "black" }) => {
  const onClickButton = (e) => {
    console.log(e);
    console.log(text);
  };

  return (
    <button
      // onClick={() => {
      //   console.log(text);
      // }}
      onClick={onClickButton}
      //onMouseEnter={onClickButton}
      style={{ color: color }}
    >
      {text}-{color.toUpperCase()}
      {children}
    </button>
  );
};

export default Button;
