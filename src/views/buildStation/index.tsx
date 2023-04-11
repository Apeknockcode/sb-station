import React from 'react'
import {Col, Row, Collapse} from 'antd'
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
  const colLeft: React.CSSProperties = {
    height: '100vh',
  }
  const colContent: React.CSSProperties = {
    height: '100vh',
  }
  const colRight: React.CSSProperties = {
    height: '100vh',
  }

  return (
    <Row>
      <Col flex="300px" className={ bsStyle.colLeft} style={colLeft} >
        <Collapse defaultActiveKey={['1', '2', '3']} bordered={false} ghost>
          <Panel header="模板" key="1">
            <Row gutter={[24, 24]}>
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
            </Row>
          </Panel>
          <Panel header="基础组件" key="2">
            <Row gutter={[10, 16]}>
              <Col className={ bsStyle.gutterRow} span={6}>
                <div  className={`${bsStyle.box} flex-col flex items-center`}  >
                  <div
                    className={`${bsStyle.iconBox} flex justify-center items-center`}
                  >
                    <FontSizeOutlined />
                  </div>
                  <div className={ `${bsStyle.icoName } text-xs`}>富文本</div>
                  <div className={bsStyle.icoNumber}>0/20</div>
                </div>
              </Col>
              <Col className={ bsStyle.gutterRow} span={6}>
                <div   className={`${bsStyle.box} flex-col flex items-center`}>
                  <div
                    className={`${bsStyle.iconBox} flex justify-center items-center`}
                  >
                    <PlusSquareOutlined />
                  </div>
                  <div className={bsStyle.icoName}>按钮</div>
                  <div className={bsStyle.icoNumber}>0/1</div>
                </div>
              </Col>
              <Col className={ bsStyle.gutterRow} span={6}>
                <div    className={`${bsStyle.box} flex-col flex items-center`}>
                  <div
                    className={`${bsStyle.iconBox} flex justify-center items-center`}
                  >
                    <ColumnHeightOutlined />
                  </div>
                  <div className={bsStyle.icoName}>滚动播放</div>
                  <div className={bsStyle.icoNumber}>0/20</div>
                </div>
              </Col>
              <Col className={ bsStyle.gutterRow} span={6}>
                <div    className={`${bsStyle.box} flex-col flex items-center`}>
                  <div
                    className={`${bsStyle.iconBox} flex justify-center items-center`}
                  >
                    <ContactsOutlined />
                  </div>
                  <div className={bsStyle.icoName}>选号</div>
                  <div className={bsStyle.icoNumber}>0/1</div>
                </div>
              </Col>
              <Col className={ bsStyle.gutterRow} span={6}>
                <div    className={`${bsStyle.box} flex-col flex items-center`}>
                  <div
                    className={`${bsStyle.iconBox} flex justify-center items-center`}
                  >
                    <FieldTimeOutlined />
                  </div>
                  <div className={bsStyle.icoName}>倒计时</div>
                  <div className={bsStyle.icoNumber}>0/1</div>
                </div>
              </Col>
            </Row>
          </Panel>
          <Panel header="信息验证" key="3">
            <Row gutter={[10, 16]} justify="start">
              <Col className={ bsStyle.gutterRow} span={6}>
                <div    className={`${bsStyle.box} flex-col flex items-center`}>
                  <div
                    className={`${bsStyle.iconBox} flex justify-center items-center`}
                  >
                    <UserOutlined />
                  </div>
                  <div className={bsStyle.icoName}>姓名</div>
                  <div className={bsStyle.icoNumber}>0/1</div>
                </div>
              </Col>
              <Col className={ bsStyle.gutterRow} span={6}>
                <div    className={`${bsStyle.box} flex-col flex items-center`}>
                  <div
                    className={`${bsStyle.iconBox} flex justify-center items-center`}
                  >
                    <PhoneOutlined />
                  </div>
                  <div className={bsStyle.icoName}>联系电话</div>
                  <div className={bsStyle.icoNumber}>0/1</div>
                </div>
              </Col>
              <Col className={ bsStyle.gutterRow} span={6}>
                <div    className={`${bsStyle.box} flex-col flex items-center`}>
                  <div
                    className={`${bsStyle.iconBox} flex justify-center items-center`}
                  >
                    <AimOutlined />
                  </div>
                  <div className={bsStyle.icoName}>收获地址</div>
                  <div className={bsStyle.icoNumber}>0/1</div>
                </div>
              </Col>
              <Col className={ bsStyle.gutterRow} span={6}>
                <div    className={`${bsStyle.box} flex-col flex items-center`}>
                  <div
                    className={`${bsStyle.iconBox} flex justify-center items-center`}
                  >
                    <CompassOutlined />
                  </div>
                  <div className={bsStyle.icoName}>详细地址</div>
                  <div className={bsStyle.icoNumber}>0/1</div>
                </div>
              </Col>
              <Col className={ bsStyle.gutterRow} span={6}>
                <div    className={`${bsStyle.box} flex-col flex items-center`}>
                  <div
                    className={`${bsStyle.iconBox} flex justify-center items-center`}
                  >
                    <FileTextOutlined />
                  </div>
                  <div className={bsStyle.icoName}>协议</div>
                  <div className={bsStyle.icoNumber}>0/10</div>
                </div>
              </Col>
              <Col className={ bsStyle.gutterRow} span={6}>
                <div    className={`${bsStyle.box} flex-col flex items-center`}>
                  <div
                    className={`${bsStyle.iconBox} flex justify-center items-center`}
                  >
                    <IdcardOutlined />
                  </div>
                  <div className={bsStyle.icoName}>身份证号</div>
                  <div className={bsStyle.icoNumber}>0/1</div>
                </div>
              </Col>
            </Row>
          </Panel>
        </Collapse>
      </Col>
      <Col flex="1000px" className="flex justify-center items-center">
        <div className={ bsStyle.visibleArea}>


        </div>
      </Col>
      <Col flex="atuo" style={colRight}>
        属性区域
      </Col>
    </Row>
  )
}

export default BuildStation
