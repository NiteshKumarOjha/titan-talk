import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsernamae] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className=" p-6 w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-25 border border-gray-100">
        <h1 className="text-3xl font-bold text-center text-blue-100 mb-4">
          Login
          <span className="text-white"> TitanTalk</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label className="label p-2">
              <span className="text-base label-text text-[#eee]">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered h-10"
              value={username}
              onChange={(e) => {
                setUsernamae(e.target.value);
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
              className="w-full input input-bordered h-10"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
          </div>
          <Link
            to="/signup"
            className="text-sm ml-1 text-blue-50 hover:underline hover:text-blue-200 mt-2 inline-block"
          >
            Not a member?
          </Link>

          <div>
            <button
              className="btn btn-block btn-sm mt-2 text-[1.15rem] text-blue-200"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
