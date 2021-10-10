import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react'
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [Mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggleMode = ()=>{
    if (Mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "rgb(36 39 49)";
      showAlert("Dark mode enabled!", "success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "White";
      showAlert("Light mode enabled!", "success");
    }
  }

  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type : type
    });
    setTimeout(() => { setAlert(null) }, 3000);
  }

  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading = "Enter your text below " mode={Mode}/>
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
