import { useGameContext } from "../hooks/useGameContext";
import { Card } from "./Card";

export const Grid = () => {
  const { increaseScore, choiceOne, choiceTwo, cards, gameIsComplete } = useGameContext();
  /*
    Optional Chaining required here since choiceOne and choiceTwo are null on initialization
  */
  return (
    <div className="grid grid-cols-8 gap-4">
      {cards.map((card) => (
        <div onClick={!gameIsComplete() ? increaseScore : null} key={card.id}>
          <Card imageRef={card} isFlipped={card.id === choiceOne?.id || card.id === choiceTwo?.id || card.isMatched} />
        </div>
      ))}
    </div>
  );
};
