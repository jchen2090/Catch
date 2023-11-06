import { useNavigate } from "react-router-dom";

export const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center gap-2 mt-32">
      <h1 className="text-4xl font-medium dark:text-white">Error 404 :(</h1>
      <h2 className="text-xl dark:text-white">Page not found</h2>
      <button className="mt-2 btn-primary" onClick={() => navigate('/')}>Go Back</button>
    </div>
  );
};
