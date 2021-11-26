import React from 'react';

const SortingBar = (props) => {
  let color = '#efefef';

  switch (props.colorCode) {
    case 1:
      color = 'purple';
      break;
    case 2:
      color = 'yellow';
      break;
    case 3:
      color = 'orange';
      break;
    default:
      break;
  }

  return <div style={{...props.style, backgroundColor: color,borderRadius:'1rem'}}></div>;
};

export default SortingBar;
