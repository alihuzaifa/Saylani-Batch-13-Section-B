const CustomButton = (props) => {
  return (
    <button
      onClick={() => {
        props.click(props.name);
      }}
      title={props.title}
    >
      {props.name}
    </button>
  );
};

export default CustomButton;
