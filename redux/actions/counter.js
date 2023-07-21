import * as actions from "../constant/counter"

export const addCounter = () => (dispatch) => {
    dispatch({
        type: actions.INCREMENT
    })
}

export const removeCounter = () => (dispatch) => {
    dispatch({
        type: actions.DECREMENT
    })
}