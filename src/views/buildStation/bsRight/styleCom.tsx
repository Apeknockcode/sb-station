import React, { useState } from 'react';
import { Input, Space } from 'antd';
import {
  AlignLeftOutlined,
  AlignCenterOutlined,
  AlignRightOutlined,
} from '@ant-design/icons'
function StyleCom(props) {
  const [align, setAlign] = useState('left')

  return (
    <div className="">
      <Space direction="vertical" size="middle" style={{display: 'flex'}}>
        <div className="flex items-center">
          <span>对齐方式：</span>
          <div className="flex item-center">
            <AlignLeftOutlined
              className={`mx-3 cursor-pointer ${
                align == 'left' ? 'text-sendCode' : ''
              }`}
            />
            <AlignCenterOutlined
              className={`mx-3 cursor-pointer ${
                align == 'center' ? 'text-sendCode' : ''
              }`}
            />
            <AlignRightOutlined
              className={`mx-3 cursor-pointer ${
                align == 'right' ? 'text-sendCode' : ''
              }`}
            />
          </div>
        </div>
        <div className="flex items-center">
          <span className="w-20">提示文本：</span>
          <div className="flex item-center">
            <Input placeholder="请输入内容" />
          </div>
        </div>
        <div className="flex items-center">
          <span className="w-20">外边距：</span>
          <div className="flex item-center">
            <div className="flex items-center mr-2">
              xL:{' '}
              <Input
                placeholder="xL"
                className="ml-2"
                style={{width: '40px'}}
              />
            </div>
            <div className="flex items-center  mr-2">
              xR:{' '}
              <Input
                placeholder="xR"
                className="ml-2"
                style={{width: '40px'}}
              />
            </div>
            <div className="flex items-center  mr-2">
              yT:{' '}
              <Input
                placeholder="yT"
                className="ml-2"
                style={{width: '40px'}}
              />
            </div>
            <div className="flex items-center">
              yB:{' '}
              <Input
                placeholder="yB"
                className="ml-2"
                style={{width: '40px'}}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <span className="w-20">内边距：</span>
          <div className="flex item-center">
            <div className="flex items-center mr-2">
              xL:{' '}
              <Input
                placeholder="xL"
                className="ml-2"
                style={{width: '40px'}}
              />
            </div>
            <div className="flex items-center  mr-2">
              xR:
              <Input
                placeholder="xR"
                className="ml-2"
                style={{width: '40px'}}
              />
            </div>
            <div className="flex items-center  mr-2">
              yT:
              <Input
                placeholder="yT"
                className="ml-2"
                style={{width: '40px'}}
              />
            </div>
            <div className="flex items-center">
              yB:
              <Input
                placeholder="yB"
                className="ml-2"
                style={{width: '40px'}}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <span className="w-20">圆角：</span>
          <div className="flex item-center">
            <Input placeholder="请输入内容" />
          </div>
        </div>
         <div className="flex items-center">
          <span className="w-20">盒子阴影：</span>
          <div className="flex item-center">
            <Input placeholder="请输入内容" />
          </div>
        </div>
         <div className="flex items-center">
          <span className="w-20">背景颜色：</span>
          <div className="flex item-center">
            <Input placeholder="请输入内容" />
          </div>
        </div>
         <div className="flex items-center">
          <span className="w-20">元素边框：</span>
          <div className="flex item-center">
            <Input placeholder="请输入内容" />
          </div>
        </div>
         <div className="flex items-center">
          <span className="w-20">按钮文案：</span>
          <div className="flex item-center">
            <Input placeholder="请输入内容" />
          </div>
        </div>
         <div className="flex items-center">
          <span className="w-20">协议列表：</span>
          <div className="flex item-center">
            <Input placeholder="请输入内容" />
          </div>
        </div>
         <div className="flex items-center">
          <span className="w-20">元素动画：</span>
          <div className="flex item-center">
            <Input placeholder="请输入内容" />
          </div>
        </div>
      </Space>
    </div>
  )
}

export default StyleCom
