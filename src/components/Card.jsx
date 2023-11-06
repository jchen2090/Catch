import { useGameContext } from "../hooks/useGameContext";

export const Card = ({ imageRef, isFlipped }) => {
  const { handleUserChoice } = useGameContext();

  const handleClick = () => {
    handleUserChoice(imageRef);
  };

  //TODO: Add image for front of card
  return (
    <div
      className={`card  ${
        !isFlipped ? "[transform:rotateY(0deg)]" : "[transform:rotateY(180deg)]"
      } [transform-style:preserve-3d] transition-transform duration-1000`}
      onClick={handleClick}
    >
      <p className="absolute ">Front</p>
      <img
        className={`absolute w-32 h-48 object-cover transition-transform duration-1000 [transform:rotateY(180deg)] [backface-visibility:hidden]`}
        src={imageRef.src}
        onClick={handleClick}
        alt="Back Card"
      />
    </div>
  );
};
