import {useEffect, useState} from "react";
import {Navigate, Outlet} from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = () => {
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");

    if (token) {
      setIsAuth(true);
    }

    setLoading(false);
  }, []);

  if (loading) 
    return null; // or spinner
  
  return isAuth
    ? <Outlet/>
    : <Navigate to="/login" replace={true}/>;
};

export default ProtectedRoute;
