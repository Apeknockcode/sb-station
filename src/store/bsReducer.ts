const initialState = {
  comDate: [],
  index: null, // 用户遍历的下标
  text: '用户遍历的下标',
}

const bsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'addComDate':
      return {...state, comDate: action.node}
      break
    case 'setSelectIndex':
      return {...state, index: action.index}
      break
    default:
       return state
  }
}

export default bsReducer
