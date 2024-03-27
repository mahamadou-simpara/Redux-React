// import { createStore } from 'redux';
import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialCounterStates = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterStates,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += +action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialAuth = { isAuthenticated: false };

const authenticationSlice = createSlice({
  name: "Authentication",
  initialState: initialAuth,
  reducers: {
    login (state) {state.isAuthenticated = true},
    logout (state) {state.isAuthenticated = false}
  }
});

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

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authenticationSlice.reducer},
});

export const storeActions = counterSlice.actions;
export const authActions = authenticationSlice.actions;

export default store;
