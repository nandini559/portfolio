import React from "react";
import {Link} from "react-router-dom";

const SignupForm = () => {
  return (<div className="min-h-screen flex items-center justify-center bg-gray-100">
    <form className="bg-white p-8 rounded-lg shadow-md w-80">
      <h2 className="text-2xl font-semibold mb-6 text-center">Sign In</h2>

      <div className="mb-4">
        <label className="block text-sm mb-1">Email</label>
        <input type="email" placeholder="Enter your email" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
      </div>

      <div className="mb-6">
        <label className="block text-sm mb-1">Password</label>
        <input type="password" placeholder="Enter your password" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
      </div>

      <button type="submit" className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold tracking-wide hover:scale-[1.02] active:scale-95 transition-all shadow-lg">
        Sign In
      </button>

      <div className="flex justify-center mt-5">
        <p>Already have an account?</p>
        <Link className="text-blue-500 cursor-pointer hover:underline ml-2 font-semibold" to="/loginform">
          Log in
        </Link>
      </div>
    </form>
  </div>);
};

export default SignupForm;
