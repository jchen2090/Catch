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
    let timer;

    if (choiceOne === null || choiceTwo === null || choiceOne === choiceTwo) {
      return;
    }

    if (choiceOne.src !== choiceTwo.src) {
      timer = setTimeout(() => {
        resetChoices();
      }, 500);
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

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [choiceOne, choiceTwo, cards]);

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

  /*
    Optional Chaining required here since choiceOne and choiceTwo are null on initialization
  */
  const isFlipped = (cardRef) => {
    return cardRef.isMatched || cardRef.id === choiceOne?.id || cardRef.id === choiceTwo?.id;
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
    isFlipped,
  };

  return <GameContext.Provider value={globalFunctions}>{children}</GameContext.Provider>;
};
