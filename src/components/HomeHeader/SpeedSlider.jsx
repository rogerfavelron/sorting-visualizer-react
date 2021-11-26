import {Slider} from 'antd';
import React from 'react';

const SpeedSlider = ({onSpeedChange, isVisualizing}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{color: '#1233c7', fontWeight: 'bold'}}>
        Visualization Speed
      </div>
      <Slider
        disabled={isVisualizing}
        defaultValue={30}
        style={{width: 200}}
        handleStyle={{borderColor: '#c1c27a'}}
        trackStyle={{background: '#1233c7'}}
        onChange={onSpeedChange}
      />
    </div>
  );
};

export default SpeedSlider;
