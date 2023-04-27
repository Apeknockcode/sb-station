import React, {useState, useEffect} from 'react'
import {Input, Space, Divider} from 'antd'
import {
  AlignLeftOutlined,
  AlignCenterOutlined,
  AlignRightOutlined,
} from '@ant-design/icons'

import {useSelector, useDispatch} from 'react-redux'
function StyleCom() {
  const {comDate, index} = useSelector((state) => state)
  const [styleCss, setStyle] = useState(null)
  useEffect(() => {
    if (index + '') {
      console.log('StyleCom', comDate, index)
      let styleDate = comDate[index]?.pr
      setStyle(styleDate)
      // 渲染函数
      // let content = styleDate.content
      // let style = styleDate.style
      // for(var i in styleDate){
      //   console.log('styleDate',styleDate)
      //   console.log('styleDate-index',i)
      // }
      // .forEach((item, k) => {
      //   console.log('item', item)
      //   console.log('k', k)
      // })
    }
  }, [index])
  console.log('styleCss', styleCss)

  return (
    <div className="">
      {/* <Space direction="vertical" size="middle" style={{display: 'flex'}}>
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
          <span className="w-20">外边距：</span>
          <div className="flex item-center">
            <div className="flex items-center mr-2">
              xL:
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
          <span className="w-20">内边距：</span>
          <div className="flex item-center">
            <div className="flex items-center mr-2">
              xL:
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
          <span className="w-20">元素动画：</span>
          <div className="flex item-center">
            <Input placeholder="请输入内容" />
          </div>
        </div>
        <Divider plain>基础样式</Divider>
        <div className="flex items-center">
          <span className="w-20">提示文本：</span>
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
      </Space> */}
    </div>
  )
}

export default StyleCom
