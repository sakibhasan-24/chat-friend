import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogIn from "../../hooks/useLogIn";

export default function Login() {
  const { logIn, loading } = useLogIn();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  // console.log(userName, password);
  const handleLogin = async (e) => {
    e.preventDefault();
    await logIn(userName, password);
  };
  return (
    <div className="max-w-3xl mx-auto flex flex-col items-center justify-center">
      <h1 className="text-6xl  text-slate-100 font-bold">
        Let's Talk With You
      </h1>
      <div className="w-3/4 mx-auto rounded-lg shadow-2xl shadow-slate-700 p-6 backdrop-blur-xl bg-white/30 my-6">
        <h1 className="text-xl sm:text-4xl text-slate-900 text-center font-bold">
          Log In
        </h1>
        <form onSubmit={handleLogin}>
          <div className="flex flex-col mt-4">
            <label
              className="text-sm sm:text-base text-slate-900 font-bold mb-2"
              htmlFor="userName"
            >
              user name
            </label>
            <input
              className="p-2 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-slate-500"
              type="text"
              id="userName"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="flex flex-col mt-4">
            <label
              className="text-sm sm:text-base text-slate-900 font-bold mb-2"
              htmlFor="password"
            >
              password
            </label>
            <input
              className="p-2 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-slate-500"
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <input
            type="submit"
            value="Login"
            className="w-full bg-slate-600 text-white p-3 rounded-lg cursor-pointer hover:bg-slate-700 transition-all duration-200 mt-6"
          />
        </form>
        <p>
          Don't have an account? <Link to="/signup">Signup</Link>
        </p>
      </div>
    </div>
  );
}
