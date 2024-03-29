import React, { useState } from "react";
import { Link } from "react-router-dom";
import useSignUp from "../../hooks/useSignUp";

export default function SignUp() {
  const { isPending, signUp } = useSignUp();
  const [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const handleGenderSelect = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      gender: checked ? name : "",
    }));
  };
  const handleFormData = async (e) => {
    // e.prventDefault();
    e.preventDefault();
    // save in db
    await signUp(formData);
    // save in localstorage
    localStorage.setItem("user-information", JSON.stringify(formData));
  };
  console.log(formData);
  return (
    <div className="max-w-3xl mx-auto flex flex-col items-center justify-center">
      <h1 className="text-6xl  text-slate-100 font-bold">
        Let's Talk With You
      </h1>
      <div className="w-3/4 mx-auto rounded-lg shadow-2xl shadow-slate-700 p-6 backdrop-blur-xl bg-white/30 my-6">
        <h1 className="text-xl sm:text-4xl text-slate-900 text-center font-bold">
          Sign Up
        </h1>
        <form onSubmit={handleFormData}>
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
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
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
              name="userName"
              value={formData.userName}
              onChange={(e) =>
                setFormData({ ...formData, userName: e.target.value })
              }
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
              name="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
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
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  confirmPassword: e.target.value,
                })
              }
            />
          </div>
          <div className="flex flex-col mt-8">
            <h1>Gender</h1>
            <div className="flex  items-center">
              <label className="label gap-2 cursor-pointer my-2">
                <span className="mx-2">Male</span>
                <input
                  type="checkbox"
                  name="male"
                  id="male"
                  checked={formData.gender === "male"}
                  onChange={handleGenderSelect}
                />
              </label>
              <label className="label gap-2 cursor-pointer my-2">
                <span className="mx-2">Female</span>
                <input
                  type="checkbox"
                  name="female"
                  id="female"
                  checked={formData.gender === "female"}
                  onChange={handleGenderSelect}
                />
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
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}
