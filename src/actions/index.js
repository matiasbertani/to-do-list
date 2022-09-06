export const ADD_TODO = 'ADD TO DO'
export const TOGGLE_TODO = 'TOGGLE TO DO'
export const INCREASE_CLICK = 'INCREASE_CLICK'

export const click = () => {
    let taskName = document.getElementById('input-task').value
    
    const action = {
        type: INCREASE_CLICK,
        taskName: taskName,
    }
    return action;
}