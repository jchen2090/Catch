import { createContext, useEffect, useState } from "react";
import initialCards from "../Cards.json";

const shuffledCards = initialCards.sort(() => Math.random() - 0.5);

export const GameContext = createContext();
export const GameContextProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [cards, setCards] = useState(shuffledCards);

  const resetChoices = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
  };

  const handleUserChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  useEffect(() => {
    if (choiceOne === null || choiceTwo === null) {
      return;
    }
    /* 
      If the user selects the same card again then it simply flips over
      This was a bug fix for when the user clicked on the same card again it would instantly solve the pair
    */
    if (choiceOne === choiceTwo) {
      resetChoices();
      return;
    }

    if (choiceOne.src !== choiceTwo.src) {
      setTimeout(() => {
        resetChoices();
      }, 750);
    } else {
      const updatedCards = cards.map((card) => {
        if (card.src === choiceOne.src) {
          return { ...card, isMatched: true };
        }
        return { ...card };
      });
      setCards(updatedCards);
      resetChoices();
    }
  }, [choiceOne, choiceTwo]);

  const increaseScore = () => {
    setScore((score) => score + 1);
  };

  const reset = () => {
    setScore(0);
    resetChoices();
    // Reshuffles cards
    setCards(shuffledCards.sort(() => Math.random() - 0.5));
  };

  const gameIsComplete = () => {
    const unmatchedCards = cards.filter((card) => !card.isMatched);
    return unmatchedCards.length === 0;
  };

  const globalFunctions = {
    cards,
    score,
    choiceOne,
    choiceTwo,
    increaseScore,
    reset,
    handleUserChoice,
    gameIsComplete,
  };

  return <GameContext.Provider value={globalFunctions}>{children}</GameContext.Provider>;
};
