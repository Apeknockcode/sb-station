import React, { ReactPortal, useState, useEffect } from 'react'
import "./bs.css"
import { Col, Row, Collapse } from 'antd'
import BsButton from './components/basic/bsButton'
import BsPhone from './components/msg/bsPhone'
import BsIdCards from './components/msg/bsIdCards'
import BsName from './components/msg/bsName'
import BsAddDetailed from './components/msg/bsAddDetailed'
import BsAddress from './components/msg/bsAddress'
import BsImage from './components/basic/bsImage'
import { Container, Draggable, DropResult } from 'react-smooth-dnd'
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
import { applyDrag } from '../../utils/tools'

function BuildStation() {
  const { Panel } = Collapse
  interface nodeType {
    key: string
    time: number
    vnode: JSX.Element
  }
  const [node, setNode] = useState([] as Array<nodeType>)
  const componentsList = {
    basicComponent: [
      {
        id: 1,
        key: new Date().getTime(),
        name: '富文本',
        number: '20',
        icon: <FontSizeOutlined />,
        vDom: <BsImage />,
      },
      {
        id: 2,
        key: new Date().getTime(),
        name: '按钮',
        number: '20',
        icon: <PlusSquareOutlined />,
        vDom: <BsButton />,
      },
      {
        id: 3,
        key: new Date().getTime(),
        name: '滚动播放',
        number: '20',
        icon: <ColumnHeightOutlined />,
        vDom: <BsButton />,
      },
      {
        id: 4,
        key: new Date().getTime(),
        name: '选号',
        number: '20',
        icon: <ContactsOutlined />,
        vDom: <BsButton />,
      },
      {
        id: 5,
        key: new Date().getTime(),
        name: '倒计时',
        number: '20',
        icon: <FieldTimeOutlined />,
        vDom: <BsButton />,
      },
    ],
    msgComponents: [
      {
        id: 1,
        key: new Date().getTime(),
        name: '姓名',
        number: '20',
        icon: <UserOutlined />,
        vDom: <BsName />,
      },
      {
        id: 2,
        key: new Date().getTime(),
        name: '联系电话',
        number: '20',
        icon: <PhoneOutlined />,
        vDom: <BsPhone />,
      },
      {
        id: 3,
        key: new Date().getTime(),
        name: '收货地址',
        number: '20',
        icon: <AimOutlined />,
        vDom: <BsAddress />,
      },
      {
        id: 4,
        key: new Date().getTime(),
        name: '详细地址',
        number: '20',
        icon: <CompassOutlined />,
        vDom: <BsAddDetailed />,
      },
      {
        id: 5,
        key: new Date().getTime(),
        name: '协议',
        number: '20',
        icon: <FileTextOutlined />,
        vDom: <BsButton />,
      },
      {
        id: 6,
        key: new Date().getTime(),
        name: '身份证号',
        number: '20',
        icon: <IdcardOutlined />,
        vDom: <BsIdCards />,
      },
    ],
  }
  useEffect(() => { }, [])
  const handleRenderComponent = (item: any) => {
    setNode((current) => [
      ...current,
      {
        key: item.name,
        time: new Date().getTime(),
        vnode: item.vDom,
      },
    ])
  }

  const handleDrop = (dropResult: DropResult) => {
    const rearrange = applyDrag(node, dropResult)
    setNode(rearrange)
  }

  const handleDrag = (e: any) => {

    console.log('handleDrag', e)
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
      <Col flex="auto" className="flex justify-center items-center">
        <div
          id="visibleArea"
          className={`${bsStyle.visibleArea} overflow-y-auto`}
        >
          {/* onDrop={e => this.setState({ items: applyDrag(this.state.items, e) })} */}
          <Container
            dragClass={bsStyle.opacityGhost}
            dropClass={bsStyle.opacityGhostDrop}
            onDrop={(e) => handleDrop(e)}
          >
            {node.map((value, k) => {
              console.log(value.vnode)
              return (
                <Draggable id={`${value.time}`} key={value.time} onClick={(e)=>handleDrag(e)}>{value.vnode}</Draggable>
              )

            })}
          </Container>
        </div>
      </Col>
      {/* <Col flex="auto" className={`shadow h-screen`}>
        属性区域
      </Col> */}
    </Row>
  )
}

export default BuildStation
