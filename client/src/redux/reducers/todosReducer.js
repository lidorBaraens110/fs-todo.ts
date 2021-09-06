import { INITIAL_TO_DOS } from "../type"
const initialState = [

]

const todosReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case INITIAL_TO_DOS:
            return [...payload]
        default:
            return state
    }
}

export default todosReducer