import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";

export const API = axios.create({
  baseURL: "http://localhost:3000"
});

// 🔥 SEND TOKEN FROM COOKIE IN HEADER
API.interceptors.request.use((config) => {
  const token = Cookies.get("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// 🔥 AUTO LOGOUT ON 401
API.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      Cookies.remove("token");
      Cookies.remove("user");
    }
    return Promise.reject(error);
  }
);

// REGISTER
export const registerUser = async (data: {
  name: string;
  email: string;
  password: string;
}) => {
  const res = await API.post("/auth/register", data);
  return res.data;
};

// LOGIN
export const loginUser = async (data: {
  email: string;
  password: string;
}) => {
  const res = await API.post("/auth/login", data);
  return res.data;
};

// LOGOUT
export const logoutUser = async () => {
  const res = await API.post("/auth/logout");
  return res.data;
};

// GET PROFILE
export const getProfile = async () => {
  const res = await API.get("/auth/me");
  return res.data;
};
