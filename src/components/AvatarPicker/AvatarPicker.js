import React, { useState, useEffect } from 'react';
import AvatarViewer from '../AvatarViewer';
import { FETCH_STATUS } from '../../constants';
import { getAvatars } from './services/mockAvatars';
// write throw new Error() to catch error;
const AvatarSelector = (props) => {
  const [content, setContent] = useState(null);
  const [status, setStatus] = useState(null);
  useEffect(() => {
    const fetchAvatar = async () => {
      setStatus(FETCH_STATUS.LOADING);
      try {
        const avatars = await getAvatars();
        setContent(avatars);
        setStatus(FETCH_STATUS.SUCCESS);
      } catch (err) {
        console.error(err);
        setStatus(FETCH_STATUS.ERROR);
      }
    };
    fetchAvatar();
  }, []);

  if (status === FETCH_STATUS.LOADING) {
    return (
      <div className='popupContainer'>
        <div className='loader' />
      </div>
    );
  }
  if (status === FETCH_STATUS.ERROR) {
    return <div className='popupContainer'>something went wrong</div>;
  }
  const renderAvatars = () => {
    return (
      <ul>
        {content.map((value, index) => (
          <AvatarViewer
            key={`${value.id}${index}`}
            handlerClick={props.handlerClick}
            src={value.src}
            label={value.label}
          />
        ))}
      </ul>
    );
  };

  if (status === FETCH_STATUS.SUCCESS) {
    return (
      <div className='popupContainer'>
        <h1 className='popup-title'>Choose your Avatar</h1>
        {renderAvatars()}
      </div>
    );
  }
  return null;
};

export default AvatarSelector;
