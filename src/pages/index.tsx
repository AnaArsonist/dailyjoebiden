import React, { useState, useEffect } from "react";
import quotes from "../data/quotes.json";
import joepics from "../data/joe_pics.json";

function Home() {
  const [randomQuote, setRandomQuote] = useState("");
  const [randomPic, setRandomPic] = useState("");
  const [lastUpdated, setLastUpdated] = useState(0);

  useEffect(() => {
    const now = new Date().getTime();
    const storedTime = parseInt(localStorage.getItem("lastUpdated"));

    if (!storedTime || now - storedTime > 24 * 60 * 60 * 1000) {
      const quote = quotes[Math.floor(Math.random() * quotes.length)];
      const pic = joepics[Math.floor(Math.random() * joepics.length)];

      setRandomQuote(quote);
      setRandomPic(pic);

      localStorage.setItem("lastUpdated", now.toString());
      setLastUpdated(now);
    } else {
      const storedQuote = localStorage.getItem("randomQuote");
      const storedPic = localStorage.getItem("randomPic");

      setRandomQuote(storedQuote);
      setRandomPic(storedPic);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("randomQuote", randomQuote);
    localStorage.setItem("randomPic", randomPic);
  }, [randomQuote, randomPic]);

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="flex flex-col gap-y-6 justify-center items-center px-6 md:px-20 lg:px-32 xl:px-56">
        <h1 className="text-4xl font-bold mr-2">Daily Joe Biden</h1>
        <img
          className="h-56 w-56 hover:animate-spin object-fill"
          src={randomPic}
          alt="Joe Biden"
        />
        <p className="text-xl italic font-serif text-justify">{randomQuote}</p>
        <p className="text-xl">- Joe Biden</p>
      </div>
    </div>
  );
}

export default Home;
