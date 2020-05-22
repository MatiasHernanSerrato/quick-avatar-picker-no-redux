import React from 'react';
import { imgPath } from '../../constants';

const AvatarViewer = (props) => {
  return (
    <li className='overlay'>
      <img
        onClick={() => {
          return props.handlerClick(props.src);
        }}
        src={`${imgPath}/${props.src}`}
        className='avatar'
        alt={props.label}
      />
    </li>
  );
};

AvatarViewer.defaultProps = {
  label: 'No Alt',
  src: 'avatar1.png',
  handlerClick: () => null,
};

export default AvatarViewer;
