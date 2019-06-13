import React from 'react';
import List from '../../images/list.svg';
import Grid from '../../images/grid.svg';
import Icons from './FilterIcons';
function Filter() {
  return (
    <div className="main-title">
      <h4 className="title">List</h4>
      <div className="svg-icon">
        <div className="svg-icon">
          <div className="grid-icon">
            <img src={Grid} className="grid-icon-svg" />
          </div>
          <div className="list-icon">
            <img src={List} className="list-icon-svg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
