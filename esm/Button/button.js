import React from 'react';
import { Button } from 'antd';

function InternalButton(props) {
  return /*#__PURE__*/ React.createElement(
    Button,
    {
      type: 'primary',
    },
    props.title,
  );
}

export default InternalButton;
