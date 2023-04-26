import React, {useState} from 'react'
import {
  AlignLeftOutlined,
  AlignCenterOutlined,
  AlignRightOutlined,
} from '@ant-design/icons'
import {Space, Input} from 'antd'
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
                align == 'left' ? 'text-sendCode' : ''
              }`}
            />
            <AlignRightOutlined
              className={`mx-3 cursor-pointer ${
                align == 'left' ? 'text-sendCode' : ''
              }`}
            />
          </div>
        </div>
        <div className="flex items-center">
          <span>提示文本：</span>
          <div className="flex item-center">
            <Input placeholder="请输入内容" />
          </div>
        </div>
        <div className="flex items-center">
          <span>外边距：</span>
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
          <span>内边距：</span>
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
          
        </div>
      </Space>
    </div>
  )
}

export default StyleCom
