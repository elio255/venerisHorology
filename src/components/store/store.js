import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 



const initialState = {
    cart: [],
};


const persistConfig = {
    key: 'root',
    storage,
};


const watchReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.payload], 
            };
        case 'REMOVE_FROM_CART':
            const newCart = [...state.cart];
            newCart.splice(action.payload.index, 1); 
            return {
                ...state,
                cart: newCart,
            };
            case 'CLEAR_CART':
                return {
                    ...state,
                    cart: [], 
                };
        default:
            return state;
    }
};


const persistedReducer = persistReducer(persistConfig, watchReducer);

const store = createStore(persistedReducer);


const persistor = persistStore(store);


export default store;
export { persistor };
