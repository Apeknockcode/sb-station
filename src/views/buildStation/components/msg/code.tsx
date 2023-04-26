//发送验证码输入框 https://kashichang.cn/nc/saas/collect/placeOrder___.html?eid=48ab578507284e8e9f1438ec702e7dbb&pid=63#/
import React, {useState} from 'react'
import {Input, Button} from 'antd-mobile'

function FormCode() {
  const [code, setCode] = useState('')
  const [countText, setCountText] = useState('发送验证码')
  return (
    <div className="p-2">
      <div className="flex rounded-full px-4 py-2  border-solid border relative ">
        <span className="w-24 flex items-center">验证码:</span>
        <Input
          placeholder="请输入验证码"
          maxLength={6}
          value={code}
          style={{
            width: '50%',
            '--text-align': 'right',
          }}
          readOnly
          onChange={(val) => {
            setCode(val)
          }}
        />
        <div className="px-3 h-full absolute right-0 rounded-full top-0 bg-white text-sendCode border border-sendCode flex justify-center items-center text-tipSize ">
          {countText}
        </div>
      </div>
    </div>
  )
}

export default FormCode
