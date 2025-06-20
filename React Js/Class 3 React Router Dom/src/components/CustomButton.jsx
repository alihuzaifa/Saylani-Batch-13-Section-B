const CustomButton = ({ name, func }) => {
  return (
    <button
      onClick={() => {
        func("Test");
      }}
    >
      {name}
    </button>
  );
};

export default CustomButton;
