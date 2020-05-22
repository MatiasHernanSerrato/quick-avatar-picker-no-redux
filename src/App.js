import React, { useState } from 'react';

import MainAvatar from './components/MainAvatar';
import AvatarPicker from './components/AvatarPicker';
import './App.css';

function App() {
  const [showModal, toggleModal] = useState(false);
  const [avatarImage, setAvatarImage] = useState();
  const handleModalState = () => {
    toggleModal(!showModal);
  };
  const handleChangeAvatar = (props) => {
    setAvatarImage(props);
    toggleModal(false);
  };
  return (
    <div className='App' id='safeArea'>
      <header className='App-header'>
        <div className='container'>
          <MainAvatar chosenAvatar={avatarImage} showModal={handleModalState} />
          {showModal && (
            <AvatarPicker
              showModal={handleModalState}
              handlerClick={handleChangeAvatar}
            />
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
