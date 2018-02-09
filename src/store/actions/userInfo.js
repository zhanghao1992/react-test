import * as actionTypes from '../actionTypes/userInfo'

export function update(data) {
    return {
        type: actionTypes.USER_UPDATE,
        data
    }
}