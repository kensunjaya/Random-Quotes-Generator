import { useEffect } from "react";
import { useState } from "react";
import { PacmanLoader } from "react-spinners";
import RegenerateButton from "./components/RegenerateButton";
import QuoteCard from "./components/QuoteCard";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [isError, setIsError] = useState(false);
  const [displayedQuotes, setDisplayedQuotes] = useState("");
  const [author, setAuthor] = useState("");

  const getRandomQuotes = async () => {
    const response = await fetch('https://api.quotable.io/quotes/random?limit=4'); // return array
    const data = await response.json();
    if (response.ok) {
      setQuotes(data);
    }
    else {
      setIsError(true);
    }
  }



  useEffect(() => {
    getRandomQuotes();
  }, []);
  

  // const generateRandomQuotes = () => {
  //   const randomIndex = Math.floor(Math.random() * quotes.length);
  //   setDisplayedQuotes(quotes[randomIndex]);
  // }

  if (!quotes) {
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
        {quotes.map((quote, index) => {
          return (
            <QuoteCard key={index} quote={quote.content} author={quote.author} />
          )
        })}
      </div>
      <RegenerateButton getRandomQuotes={ getRandomQuotes } displayedText="Regenerate" />
    </div>
  )
}

export default App
