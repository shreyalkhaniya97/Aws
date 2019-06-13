import React from 'react';
import List from '../../../images/list.svg';
import Grid from '../../../images/grid.svg';

function Icons(props) {
  return (
    <div className="main-title">
      <h4 className="title">{props.isGridView ? 'Grid' : 'List'}</h4>

      <div className="svg-icon">
        {props.isGridView ? (
          <img src={List} className="icon" onClick={props.listView} />
        ) : (
          <img src={Grid} className="icon" onClick={props.gridView} />
        )}
      </div>
    </div>
  );
}

export default Icons;
