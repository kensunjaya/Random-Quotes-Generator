/* eslint-disable react/prop-types */
import { TfiReload } from "react-icons/tfi";

const RegenerateButton = ({ getRandomQuotes, displayedText }) => {
  return (
    <div 
      className="flex justify-center items-center space-x-2 border px-3 py-2 transition duration-200 rounded-lg cursor-pointer hover:dark:bg-white hover:dark:text-black hover:text-white hover:bg-black group"
      onClick={ getRandomQuotes }
    >
      <div>{displayedText}</div>
      <TfiReload className="group-hover:rotate-90 transition duration-200" />
    </div>
  )
  
}

export default RegenerateButton;