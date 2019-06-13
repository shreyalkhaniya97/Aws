import React from 'react';
import './App.scss';
import RightMenu from './Pages/RightMenu';
import Content from './Pages/Content';
import LeftSection from './Pages/LeftSection';
import {
  BrowserRouter as Router
} from "react-router-dom";

function App(){
  return (
    <Router>
      <div className="main">
      <LeftSection />
      <div className="content">
        <Content />
      </div>
      <div className="rightsection">
        <RightMenu />
      </div>
    </div>
    </Router>
  );
}
export default App;