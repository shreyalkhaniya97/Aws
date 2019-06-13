import React from 'react';
import avatarIcon from '../../images/images.jpeg';

function Avatar() {
  return (
    <div className="avatar">
      <img className="avatar-image" src={avatarIcon} />
    </div>
  );
}

export default Avatar;
