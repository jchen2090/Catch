import { useGameContext } from "../hooks/useGameContext";
import { Card } from "./Card";

export const Grid = () => {
  const { increaseScore, cards, isFlipped } = useGameContext();

  return (
    <div className="grid grid-cols-4 gap-4 md:grid-cols-8">
      {cards.map((card) => (
        <div onClick={!isFlipped(card) ? increaseScore : null} key={card.id}>
          <Card imageRef={card} isFlipped={isFlipped(card)} />
        </div>
      ))}
    </div>
  );
};
