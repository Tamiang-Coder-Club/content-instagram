import { useEffect, useState } from "react";
import SwitchButton from "./Content/SwitchButton";

function App() {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  useEffect(() => {
    if (isOn) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isOn]);

  return (
    <div
      className="App flex items-center justify-center min-h-screen 
      bg-gray-100 dark:bg-gray-900 transition-colors duration-500"
    >
      <SwitchButton isOn={isOn} toggleSwitch={toggleSwitch} />
    </div>
  );
}

export default App;
