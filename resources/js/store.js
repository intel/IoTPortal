// TODO: This file to be removed in the future, has been replaced with individual reducer

import { createStore } from 'redux'

const initialState = {
    sidebarShow: 'responsive'
}

const changeState = (state = initialState, { type, ...rest }) => {
    switch (type) {
        case 'set':
            return {...state, ...rest }
        default:
            return state
    }
}

const store = createStore(changeState)
export default store
