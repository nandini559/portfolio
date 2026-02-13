import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {registerUser} from "../../api/auth";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({name: "", email: "", password: ""});

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    try {
      await registerUser(form);
      navigate("/expanse-tracker");
    } catch (error) {
      alert("Registration failed 😭");
    }
  };

  return (<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-500 to-purple-600">
    <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Create Account ✨
      </h2>

      <div className="flex flex-col gap-4">
        <input name="name" type="text" placeholder="Enter your name" onChange={handleChange} className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition"/>

        <input name="email" type="email" placeholder="Enter your email" onChange={handleChange} className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition"/>

        <input name="password" type="password" placeholder="Create a password" onChange={handleChange} className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition"/>

        <button onClick={handleSubmit} className="w-full bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700 transition duration-300 shadow-md">
          Register
        </button>
      </div>

      <p className="text-sm text-center text-gray-500 mt-6">
        Already have an account?{" "}
        <span onClick={() => navigate("/login")} className="text-pink-600 cursor-pointer hover:underline font-medium">
          Login
        </span>
      </p>
    </div>
  </div>);
}

export default Register;
