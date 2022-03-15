import React from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';

function InternalButton(props) {
  return /*#__PURE__*/ React.createElement(
    Button,
    {
      type: 'primary',
    },
    props.title,
    '89',
  );
}

export default InternalButton;
