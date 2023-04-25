import React from 'react';
import { Input } from 'antd';
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
        <span className="w-24  flex items-center">详细地址</span>
        <Input placeholder="街道/镇+村/小区/写字楼+门牌号"  style={phoneStyle} />
      </div>
    </div>

  );
}

export default BsPhone;
