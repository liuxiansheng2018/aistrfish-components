import React from 'react';
import { Button } from 'antd';

function InternalButton(props: any) {
  return <Button type="primary">{props.title}</Button>;
}

export default InternalButton;
