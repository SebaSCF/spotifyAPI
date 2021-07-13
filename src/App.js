import "./App.css";
import Login from "./Components/Login.js";
import Dashboard from "./Components/Dashboard.js";

const code = new URLSearchParams(window.location.search).get("code");

function App() {
  return (
    <div className="App">{code ? <Dashboard code={code} /> : <Login />}</div>
  );
}

export default App;

/* */
