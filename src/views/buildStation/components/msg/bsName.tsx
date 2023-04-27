import React from 'react'
import {Input} from 'antd-mobile'
import {createStore} from 'redux'
import bsReducer from './../../../../store/bsReducer'

function BsName() {
  const bsStore = createStore(bsReducer).getState()
  // 容器样式
  const containStyle: React.CSSProperties = {}
  // input 样式
  const inputStyle: React.CSSProperties = {}
  // span 样式
  const textStyle: React.CSSProperties = {}
  return (
    <div className="p-2">
      <div
        className="flex rounded-full px-4 py-2  border-solid border"
        style={containStyle}
      >
        <span className="w-24 flex items-center" style={textStyle}>
          姓名
        </span>
        <Input placeholder="请输入姓名(已加密)" style={inputStyle} readOnly />
      </div>
    </div>
  )
}
export default BsName
