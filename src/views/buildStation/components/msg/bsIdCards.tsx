import React from 'react';
import {Input} from 'antd-mobile'
import style from "./msgStyle.module.scss"
function BsPhone() {
  const phoneStyle: React.CSSProperties = {
    width: "100%",
    border: "none",
    textAlign: 'end',
    padding:'0px',
  }
  return (
    <div className='p-2'>
      <div className="flex rounded-full px-4 py-2  border-solid border">
        <span className="w-24   flex items-center">身份证号</span>
        <Input placeholder="已加密,开卡人需真人实名认证" readOnly  style={phoneStyle} />
      </div>
    </div>

  );
}

export default BsPhone;
