import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

export const Login = () => {
  const [state, setState] = useState({ email: "", password: "", error: null });
  const { login, handleGuestLogin } = useAuth();
  const navigate = useNavigate();

  const handleFormChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await login(state.email, state.password);
      navigate("/");
    } catch (e) {
      //TODO: Create error alert
      setState({ ...state, error: "Email or Password incorrect" });
    }
  };

  return (
    <div className="flex items-center justify-center flex-1">
      <form action="" className="flex flex-col h-auto gap-8 p-6 shadow-lg w-96 rounded-2xl dark:bg-neutral-800/10">
        <h2 className="mt-8 text-2xl font-medium text-center dark:text-white">Authenticate</h2>

        <div className="flex flex-col">
          <label className="dark:text-white">Email</label>
          <input type="text" name="email" className="form-input" onChange={handleFormChange} required />
        </div>

        <div className="flex flex-col">
          <label className="dark:text-white">Password</label>
          <input type="password" name="password" className="form-input" onChange={handleFormChange} required />
        </div>

        <button type="submit" className="btn-primary" onClick={handleLogin}>
          Login
        </button>

        <div className="text-center dark:text-white">
          First time?{" "}
          <Link to="/signup" className="hover:underline">
            Sign up
          </Link>
          <p className="mt-1 text-xs italic hover:underline hover:cursor-pointer" onClick={handleGuestLogin}>
            Or continue as guest
          </p>
        </div>
      </form>
    </div>
  );
};
