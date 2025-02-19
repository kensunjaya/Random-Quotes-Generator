import { useEffect } from "react";
import { useState } from "react";
import { PacmanLoader } from "react-spinners";
import { TfiReload } from "react-icons/tfi";

function App() {
  // const quotes = [
  //   "The only way to do great work is to love what you do.",
  //   "Life is what happens when you're busy making other plans.",
  //   "The purpose of our lives is to be happy.",
  //   "You miss 100% of the shots you don’t take.",
  // ];

  const [displayedQuotes, setDisplayedQuotes] = useState("");
  const [author, setAuthor] = useState("");

  const getRandomQuotes = async () => {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    setDisplayedQuotes(data.content);
    setAuthor(data.author);
  }

  useEffect(() => {
    getRandomQuotes();
  }, []);

  // const generateRandomQuotes = () => {
  //   const randomIndex = Math.floor(Math.random() * quotes.length);
  //   setDisplayedQuotes(quotes[randomIndex]);
  // }

  if (!displayedQuotes) {
    return (
      <div className="flex flex-col space-y-5 items-center justify-center min-h-screen bg-white text-black dark:bg-black dark:text-white">
        { window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? <PacmanLoader color="#FFF"/> : <PacmanLoader color="#000"/> }
      </div>
    )
  }


  return (
    <div className="flex flex-col space-y-5 items-center justify-center min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <div className="text-lg font-bold">
        Random Quotes Generator
      </div>
      <div className="space-y-5 max-w-[80%]">
        <div>
          {`"${displayedQuotes}"`}
        </div>
        <div className="italic text-right">
          {`- ${author}`}
        </div>
      </div>
      <div className="flex justify-center items-center space-x-2 border px-3 py-2 transition duration-200 rounded-lg cursor-pointer hover:dark:bg-white hover:dark:text-black hover:text-white hover:bg-black group" onClick={getRandomQuotes}>
        <div>Regenerate</div>
        <TfiReload className="group-hover:rotate-90 transition duration-200" />
      </div>
    </div>
  )
}

export default App
