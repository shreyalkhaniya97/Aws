import React from 'react';
import Folder from '../../images/folder-plus.svg';
import Upload from '../../images/upload.svg';

function RightMenu() {
  return (
    <div className="menu-list">
      <div className="menu-list-item">
        <a href="a">
          <div className="align">
            <img src={Upload} className="upload-file-svg" />
          </div>
          Upload New Files
        </a>
      </div>

      <div className="menu-list-item">
        <a href="a">
          <div className="align">
            <img src={Folder} className="create-folder-svg" />
          </div>
          Create New Folder
        </a>
      </div>
    </div>
  );
}

export default RightMenu;
