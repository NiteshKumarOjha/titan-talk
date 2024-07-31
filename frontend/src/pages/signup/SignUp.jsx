import React, { useState } from "react";
import GenderCheckbox from "./GenderCheckbox";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="p-6 w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-25 border border-gray-100">
        <h1 className="text-3xl font-bold text-center text-blue-100 mb-4">
          Sign Up
          <span className="text-white"> TitanTalk</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label className="label p-2">
              <span className="text-base label-text text-[#eee]">
                Full Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Levi Ackerman"
              className="w-full input input-bordered h-10 text-white"
              value={inputs.fullName}
              onChange={(e) => {
                setInputs({ ...inputs, fullName: e.target.value });
              }}
            ></input>
          </div>

          <div className="mb-2">
            <label className="label p-2">
              <span className="text-base label-text text-[#eee]">Username</span>
            </label>
            <input
              type="text"
              placeholder="captainLevi"
              className="w-full input input-bordered h-10 text-white"
              value={inputs.username}
              onChange={(e) => {
                setInputs({ ...inputs, username: e.target.value });
              }}
            ></input>
          </div>

          <div className="mb-1">
            <label className="label">
              <span className="text-base label-text text-[#eee]">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10  text-white"
              value={inputs.password}
              onChange={(e) => {
                setInputs({ ...inputs, password: e.target.value });
              }}
            ></input>
          </div>

          <div className="mb-3">
            <label className="label">
              <span className="text-base label-text text-[#eee]">
                Confrim Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10  text-white"
              value={inputs.confirmPassword}
              onChange={(e) => {
                setInputs({ ...inputs, confirmPassword: e.target.value });
              }}
            ></input>
          </div>

          <GenderCheckbox
            onCheckboxChange={handleCheckboxChange}
            selectedGender={inputs.gender}
          />

          <Link
            to="/login"
            className="text-sm ml-1 text-white hover:underline hover:text-blue-200 mt-2 inline-block"
          >
            Already a member?
          </Link>

          <div>
            <button
              className="btn btn-block btn-sm mt-2 text-[1.15rem] text-blue-200"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
