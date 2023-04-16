import React from 'react';
import { Input } from '@nutui/nutui-react';
function BsIdCards() {
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
        label="身份证号"
        placeholder="已加密,开卡人需真人实名认证"
        labelAlign="left"
        inputAlign="right"
      />
    </div>

  );
}

export default BsIdCards;
