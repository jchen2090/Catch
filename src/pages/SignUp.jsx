import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const SignUp = () => {
  const [state, setState] = useState({ email: "", password: "", confirmPassword: "", error: null });
  const isIncompleteForm = state.email === "" || state.password === "" || state.confirmPassword === "";
  const { guestLogin, signUp } = useAuth();
  const navigate = useNavigate();

  const handleGuestLogin = async () => {
    try {
      await guestLogin();
      navigate("/");
    } catch (e) {
      console.error("Error with guest login");
    }
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    if (state.password !== state.confirmPassword) {
      setState({ ...state, error: "Passwords are not the same" });
    } else if (isIncompleteForm) {
      setState({ ...state, error: "Form is incomplete" });
    } else {
      try {
        await signUp(state.email, state.password);
        navigate("/");
      } catch (e) {
        setState({ ...state, error: "Trouble signing up, try again later" });
      }
    }
  };

  const handleFormChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  return (
    <div className="flex flex-col items-center justify-center flex-1">
      {state.error ? <h2 className="alert w-96">{state.error}</h2> : null}
      <form action="" className="flex flex-col h-auto gap-8 p-6 shadow-lg w-96 rounded-2xl dark:bg-neutral-800/10">
        <h2 className="mt-8 text-2xl font-medium text-center dark:text-white">Sign Up</h2>

        <div className="flex flex-col">
          <label className="dark:text-white">Email</label>
          <input type="email" name="email" className="form-input" onChange={handleFormChange} required />
        </div>

        <div className="flex flex-col">
          <label className="dark:text-white">Password</label>
          <input type="password" name="password" className="form-input" onChange={handleFormChange} required />
        </div>

        <div className="flex flex-col">
          <label className="dark:text-white">Confirm Password</label>
          <input type="password" name="confirmPassword" className="form-input" onChange={handleFormChange} required />
        </div>

        <button type="submit" className="btn-primary" onClick={handleSignUp}>
          Sign Up
        </button>

        <div className="text-center dark:text-white">
          Already have an account?{" "}
          <Link to="/Login" className="hover:underline">
            Login
          </Link>
          <p className="mt-1 text-xs italic hover:underline hover:cursor-pointer" onClick={handleGuestLogin}>
            Or continue as guest
          </p>
        </div>
      </form>
    </div>
  );
};
