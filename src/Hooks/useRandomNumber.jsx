import { useState, useEffect } from 'react';

export function useRandomNumber() {
  const [randomNumber, setRandomNumber] = useState(null);

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(randomNumber);
  }, []);

  return randomNumber;
}
