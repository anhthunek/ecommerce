import { createSlice } from '@reduxjs/toolkit';

 const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addProduct (state, action) {
            const checkExist = state.find(x => x.id === action.payload.id);
            if (checkExist) {
                return state.map (prod => prod.id === action.payload.id ? {
                    ...prod,
                    quantity: prod.quantity + 1
                    
             } : prod)
            }
            else {
                const prod = action.payload
                return [
                    ...state,
                    {
                        ...prod,
                        quantity: 1
                    }
                ]
            }
        },
       deleteProduct (state, action) {
        return state.filter(prod => action.payload.id !== prod.id)
       },
       increment (state, action) {
        return state.map (prod => prod.id === action.payload.id ? {
                ...prod,
                quantity: prod.quantity + 1
            } :prod)
        
       },
       decrement (state, action) {
        return state.map (prod => prod.id === action.payload.id ? {
            ...prod,
            quantity: prod.quantity >1 ? prod.quantity - 1 : 1
        } :prod)
       },
       
    }
})


const { actions, reducer } = cartSlice;
export const { addProduct, deleteProduct, increment, decrement, inputQuantity } = actions;
export default cartSlice.reducer;