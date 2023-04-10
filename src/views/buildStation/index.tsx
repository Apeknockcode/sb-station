import React from 'react'
import { Col, Row, Collapse, } from 'antd'
import { AimOutlined, ColumnHeightOutlined, CompassOutlined, ContactsOutlined, FieldTimeOutlined, FileTextOutlined, FontSizeOutlined, IdcardOutlined, PhoneOutlined, PlusSquareOutlined, UserOutlined } from '@ant-design/icons';
import bsStyle from "./bsStyle.module.scss"
function BuildStation() {
  const { Panel } = Collapse;
  const colLeft: React.CSSProperties = {
    height: "100vh",
  }
  const colContent: React.CSSProperties = {
    height: "100vh",
  }
  const colRight: React.CSSProperties = {
    height: "100vh"
  }
  const colDiv: React.CSSProperties = {
    display: 'flex',
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer"
  }
  return (
    <Row>
      <Col span={4} className='h-screen' style={colLeft}>
        <Collapse defaultActiveKey={['1', '2', '3']} bordered={false} ghost>
          <Panel header="模板" key="1" >
            <Row gutter={[24, 24]}>
              <Col className="gutter-row" span={12} >
                <div style={colDiv} >col-6</div>
              </Col>
              <Col className="gutter-row" span={12}>
                <div style={colDiv}>col-6</div>
              </Col>
              <Col className="gutter-row" span={12}>
                <div style={colDiv}>col-6</div>
              </Col>
              <Col className="gutter-row" span={12}>
                <div style={colDiv}>col-6</div>
              </Col>
              <Col className="gutter-row" span={12}>
                <div style={colDiv}>col-6</div>
              </Col>
            </Row>

          </Panel>
          <Panel header="基础组件" key="2">
            <Row gutter={[10, 16]}>
              <Col className="gutter-row" span={8} >
                <div className={bsStyle.colBox} style={colDiv} >
                  <div className={bsStyle.iconBox}>
                    <FontSizeOutlined />
                  </div>
                  <div className={bsStyle.icoName}>富文本</div>
                  <div className={bsStyle.icoNumber}>0/20</div>
                </div>
              </Col>
              <Col className="gutter-row" span={8}>
                <div style={colDiv}>
                  <div className={bsStyle.iconBox}>
                    <PlusSquareOutlined />
                  </div>
                  <div className={bsStyle.icoName}>按钮</div>
                  <div className={bsStyle.icoNumber}>0/1</div>
                </div>
              </Col>
              <Col className="gutter-row" span={8}>
                <div style={colDiv}>
                  <div className={bsStyle.iconBox}>
                    <ColumnHeightOutlined />
                  </div>
                  <div className={bsStyle.icoName}>滚动播放</div>
                  <div className={bsStyle.icoNumber}>0/20</div>
                </div>
              </Col>
              <Col className="gutter-row" span={8}>
                <div style={colDiv}>
                  <div className={bsStyle.iconBox}>
                    <ContactsOutlined />
                  </div>
                  <div className={bsStyle.icoName}>选号</div>
                  <div className={bsStyle.icoNumber}>0/1</div>
                </div>
              </Col>
              <Col className="gutter-row" span={8}>
                <div style={colDiv}>
                  <div className={bsStyle.iconBox}>
                    <FieldTimeOutlined />
                  </div>
                  <div className={bsStyle.icoName}>倒计时</div>
                  <div className={bsStyle.icoNumber}>0/1</div>
                </div>
              </Col>
            </Row>
          </Panel>
          <Panel header="信息验证" key="3">
            <Row gutter={[10, 16]}>
              <Col className="gutter-row" span={8} >
                <div style={colDiv} >
                  <div className={bsStyle.iconBox}>
                    <UserOutlined />
                  </div>
                  <div className={bsStyle.icoName}>姓名</div>
                  <div className={bsStyle.icoNumber}>0/1</div>
                </div>
              </Col>
              <Col className="gutter-row" span={8}>
                <div style={colDiv}>
                  <div className={bsStyle.iconBox}>
                    <PhoneOutlined />
                  </div>
                  <div className={bsStyle.icoName}>联系电话</div>
                  <div className={bsStyle.icoNumber}>0/1</div>
                </div>
              </Col>
              <Col className="gutter-row" span={8}>
                <div style={colDiv}>
                  <div className={bsStyle.iconBox}>
                    <AimOutlined />
                  </div>
                  <div className={bsStyle.icoName}>收获地址</div>
                  <div className={bsStyle.icoNumber}>0/1</div>
                </div>
              </Col>
              <Col className="gutter-row" span={8}>
                <div style={colDiv}>
                  <div className={bsStyle.iconBox}>
                    <CompassOutlined />
                  </div>
                  <div className={bsStyle.icoName}>详细地址</div>
                  <div className={bsStyle.icoNumber}>0/1</div>
                </div>
              </Col>
              <Col className="gutter-row" span={8}>
                <div style={colDiv}>
                  <div className={bsStyle.iconBox}>
                    <FileTextOutlined />
                  </div>
                  <div className={bsStyle.icoName}>协议</div>
                  <div className={bsStyle.icoNumber}>0/10</div>
                </div>
              </Col>
              <Col className="gutter-row" span={8}>
                <div style={colDiv}>
                  <div className={bsStyle.iconBox}>
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
      <Col span={12}>3 / 5</Col>
      <Col span={10} style={colRight}>

      </Col>
    </Row>
  )
}

export default BuildStation
