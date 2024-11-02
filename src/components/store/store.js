import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// Initial state for cart
const initialState = {
    cart: [],
};

// Config for redux-persist
const persistConfig = {
    key: 'root',
    storage,
};

// Reducer function
const watchReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.payload], // Adds the item with quantity included
            };
        case 'REMOVE_FROM_CART':
            // Remove specific item by index
            const newCart = [...state.cart];
            newCart.splice(action.payload.index, 1); // Remove item at the specified index
            return {
                ...state,
                cart: newCart, // Update cart with the new array
            };
            case 'CLEAR_CART':
                return {
                    ...state,
                    cart: [], // Reset cart to empty
                };
        default:
            return state;
    }
};

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, watchReducer);

// Create Redux store
const store = createStore(persistedReducer);

// Create persistor
const persistor = persistStore(store);

// Export both store and persistor
export default store;
export { persistor };
