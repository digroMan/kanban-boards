import {combineReducers, configureStore} from '@reduxjs/toolkit';
const store = configureStore({
    reducer: {
        combineReducers({
            task: tasksSlice,
        })
    }
});