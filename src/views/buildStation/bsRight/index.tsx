import React, {useState} from 'react'
import {Tabs} from 'antd'
import type {TabsProps} from 'antd'
import BsStyle from './styleCom'
function BsRight(props) {
  const bsStore = props.store
  const [attribute, setAttribute] = useState([])
  const showState = bsStore.subscribe(() => {
    let data = bsStore.getState().comDate[props.index]

    // setAttribute((current) => {
    //   return [...current]
    // })
    setAttribute(data)
    // debugger
  })

  const onChange = (key: string) => {
    console.log(key)
  }
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: `样式`,
      children: <BsStyle />,
    },
    {
      key: '2',
      label: `动画`,
      children: `Content of Tab Pane 2`,
    },
    {
      key: '3',
      label: `函数/事件`,
      children: `Content of Tab Pane 3`,
    },
  ]
  return (
    <div>
      <div className="px-3 h-full">
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
    </div>
  )
}

export default BsRight
