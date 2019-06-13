import React from 'react';
import PropTypes from 'prop-types';
import FilterIcon from '../../Pages/Filter/FilterIcons';
import ItemList from '../../Pages/ItemList';

import root from '../../MockData/root.json';
import aws from '../../MockData/1.json';
import MockData from '../../MockData/11.json';
import { async } from 'q';

class Header extends React.Component {
  constructor(props) {
    super();

    this.state = {
      isGridView: false,
      awsData:[],
      path: null
    };
  }
  componentDidMount() {

    const queryString = this.props.location.search;
    console.log('queryString', queryString);
    const splittedParams = queryString.slice(1).split('=');
    this.setState({
      path: queryString
    });

    if (splittedParams[0] === 'directory') {
      const directoryIds  = splittedParams[1].split(',');
      const lastDirectory = directoryIds[directoryIds.length - 1];
      
      if(!lastDirectory){
      
        const jsonData =  this.getJsonData('root');
      
        console.log('===========FROM MOUNT===== if',jsonData);
      } else {
        const jsonData =  this.getJsonData(lastDirectory);
        console.log('===========FROM MOUNT===== else',jsonData);

      }
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.location.search, 'nextProps');
    
  }

 
 getJsonData = async(filepath) =>{
  const data  = await import('../../MockData/'+filepath+'.json');
  console.log(data,'--data--');
  this.setState({
    awsData : data.default
  });
 }
 
  gridView = () => {
    this.setState({
      isGridView: true
    });
  };

  listView = () => {
    this.setState({
      isGridView: false
    });
  };

  render() {
    const { className, children } = this.props;
    const { isGridView } = this.state;
    return (
         <div>
        <h3 className="heading">Home</h3>
        <p>
          When you star items,they'll show up here for easy access.
          <a href="#">Learn more</a>
        </p>

        <FilterIcon
          isGridView={isGridView}
          gridView={this.gridView}
          listView={this.listView}
          {...this.props}
        />

        <div
          className={`upload-list ${aws ? 'isGridView' : 'isListView'}`}
        >
          {this.state.awsData.map(el => (
            <ItemList
              key={el.id}
              name={el.name}
              source={el.source}
              creationDate={el.creationDate}
              id={el.id}
              path={this.state.path}
            />
          ))}
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
