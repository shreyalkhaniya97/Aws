import React from "react";
import ReactDOM from "react-dom";
//import "./index.css";
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import App from "./App";
import BOP from './Pages/Bop';
import PS from './Pages/PS';
import TS from './Pages/TS';
const routing = (
    <div>
      <ul>
        <li>
          <NavLink exact activeClassName="active" to="/BOP">
            BOP
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/PS">
            PS
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/TS">
            TS
          </NavLink>
        </li>
      </ul>
    </div>
);

ReactDOM.render(routing, document.getElementById("root"));
export default App;