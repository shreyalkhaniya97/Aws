import React from 'react';
import BOP from '../../Pages/Bop';
import PS from '../../Pages/PS';
import TS from '../../Pages/TS';
import {
  Route,
  Link,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
function Menu() {
  return (
    <div className="menu-list">
      <ul>
        <li>
          <Link className="menu-list-item" to="/bop">
            BOP
          </Link>
        </li>
        <li>
          <Link className="menu-list-item" to="/ps">
            PS
          </Link>
        </li>
        <li>
          <Link className="menu-list-item" to="/ts">
            TS
          </Link>
        </li>
      </ul>
      
    </div>
  );
}

export default Menu;
