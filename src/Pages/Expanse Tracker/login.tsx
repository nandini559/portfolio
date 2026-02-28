import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {loginUser} from "../../api/auth";
import Cookies from "js-cookie";
function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({email: "", password: ""});

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const res = await loginUser(form);
      // console.log("res", res.access_token);
      // Cookies.set("token", res.access_token);
      // Cookies.set("user", JSON.stringify(res.user), {expires: 1});

      Cookies.set("token", res.access_token, {
        expires: 1,
        path: "/"
      });

      setTimeout(() => {
        navigate("/expense-tracker");
      });
    } catch (error) {
      setLoading(false);
      alert("Login failed 😭");
    }
  };

  return (<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600">
    <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Welcome Back 👋
      </h2>

      <div className="flex flex-col gap-4">
        <input name="email" type="email" placeholder="Enter your email" onChange={handleChange} className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"/>

        <input name="password" type="password" placeholder="Enter your password" onChange={handleChange} className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"/>

        <button onClick={handleSubmit} disabled={loading} className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300 shadow-md disabled:opacity-50">
          {
            loading
              ? "Logging in..."
              : "Login"
          }
        </button>
      </div>

      <p className="text-sm text-center text-gray-500 mt-6">
        Don’t have an account?{" "}
        <span onClick={() => navigate("/register")} className="text-indigo-600 cursor-pointer hover:underline font-medium">
          Register
        </span>
      </p>
    </div>
  </div>);
}

export default Login;
