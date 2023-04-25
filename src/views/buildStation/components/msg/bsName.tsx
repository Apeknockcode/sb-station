import React from 'react';
import { Input } from 'antd-mobile'

// const InputTemp = ()=>{
//   return (
//     <div className='p-2'>
//       <div className="flex rounded-full px-4 py-2  border-solid border">
//         <span className="w-24 flex items-center">姓名</span>
//         <Input placeholder="请输入姓名(已加密)"  style={phoneStyle}  readOnly />
//       </div>
//     </div>
//   );
// }
// const InputCom = new ComponentItemFactory(
//   'input',
// 	'输入组件',
//   {},
//   {},
//   (date,context,store,config)=>{
//     return <InputTemp data={data} context={context} store={store} config={config}></InputTemp>;
//   }
// )


function BsPhone() {
  // console.log('BsPhone',props)
  const phoneStyle: React.CSSProperties = {
    width: "100%",
    border: "none",
    textAlign: 'end',
    padding:'0px',
  }
  return (
    <div className='p-2'>
      <div className="flex rounded-full px-4 py-2  border-solid border">
        <span className="w-24 flex items-center">姓名</span>
        <Input placeholder="请输入姓名(已加密)"  style={phoneStyle}  readOnly />
      </div>
    </div>
  );
}
export default BsPhone;
