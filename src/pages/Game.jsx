import { Grid } from "../components/Grid";
import { useDb } from "../hooks/useDb";
import { useAuth } from "../hooks/useAuth";
import { useGameContext } from "../hooks/useGameContext";
import { useEffect, useState } from "react";

export const Game = () => {
  const { score, reset, gameIsComplete } = useGameContext();
  const { writeDoc, readDoc } = useDb();
  const [bestScore, setBestScore] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    const getBestScores = async () => {
      if (user) {
        readDoc("bestScores", user.uid).then((data) => setBestScore(data.score));
      }
    };
    getBestScores();
  }, [user]);

  if (gameIsComplete() && score < bestScore) {
    writeDoc("bestScores", user.uid, { score: score });
    setBestScore(score);
  }

  return (
    <>
      <div className="mt-6 text-center dark:text-white">
        <h1 className="mb-2 text-3xl font-bold">Catch</h1>
        <h2 className="mb-2 italic">A Cat-Matching Game</h2>
        {gameIsComplete() ? (
          <h3 className="mt-2 text-2xl text-green-600 dark:text-green-500 animate-fade_in">You win!!!</h3>
        ) : null}
      </div>
      <div className="flex justify-center mt-12">
        <Grid />
      </div>
      <p className="mt-6 text-lg text-center dark:text-white">
        Best Score (Lower is better): {bestScore ?? "None yet!"}
      </p>
      <p className="mt-2 text-lg text-center dark:text-white">
        Score: {score}
      </p>
      <button className="self-center mt-4 btn-danger" onClick={reset}>
        Reset
      </button>
    </>
  );
};
