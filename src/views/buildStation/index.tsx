import React, {ReactPortal, useState, useEffect} from 'react'
import {Col, Row, Collapse} from 'antd'
import BsButton from './components/basic/bsButton'
import BsPhone from './components/msg/bsPhone'
import BsIdCards from './components/msg/bsIdCards'
import BsName from './components/msg/bsName'
import BsAddDetailed from './components/msg/bsAddDetailed'
import BsAddress from './components/msg/bsAddress'
import BsImage from './components/basic/bsImage'
import Agreement from './components/msg/agreement'
import MsgCode from './components/msg/code'
import BsRight from './bsRight'
import {Container, Draggable, DropResult} from 'react-smooth-dnd'
// 导出鼠标右点击事件 / 样式
import 'react-contexify/ReactContexify.css'
import {Menu, Item, Separator, Submenu, useContextMenu} from 'react-contexify'
import {createStore} from 'redux'
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
  MessageOutlined,
} from '@ant-design/icons'
import bsStyle from './bsStyle.module.scss'
import {applyDrag} from '../../utils/tools'
import bsReducer from './../../store/bsReducer'

function BuildStation() {
  const bsStore = createStore(bsReducer)
  const {Panel} = Collapse
  interface nodeType {
    key: string
    time: number
    vnode: JSX.Element
  }
  const [node, setNode] = useState([] as Array<nodeType>)
  const [selectIndex, setSelectIndex] = useState(null)
  const componentsList = {
    basicComponent: [
      {
        id: 1,
        key: new Date().getTime(),
        name: '富文本',
        number: '20',
        icon: <FontSizeOutlined />,
        // vDom: <BsImage />,
      },
      {
        id: 2,
        key: new Date().getTime(),
        name: '按钮',
        number: '20',
        icon: <PlusSquareOutlined />,
        // vDom: <BsButton />,
      },
      {
        id: 3,
        key: new Date().getTime(),
        name: '滚动播放',
        number: '20',
        icon: <ColumnHeightOutlined />,
        // vDom: <BsButton />,
      },
      {
        id: 4,
        key: new Date().getTime(),
        name: '选号',
        number: '20',
        icon: <ContactsOutlined />,
        // vDom: <BsButton />,
      },
      {
        id: 5,
        key: new Date().getTime(),
        name: '倒计时',
        number: '20',
        icon: <FieldTimeOutlined />,
        // vDom: <BsButton />,
      },
    ],
    msgComponents: [
      {
        id: 1,
        key: new Date().getTime(),
        name: '姓名',
        number: '20',
        pr: {
          style: {},
        },
        icon: <UserOutlined />,
        vDom: <BsName />,
      },
      {
        id: 2,
        key: new Date().getTime(),
        name: '联系电话',
        number: '20',
        pr: {
          style: {},
        },
        icon: <PhoneOutlined />,
        vDom: <BsPhone />,
      },
      {
        id: 3,
        key: new Date().getTime(),
        name: '收货地址',
        number: '20',
        pr: {
          style: {},
        },
        icon: <AimOutlined />,
        vDom: <BsAddress />,
      },
      {
        id: 4,
        key: new Date().getTime(),
        name: '详细地址',
        number: '20',
        pr: {
          style: {},
          content: {},
        },
        icon: <CompassOutlined />,
        vDom: <BsAddDetailed />,
      },
      {
        id: 5,
        key: new Date().getTime(),
        name: '身份证号',
        number: '20',
        pr: {
          style: {},
          content: {},
        },
        icon: <IdcardOutlined />,
        vDom: <BsIdCards />,
      },
      {
        id: 6,
        key: new Date().getTime(),
        name: '验证码',
        number: '20',
        pr: {
          style: {},
          content: {},
        },
        icon: <MessageOutlined />,
        vDom: <MsgCode />,
      },
      {
        id: 7,
        key: new Date().getTime(),
        name: '协议',
        number: '20',
        pr: {
          style: {},
          content: {},
        },
        icon: <FileTextOutlined />,
        vDom: <Agreement />,
      },
    ],
  }
  useEffect(() => {
    bsStore.dispatch({type: 'addComDate', node})
  }, [node])

  const handleRenderComponent = (item: any) => {
    setNode((current) => [
      ...current,
      {
        ...item,
        focus: false,
      },
    ])
  }

  const handleDrop = (dropResult: DropResult) => {
    const rearrange = applyDrag(node, dropResult)
    setNode(rearrange)
  }

  const handleClickDraggable = (dropResult: DropResult, index: number) => {
    node.forEach((item, key) => {
      item.focus = false
      if (key === index) {
        item.focus = true
      }
    })
    setSelectIndex(index)
    bsStore.dispatch({type: 'setSelectIndex', index})
    setNode((current) => [...current])
  }

  const {show, hidden} = useContextMenu({
    id: 'menu',
  })
  // 右键可选项
  const handleContextMenu = (event, index) => {
    node.forEach((item, key) => {
      item.focus = false
      if (key === index) {
        item.focus = true
      }
    })
    setNode((current) => [...current])
    show({
      event,
      props: {
        key: index,
      },
    })
  }
  // function somewhere(e) {
  //   contextMenu.show({
  //     id: menuId,
  //     event: e,
  //   })
  // }
  // I'm using a single event handler for all items
  // but you don't have too :)
  const handleItemClick = ({id, event, props}) => {
    switch (id) {
      case 'dele':
        node.splice(props.key, 1)
        setNode((current) => [...current])
        break
    }
  }

  const trackVisibility = (isVisible: boolean) => {
    console.log('Menu is', isVisible)
    if (!isVisible) {
      node.forEach((item, key) => {
        item.focus = false
      })
      setNode((current) => [...current])
    }
  }

  return (
    <Row className={bsStyle.contain}>
      <Col flex="300px" className={`${bsStyle.colLeft} shadow h-screen`}>
        <Collapse defaultActiveKey={['2', '3']} bordered={false} ghost>
          {/* <Panel header="模板" key="1"></Panel> */}
          {/* <Panel header="基础组件" key="2">
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
          </Panel> */}
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
          {/* 自定义菜单 */}
          <Menu
            id="menu"
            onVisibilityChange={trackVisibility}
            style={{maxWidth: '80px'}}
          >
            <Item id="dele" onClick={handleItemClick}>
              删除
            </Item>
            {/* <Separator />
            <Item disabled>Disabled</Item>
            <Separator /> */}
            {/* <Submenu label="Foobar">
              <Item id="reload" onClick={handleItemClick}>
                Reload
              </Item>
              <Item id="something" onClick={handleItemClick}>
                Do something else
              </Item>
            </Submenu> */}
          </Menu>
          <Container
            dragClass={bsStyle.opacityGhost}
            dropClass={bsStyle.opacityGhostDrop}
            onDrop={(e) => handleDrop(e)}
          >
            {node.map((value, k) => {
              return (
                <Draggable
                  id={`${value.key}`}
                  key={value.key}
                  style={{
                    border: value.focus
                      ? '1px dashed red'
                      : '1px solid transparent',
                  }}
                  onClick={(e) => handleClickDraggable(e, k)}
                  onContextMenu={(e) => handleContextMenu(e, k)}
                >
                  {value.vDom}
                </Draggable>
              )
            })}
          </Container>
        </div>
      </Col>
      <Col flex="auto" className={`shadow h-screen`}>
        <BsRight store={bsStore} index={selectIndex} />
      </Col>
    </Row>
  )
}

export default BuildStation
