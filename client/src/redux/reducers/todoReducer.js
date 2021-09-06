import { INITIAL_TO_DO } from "../type"
const initialState = {
    category: '',
    mission: '',
    done: false
}

const todoReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case INITIAL_TO_DO:
            return initialState
        default:
            return state
    }
}

export default todoReducer