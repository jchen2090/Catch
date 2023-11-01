import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="flex items-center justify-center flex-1">
      <form action="" className="flex flex-col shadow-lg h-auto w-96 rounded-2xl p-6 dark:shadow-white gap-8">
        <h2 className="mt-8 text-2xl font-medium text-center dark:text-white">Authenticate</h2>

        <div className="flex flex-col">
          <label className="dark:text-white">Username</label>
          <input type="text" className="form-input" required />
        </div>

        <div className="flex flex-col">
          <label className="dark:text-white">Password</label>
          <input type="password" className="form-input" required />
        </div>

        <button type="submit" className="btn-primary">
          Login
        </button>

        <p className="dark:text-white text-center">
          First time? <Link to="/signup" className="underline">Sign up</Link>
        </p>
      </form>
    </div>
  );
};
