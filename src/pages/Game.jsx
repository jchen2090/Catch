import { Grid } from "../components/Grid";
import { useGameContext } from "../hooks/useGameContext";

export const Game = () => {
  const { score, reset, gameIsComplete } = useGameContext();

  //TODO: Make proper you win page
  if (gameIsComplete()) {
    console.log("You win!!!!");
  }

  return (
    <>
      <div className="mt-6 text-center dark:text-white">
        <h1 className="mb-2 text-3xl font-bold">Catch</h1>
        <h2 className="italic">A Cat-Matching Game</h2>
      </div>
      <div className="flex justify-center mt-12">
        <Grid />
      </div>
      <p className="mt-6 text-lg text-center dark:text-white">Score: {score}</p>
      <button className="self-center mt-4 btn-danger" onClick={reset}>
        Reset
      </button>
    </>
  );
};
