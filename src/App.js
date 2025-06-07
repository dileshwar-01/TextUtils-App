import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import Alert from "./components/Alert";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0D1117 ";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
    <Router>
      <Navbar title="Textutils" mode={mode} about="About" togglemode={toggleMode} />
      <Alert alert={alert} />
      {/* <Textform mode={mode} heading="Try Textutils - Word Counter, Character Counter" showalert={showAlert} />
      <About mode={mode} /> */}
      <div className="container my-3">
      <Routes>
        <Route exact path="/about" element={<About   mode={mode}/>} />
        <Route exact path="/" element={<Textform mode={mode} heading="Try Textutils - Word Counter, Character Counter" showalert={showAlert} />} />
      </Routes>

      </div>
      </Router>

    </>
  );
}

export default App;
