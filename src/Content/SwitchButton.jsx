import { motion } from "framer-motion";

// icons import
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";

const SwitchButton = ({ isOn, toggleSwitch }) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <motion.div
        className={`flex items-center cursor-pointer p-1 rounded-full w-20 h-10  ${
          isOn ? "bg-gray-600" : "bg-gray-300"
        }`}
        onClick={toggleSwitch}
        layout
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
      >
        <motion.div
          className={`flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-md ${
            isOn ? "ml-10" : "ml-0"
          }`}
          layout
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
        >
          {isOn ? (
            <IoMdMoon className="text-gray-900" size={20} />
          ) : (
            <MdOutlineWbSunny className="text-gray-500" size={20} />
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SwitchButton;
