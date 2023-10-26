import { Grid } from "../components/Grid";

export const Game = () => {
  return (
    <>
      <div className="mt-6 text-center dark:text-white">
        <h1 className="mb-2 text-3xl font-bold">Catch</h1>
        <h2 className="italic">A Cat-Matching Game</h2>
      </div>
      <div className="flex justify-center mt-12">
        <Grid />
      </div>
    </>
  );
};
