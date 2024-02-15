import React from "react";

export default function SignUp() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col items-center justify-center">
      <h1 className="text-6xl  text-slate-100 font-bold">
        Let's Talk With You
      </h1>
      <div className="w-3/4 mx-auto rounded-lg shadow-2xl shadow-slate-700 p-6 backdrop-blur-xl bg-white/30 my-6">
        <h1 className="text-xl sm:text-4xl text-slate-900 text-center font-bold">
          Sign Up
        </h1>
        <form>
          <div className="flex flex-col mt-8">
            <label
              className="text-sm sm:text-base text-slate-900 font-bold mb-2"
              htmlFor="name"
            >
              name
            </label>
            <input
              className="p-2 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-slate-500"
              type="text"
              id="name"
            />
          </div>
          <div className="flex flex-col mt-8">
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
            />
          </div>
          <div className="flex flex-col mt-8">
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
            />
          </div>
          <div className="flex flex-col mt-8">
            <label
              className="text-sm sm:text-base text-slate-900 font-bold mb-2"
              htmlFor="confirmPassword"
            >
              confirm password
            </label>
            <input
              className="p-2 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-slate-500"
              type="password"
              id="password"
            />
          </div>
          <div className="flex flex-col mt-8">
            <h1>Gender</h1>
            <div className="flex  items-center">
              <label className="label gap-2 cursor-pointer my-2">
                <span className="mx-2">Male</span>
                <input type="checkbox" name="male" id="male" />
              </label>
              <label className="label gap-2 cursor-pointer my-2">
                <span className="mx-2">FeMale</span>
                <input type="checkbox" name="feMale" id="feMale" />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="SignUp"
            className="w-full bg-slate-600 text-white p-3 rounded-lg cursor-pointer hover:bg-slate-700 transition-all duration-200 mt-2"
          />
        </form>
        <p>
          Already have an account? <a href="#">Login</a>
        </p>
      </div>
    </div>
  );
}
