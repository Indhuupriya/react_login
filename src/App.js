import { Routes, Route } from "react-router-dom";
import Register from "./components/Pages/Register";
import Login from "./components/Pages/Login";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}
export default App;
