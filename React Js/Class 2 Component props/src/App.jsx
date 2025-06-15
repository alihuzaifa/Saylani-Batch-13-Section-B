import CustomButton from "./components/CustomButton";

const App = () => {

  function handleClick(param) {
    alert(param)
  }

  return (
    <div>
      <CustomButton name="Button 1" title="Hello 1" click={handleClick} />
      <CustomButton name="Button 2" title="Hello 2" click={handleClick} />
      <CustomButton name="Button 3" title="Hello 3" click={handleClick} />
      <CustomButton name="Button 4" title="Hello 4" click={handleClick} />
      <CustomButton name="Button 5" title="Hello 5" click={handleClick} />
    </div>
  );
};

export default App;
