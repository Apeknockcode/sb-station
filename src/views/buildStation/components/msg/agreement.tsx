import React from 'react'
import {Checkbox} from 'antd-mobile'
function Agreement() {
  return (
    <div className="px-2">
      <div className="agreement text-tipSize">
        <Checkbox className="mr-1" style={{'--icon-size': '1rem'}}></Checkbox>
        <span className="text-tipSize">
          我已阅读并同意
          <span>《入网协议、个人信息授权及保护声明》</span>
          <span>《入网协议》</span>
          <span>《个人信息授权及保护声明》</span>
          <span>《实名制信息安全责任告知书》</span>
          <span>《个人信息授权及保护声明》</span>
          <span>《中国电信入网协议》</span>
          <span>《中广电入网协议》</span>
          <span> 《合规使用手机卡告知书》</span>
          <span>《风险告知书》</span>
          <span>《中国移动通信客户服务协议》</span>
        </span>
      </div>
      <div className="w-full mt-1 text-tipSize">
        *请填写真实身份信息,/联系电话/收货地址错误无法发货*
      </div>
    </div>
  )
}

export default Agreement
