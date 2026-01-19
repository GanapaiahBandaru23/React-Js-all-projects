import React from 'react';
import './index.css';

const AppItem = ({ appData }) => {
  const { imageUrl, appName } = appData;

  return (
    <li className="app-item">
      <img src={imageUrl} alt={appName} className="app-item-image" />
      <p className="app-item-name">{appName}</p>
    </li>
  );
};

export default AppItem;
