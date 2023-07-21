import axios from "axios"
import * as actions from "../constant/products"

export const getProducts = () => async (dispatch) => {
    try {
        dispatch({
            type: actions.ALL_PRODUCT_REQUEST
        })

        const response = await axios.get('https://fakestoreapi.com/products')

        dispatch({
            type: actions.ALL_PRODUCT_SUCCESS,
            payload: response.data
        })
    } catch (err) {
        dispatch({
            type: actions.ALL_PRODUCT_FAIL,
            payload: 'Error'
        })
    }
}