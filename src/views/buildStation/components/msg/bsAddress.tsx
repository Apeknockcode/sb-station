import React, { useState } from 'react';
import { Cell, Cascader, ConfigProvider } from '@nutui/nutui-react';
const customTheme = {
  nutuiCascaderItemHeight: '48px',
  nutuiCascaderItemMargin: '0 10px',
  nutuiCascaderItemPadding: '10px',
  nutuiCascaderItemBorderBottom: '1px solid #F0F0F0',
}

function BsAddress() {
  const [isVisibleDemo1, setIsVisibleDemo1] = useState(false)
  const [value6, setValue6] = useState([])
  const [optionsDemo1, setOptionsDemo1] = useState([
    {
      value: '浙江',
      text: '浙江',
      children: [
        {
          value: '杭州',
          text: '杭州',
          children: [
            { value: '西湖区', text: '西湖区'},
            { value: '余杭区', text: '余杭区' },
          ],
        },
        {
          value: '温州',
          text: '温州',
          children: [
            { value: '鹿城区', text: '鹿城区' },
            { value: '瓯海区', text: '瓯海区' },
          ],
        },
      ],
    },
    {
      value: '湖南',
      text: '湖南',
      children: [
        {
          value: '长沙',
          text: '长沙',
          children: [
            { value: '西湖区', text: '西湖区' },
            { value: '余杭区', text: '余杭区' },
          ],
        },
        {
          value: '温州',
          text: '温州',
          children: [
            { value: '鹿城区', text: '鹿城区' },
            { value: '瓯海区', text: '瓯海区' },
          ],
        },
      ],
    },
    {
      value: '福建',
      text: '福建',
      children: [
        {
          value: '福州',
          text: '福州',
          children: [
            { value: '鼓楼区', text: '鼓楼区' },
            { value: '台江区', text: '台江区' },
          ],
        },
      ],
    },
  ])
  const change6 = (value: any, path: any) => {
    console.log('onChange', value, path)
    setValue6(value)
  }
  const onPathChange = (value: any, path: any) => {
    console.log('onPathChange', value, path)
  }
  
  return (
    <div className='p-2'>
      <Cell
        className="rounded-full m-0  px-4 py-2  border-solid border"
        style={{
          boxShadow: "none",
          height:"42px",
          lineHeight:"24px"
        }}
        title="选择地址"
        desc={'请选择地址'}
        roundRadius="10000px"
        onClick={() => {
          setIsVisibleDemo1(true)
        }}
      />
      <ConfigProvider theme={customTheme}>
        <Cascader
         style={{
         color:'#D7DADF'
        }}
          visible={isVisibleDemo1}
          tabsColor="#3768FA"
          value={value6}
          title="地址选择"
          options={optionsDemo1}
          closeable
          onClose={() => { setIsVisibleDemo1(false) }}
          onChange={change6}
          onPathChange={onPathChange}
        />
      </ConfigProvider>
    </div>

  );
}

export default BsAddress;
