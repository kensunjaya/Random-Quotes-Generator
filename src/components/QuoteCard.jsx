import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
const QuoteCard = ({ quote, author }) => {
  const [displayedQuote, setDisplayedQuotes] = useState("");

  useEffect(() => {
    console.log("QuoteCard useEffect");
    setDisplayedQuotes("");
    const interval = setInterval(() => {
      setDisplayedQuotes((prev) => {
        if (prev.length === quote.length) return prev;
        return quote.slice(0, prev.length + 1);
      });
    }, 20);
    return () => clearInterval(interval);
  }, [quote]);

  return (
    <div className={`border p-5 ${quote.length > 75 ? "border-red-500" : "border-green-500"} rounded-xl`}>
      <div>
        {`"${displayedQuote}"`}
      </div>
      <div className="italic text-right">
        {`- ${author}`}
      </div>
    </div>
  )
}

export default QuoteCard;