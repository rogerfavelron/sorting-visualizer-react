import React from 'react';
import {Button} from 'antd';
import {RedoOutlined} from '@ant-design/icons';

const RandomizeButton = ({onClick}) => {
  return (
    <div style={{marginTop: 8}}>
      <Button
        type="primary"
        style={{
          width: 130,
          background: '#1233c7',
          borderColor: '#1233c7',
          fontWeight: 'bold',
          borderRadius:'1rem'
        }}
        icon={<RedoOutlined />}
        onClick={onClick}
      >
        Randomize
      </Button>
    </div>
  );
};

export default RandomizeButton;
