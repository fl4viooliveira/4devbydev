import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_DEVELOPMENT
  ? // ? "http://localhost:5050/api/"
    "http://localhost:3000/api/"
  : process.env.NEXT_PUBLIC_BASE_URL;

const TOKEN = "";

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user).currentUser
//     .accessToken || "";
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
