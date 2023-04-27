import React, {useState} from 'react'
import {Tabs} from 'antd'
import type {TabsProps} from 'antd'

import BsStyle from './styleCom'
function BsRight(props) {
  // const bsStore = props.store
  const [attribute, setAttribute] = useState([])
  // const showState = bsStore.subscribe(() => {
  //   let data = bsStore.getState().comDate[props.index]
  //   if(data){
  //     console.log('data',data)
  //     setAttribute(data)
        
  //   }
  // })

  const onChange = (key: string) => {
    console.log(key)
  }
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: `基本属性`,
      children: <BsStyle  />,
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
