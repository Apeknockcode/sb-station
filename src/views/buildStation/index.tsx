import React from 'react'
import {Col, Row} from 'antd'
function BuildStation() {
  const colLeft:React.CSSProperties = {
    background:"red"
  }
   const colContent:React.CSSProperties = {

   }
   const colRight:React.CSSProperties = {

  }
  return (
    <Row>
      <Col flex={1} className='h-screen' style={ colLeft}>1 / 5</Col>
      <Col flex={3}>3 / 5</Col>
      <Col flex={1} style={ colRight}>1 / 5</Col>
    </Row>
  )
}

export default BuildStation
