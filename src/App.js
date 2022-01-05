import "./App.css";
import Home from "./pages/Home.js";
import { Route, Routes } from "react-router-dom";

const styles= "kekleon"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
