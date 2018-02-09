import * as actionTypes from '../actionTypes/userInfo'
const initialState = {
    name: 'zhanghao'
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.USER_UPADTE:
            return action.data
        default:
            return state
    }
}