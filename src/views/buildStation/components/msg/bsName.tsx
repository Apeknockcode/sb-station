import React from 'react';
import { Input } from '@nutui/nutui-react';
function BsName() {

  return (
    <div className='p-2 bs-name'>
    
      <Input
        className='border-solid border rounded-full px-4 py-2'
        label="姓名"
        placeholder="请输入姓名(已加密)"
        labelAlign="left"
        inputAlign="right"
      />
    </div>

  );
}

export default BsName;
