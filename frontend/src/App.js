import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import {Navbar} from "./components/Navbar";
import Home from "./components/Home";
import Events from "./components/Events";
import Workshops from "./components/Workshops";
import Register from "./components/Register";
import Download from "./components/Download";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Home></Home> */}
        <Routes>
          <Route
          path='/'
          element= {<Home></Home>}
          ></Route>

          <Route
          path='/events'
          element= {<Events></Events>}
          ></Route>

          <Route
          path='/workshops'
          element= {<Workshops></Workshops>}
          ></Route>

          <Route
          path='/register'
          element= {<Register></Register>}
          ></Route>

          <Route
          path='/download'
          element= {<Download></Download>}
          ></Route>


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
