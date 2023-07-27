// HeartIcon.js

import React from 'react';
import { SvgXml } from 'react-native-svg';

const HeartIcon = ({ filled }) => {
  const heartIconSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none"/>
      <path d="M12 20.94l-1.45-1.32C5.05 15.34 2 12.19 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.59 3.81 15.26 3 17 3 20.08 3 22 5.42 22 8.5c0 3.69-3.05 6.84-8.55 11.12L12 20.94z" fill="${filled ? 'red' : 'gray'}"/>
    </svg>
  `;

  return <SvgXml xml={heartIconSvg} />;
};

export default HeartIcon;
