import React, {ReactPortal, useState, useEffect} from 'react'
import {Col, Row, Collapse} from 'antd'
import BsButton from './components/basic/bs_Button'
import ReactDOM, {createPortal} from 'react-dom'
import {
  AimOutlined,
  ColumnHeightOutlined,
  CompassOutlined,
  ContactsOutlined,
  FieldTimeOutlined,
  FileTextOutlined,
  FontSizeOutlined,
  IdcardOutlined,
  PhoneOutlined,
  PlusSquareOutlined,
  UserOutlined,
} from '@ant-design/icons'
import bsStyle from './bsStyle.module.scss'

function BuildStation() {
  const {Panel} = Collapse
  interface nodeType {
    key: string
    vnode: JSX.Element
  }
  const [node, setNode] = useState([] as Array<nodeType>)
  const componentsList = {
    basicComponent: [
      {
        id: 1,
        name: '富文本',
        number: '20',
        icon: <FontSizeOutlined />,
      },
      {
        id: 2,
        name: '按钮',
        number: '20',
        icon: <PlusSquareOutlined />,
      },
      {
        id: 3,
        name: '滚动播放',
        number: '20',
        icon: <ColumnHeightOutlined />,
      },
      {
        id: 4,
        name: '选号',
        number: '20',
        icon: <ContactsOutlined />,
      },
      {
        id: 5,
        name: '倒计时',
        number: '20',
        icon: <FieldTimeOutlined />,
      },
    ],
    msgComponents: [
      {
        id: 1,
        name: '姓名',
        number: '20',
        icon: <UserOutlined />,
      },
      {
        id: 2,
        name: '联系电话',
        number: '20',
        icon: <PhoneOutlined />,
      },
      {
        id: 3,
        name: '收货地址',
        number: '20',
        icon: <AimOutlined />,
      },
      {
        id: 4,
        name: '详细地址',
        number: '20',
        icon: <CompassOutlined />,
      },
      {
        id: 5,
        name: '协议',
        number: '20',
        icon: <FileTextOutlined />,
      },
      {
        id: 6,
        name: '身份证号',
        number: '20',
        icon: <IdcardOutlined />,
      },
    ],
  }
  useEffect(() => {}, [])
  const handleRenderComponent = (item: any) => {
    setNode((current) => [
      ...current,
      {
        key: item.name,
        vnode: <BsButton key={`${new Date().getTime()} `}  />,
      },
    ])
     console.log(node)
  }

  return (
    <Row className={bsStyle.contain}>
      <Col flex="300px" className={`${bsStyle.colLeft} shadow h-screen`}>
        <Collapse defaultActiveKey={['2', '3']} bordered={false} ghost>
          <Panel header="模板" key="1">
            {/* <Row gutter={[24, 24]}>
              <Col className={ bsStyle.gutterRow} span={12}>
                <div  className={`${bsStyle.box} flex-col flex items-center`}>col-6</div>
              </Col>
              <Col className={ bsStyle.gutterRow} span={12}>
                <div  className={`${bsStyle.box} flex-col flex items-center`}>col-6</div>
              </Col>
              <Col className={ bsStyle.gutterRow} span={12}>
                <div  className={`${bsStyle.box} flex-col flex items-center`}>col-6</div>
              </Col>
              <Col className={ bsStyle.gutterRow} span={12}>
                <div  className={`${bsStyle.box} flex-col flex items-center`}>col-6</div>
              </Col>
              <Col className={ bsStyle.gutterRow} span={12}>
                <div  className={`${bsStyle.box} flex-col flex items-center`}>col-6</div>
              </Col>
            </Row> */}
          </Panel>
          <Panel header="基础组件" key="2">
            <Row gutter={[10, 16]}>
              {componentsList.basicComponent.map((item) => {
                return (
                  <Col
                    key={item.id}
                    className={bsStyle.gutterRow}
                    span={6}
                    onClick={() => handleRenderComponent(item)}
                  >
                    <div
                      className={`${bsStyle.box} flex-col flex items-center`}
                    >
                      <div
                        className={`${bsStyle.iconBox} flex justify-center items-center`}
                      >
                        {item.icon}
                      </div>
                      <div className={bsStyle.icoName}>{item.name}</div>
                      <div className={bsStyle.icoNumber}>0/{item.number}</div>
                    </div>
                  </Col>
                )
              })}
            </Row>
          </Panel>
          <Panel header="信息验证" key="3">
            <Row gutter={[10, 16]} justify="start">
              {componentsList.msgComponents.map((item) => {
                return (
                  <Col
                    key={item.id}
                    className={bsStyle.gutterRow}
                    span={6}
                    onClick={() => handleRenderComponent(item)}
                  >
                    <div
                      className={`${bsStyle.box} flex-col flex items-center`}
                    >
                      <div
                        className={`${bsStyle.iconBox} flex justify-center items-center`}
                      >
                        {item.icon}
                      </div>
                      <div className={bsStyle.icoName}>{item.name}</div>
                      <div className={bsStyle.icoNumber}>0/{item.number}</div>
                    </div>
                  </Col>
                )
              })}
            </Row>
          </Panel>
        </Collapse>
      </Col>
      <Col flex="1000px" className="flex justify-center items-center">
        <div id="visibleArea" className={bsStyle.visibleArea}>
          {node.map((value, key) => {
            return value.vnode
          })}
        </div>
      </Col>
      <Col flex="auto" className={`shadow h-screen`}>
        属性区域
      </Col>
    </Row>
  )
}

export default BuildStation
