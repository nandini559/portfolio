import {useNavigate} from "react-router-dom";
import {logoutUser} from "../../api/auth";

function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutUser(); // call backend logout
    } catch (err) {
      console.log("Logout API failed");
    } finally {
      localStorage.removeItem("accessToken"); // always remove token
      navigate("/login");
    }
  };

  return (<button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">
    Logout
  </button>);
}

export default LogoutButton;
