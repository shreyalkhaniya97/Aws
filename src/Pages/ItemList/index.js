import React from 'react';
import folderIcon from '../../images/folder.svg';
import {
  Route,
  Link,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newPath : ''
    };
  }
  componentDidMount(){
    const splittedParams = this.props.path.slice(1).split('=');
    
    if (splittedParams[0] === 'directory' && !splittedParams[1]){
      console.log(this.props.path,'--path--');
      this.setState({ newPath : this.props.path + this.props.id }, () => {
        console.log(this.state.newPath);
      });
    } else {
      this.setState({ newPath : this.props.path + "," + this.props.id});
    }
  }
componentWillReceiveProps(nextProps){
  const splittedParams = this.props.path.slice(1).split('=');
  if (splittedParams[0] === 'directory' && !splittedParams[1]){
    this.setState({ newPath : this.props.path + this.props.id });
  } else{
    this.setState({ newPath : nextProps.path + "," + nextProps.id });
  }
}

render(){
  return (
    <div className="upload-list-item">
      <div>
        <object data={folderIcon} type="image/svg+xml" />
      </div>
      <div className="items">
      <Link to = { this.state.newPath }   >
        <div className="items-title">{this.props.name}</div>
        <div>{this.props.source}</div>
        <div>{this.props.creationDate}</div>
        </Link>
      </div>
    </div>
  );
}
}
export default ItemList;
