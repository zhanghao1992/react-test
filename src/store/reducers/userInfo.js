import * as actionTypes from '../actionTypes/userInfo'
const initialState = {}

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.USER_UPDATE:
            return action.data
        default:
            return state
    }
}