// import { createStore } from 'redux';
import { configureStore, createSlice } from "@reduxjs/toolkit"; 

const initialStates = { counter: 0, showCounter: true };

const counterSlice = createSlice({
    name: 'counter',
    initialStates,
    reducers: {
        increment (state) {
           state.counter++
        },
        decrement (state) {
            state.counter--
        },
        increase(state, action) {
            state.counter += action.amount
        },
        toggleCounter (state) {
            state.showCounter = !state.showCounter
        }
    }
})




// const counterReducer = (state = initialStates, action) => {
//   if (action.type === 'increment') {
//     return { counter: state.counter + 1,
//         showCounter: state.showCounter
//      };
//   }

//   if (action.type === 'increase') {
//     return { counter: state.counter + action.amount };
//   }

//   if (action.type === 'decrement') {
//     return { 
//         counter: state.counter - 1,
//         showCounter: state.showCounter
//     };
//   }

//   if(action.type === 'toggle'){
//     return { 
//         counter: state.counter,
//         showCounter: !state.showCounter
//     };

//   }

//   return state;
// };

// const store = createStore(counterReducer);


export const storeActions = counterSlice.actions;



export default store;
