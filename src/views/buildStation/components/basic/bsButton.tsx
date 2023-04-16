import { Button } from '@nutui/nutui-react';
import React from 'react';

function BsButton() {
  const buttonStyle : React.CSSProperties={
    width:"100%",
    background:'red',
    color:'yellow',
  }
  return (
    <div>
      <Button style={buttonStyle}>免费领卡,包邮到家</Button>
    </div>
  );
}

export default BsButton;
