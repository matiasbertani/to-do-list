export const ADD_TODO = 'ADD TO DO'
export const TOGGLE_TODO = 'TOGGLE TO DO'
export const INCREASE_CLICK = 'INCREASE_CLICK'

export const click = () => {
    const action = {
        type: INCREASE_CLICK,
    }
    return action;
}