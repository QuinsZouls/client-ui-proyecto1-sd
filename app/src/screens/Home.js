import React, { useState } from 'react';
import { connectServer } from '../utils/connections';
import { getBase64 } from '../utils/parser';

const Home = () => {
  const [imageRaw, setImageRaw] = useState('');
  const _handleFileInput = async (e) => {
    let file = e.target.files[0];
    let imageData = await getBase64(file);
    setImageRaw(imageData);
  };
  //TODO implementar subida al servidor
  const _handleUploadFile = () => {
    const [socket] = connectServer();
    socket.onopen = () => {
      socket.send(
        JSON.stringify({
          option: 'uploadImage',
          image: imageRaw,
        })
      );
    };
  };
  return (
    <div className="home-screen">
      <div className="wrapper">
        <div className="row-image">
          <div className="image-upload">
            <input
              type="file"
              accept=".png, .jpg, .jpeg"
              onChange={_handleFileInput}
            />
            {imageRaw !== '' && <img src={imageRaw} alt="demo view" />}
          </div>
          <div>imagen 2</div>
        </div>
        <div className="actions">
          <button onClick={_handleUploadFile}>Subir imagen</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
