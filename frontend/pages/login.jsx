import { useState } from "react";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <div>
      <Navbar />
      <div>
        <h1>SIGN IN</h1>
        <form>
          <input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleClick} disabled={isFetching}>
            LOGIN
          </button>
          {error && <label>Something went wrong...</label>}
          <Link href={"/login"}>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link href={"/login"}>CREATE A NEW ACCOUNT</Link>
        </form>
      </div>
      <Footer />
    </div>
  );
}
