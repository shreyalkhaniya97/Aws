import React from 'react';
import BOP from '../../Pages/Bop';
import PS from '../../Pages/PS';
import TS from '../../Pages/TS';
import {
  Route,
  Switch
} from "react-router-dom";
import Home from '../../Components/Home';

function Content(){
  
  return(
    <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route  exact path="/bop" component={BOP} />
          <Route exact path="/ps" component={PS} />
          <Route exact path="/ts" component={TS} />
        </Switch>
    </div>
  );
}
export default Content;
