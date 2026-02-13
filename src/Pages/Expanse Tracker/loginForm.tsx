import React from "react";
import {Link} from "react-router-dom";

const LoginForm = () => {
  return (<div className="min-h-screen flex items-center justify-center bg-gray-100">
    <form className="bg-white p-6 rounded-md shadow-md w-80">
      <h2 className="text-xl font-semibold text-center mb-4">Login</h2>

      <input type="email" placeholder="Email" className="w-full mb-3 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"/>

      <input type="password" placeholder="Password" className="w-full mb-4 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"/>

      <button type="submit" className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold tracking-wide hover:scale-[1.02] active:scale-95 transition-all shadow-lg">
        Login
      </button>

      <div className="flex justify-center mt-5">
        <p>Don't have an account?</p>
        <Link className="text-blue-500 cursor-pointer hover:underline ml-2 font-semibold" to="/signupform">
          SignUp
        </Link>
      </div>
    </form>
  </div>);
};

export default LoginForm;
