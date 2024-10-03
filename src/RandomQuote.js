import React, { useState } from 'react';

const quotes = [
  { quote: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { quote: "Don't let yesterday take up too much of today.", author: "Will Rogers" },
  { quote: "It's not whether you get knocked down, it's whether you get up.", author: "Vince Lombardi" },
  { quote: "Failure will never overtake me if my determination to succeed is strong enough.", author: "Og Mandino" },
  { quote: "We may encounter many defeats but we must not be defeated.", author: "Maya Angelou" },
];

const RandomQuote = () => {
  const [randomQuote, setRandomQuote] = useState(quotes[0]);

  const getNewQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomIndex]);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>"{randomQuote.quote}"</h2>
      <p>- {randomQuote.author}</p>
      <button onClick={getNewQuote}>Get New Quote</button>
    </div>
  );
};

export default RandomQuote;
