import {Slider} from 'antd';
import React from 'react';

const InputSizeSlider = ({onInputSizeChanged, isVisualizing}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{color: '#1233c7', fontWeight: 'bold'}}>Array Size</div>
      <Slider
        disabled={isVisualizing}
        defaultValue={30}
        min={30}
        max={100}
        step={2}
        style={{width: '12rem'}}
        handleStyle={{borderColor: '#1233c7'}}
        trackStyle={{background: '#1233c7'}}
        onChange={onInputSizeChanged}
      />
    </div>
  );
};

export default InputSizeSlider;
