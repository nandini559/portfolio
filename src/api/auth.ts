import axios from "axios";
import {Navigate} from "react-router-dom";

const API = axios.create({
  baseURL: "http://localhost:3000" // your backend URL
});

// API.interceptors.response.use(
//   (response) => response,
//   (error: any) => {
//     if (error?.response?.status === 401) {
//       localStorage.removeItem("accessToken");
//       window.location.href = "/login";
//     }
//     return Promise.reject(error);
//   }
// );

// REGISTER API
export const registerUser = async (data : {
  name: string;
  email: string;
  password: string;
}) => {
  const response = await API.post("/auth/register", data);
  return response.data;
};

// LOGIN API
export const loginUser = async (data : {
  email: string;
  password: string
}) => {
  const response = await API.post("/auth/login", data);
  return response.data;
};

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export const logoutUser = async () => {
  const token = localStorage.getItem("accessToken");

  return await API.post("/auth/logout", {}, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

// const handleLogout = () => {
//   localStorage.removeItem("accessToken");
//   Navigate("/login");
// };
