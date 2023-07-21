import * as actions from "../constant/products"

export const products = (state = { products: [] }, action) => {
    switch (action.type) {
        case actions.ALL_PRODUCT_REQUEST:
            return {
                loading: true,
                products: []
            }
        case actions.ALL_PRODUCT_SUCCESS: 
            return {
                loading: false,
                products: action.payload
            }
        case actions.ALL_PRODUCT_FAIL: 
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}