import { useGameContext } from "../hooks/useGameContext";

export const Card = ({ imageRef, isFlipped }) => {
  const { handleUserChoice } = useGameContext();

  const handleClick = () => {
    handleUserChoice(imageRef);
  };

  return (
    <div
      className={`card [transform-style:preserve-3d] transition-transform duration-700
       ${!isFlipped ? "[transform:rotateY(0deg)]" : "[transform:rotateY(180deg)]"} `}
      onClick={handleClick}
    >
      <img
        className={`absolute rounded-lg w-20 h-28 lg:h-48 lg:w-32 object-cover transition-transform duration-1000 [transform:rotateY(180deg)] [backface-visibility:hidden]`}
        src={imageRef.src}
        onClick={handleClick}
        alt="Back Card"
      />
    </div>
  );
};
