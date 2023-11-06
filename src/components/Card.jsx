import { useGameContext } from "../hooks/useGameContext";

export const Card = ({ imageRef, isFlipped }) => {
  const { handleUserChoice } = useGameContext();

  //TODO: Bug with clicking on the same card selects the card next to it instead of reflipping it
  const handleClick = () => {
    handleUserChoice(imageRef);
  };

  //TODO: Add image for front of card
  return (
    <div className="card" onClick={handleClick}>
      <p className="absolute">Front</p>
      <img
        className={`absolute w-32 h-48 object-cover ${!isFlipped ? "[transform:rotateY(90deg)]" : "[transform:rotateY(0deg)]"}`}
        src={imageRef.src}
        onClick={handleClick}
        alt="Back Card"
      />
    </div>
  );
};
