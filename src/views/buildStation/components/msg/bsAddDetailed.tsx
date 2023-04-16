import React from 'react';
import { Input } from '@nutui/nutui-react';
function BsPhone() {
  const phoneStyle: React.CSSProperties = {
    width: "100%",
    border: "none",
    textAlign: 'end',
    padding:'0px',
  }
  return (
    <div className='p-2'>
      <Input
        className='border-solid border rounded-full px-4 py-2'
        label="详细地址"
        placeholder="街道/镇+村/小区/写字楼+门牌号"
        labelAlign="left"
        inputAlign="right"
      />
    </div>

  );
}

export default BsPhone;
