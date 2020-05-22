import React from 'react';
import AvatarViewer from '../AvatarViewer';
// import { imgPath } from '../../constants';

const MainAvatar = (props) => {
  return (
    <div onClick={props.showModal}>
      <AvatarViewer src={props.chosenAvatar} />
    </div>
  );
};

MainAvatar.defaultProps = {
  showModal: () => null,
};
export default MainAvatar;
