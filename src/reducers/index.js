import {ADD_TODO, TOGGLE_TODO, INCREASE_CLICK} from '../actions/index'

const initialState = { 
    otra: 123,
    toDos: [],
    clickCount: 0,
};

export const toDoReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TODO:
            break;
        case TOGGLE_TODO:
            break;
        case INCREASE_CLICK:
            state = {
                ...state,
                clickCount : state.clickCount + 1}
            // let newState = Object.assign({}, state)
            // newState.clickCount = state.clickCount + 1
            break;

    }
    return state;

}