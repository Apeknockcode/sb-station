import React from 'react';
import { Input } from '@nutui/nutui-react';
function BsPhone() {

  const handleSelectCom=(event:React.MouseEvent)=>{
    console.log("handSelectCom",event)
  }
  return (
    <div className='p-2 p-phone' onClick={(e)=>handleSelectCom(e)}>
      <Input
        className='border-solid border rounded-full px-4 py-2'
        label="联系电话"
        placeholder="请输入联系电话,并保持畅通"
        labelAlign="left"
        inputAlign="right"
      />
    </div>

  );
}

export default BsPhone;
