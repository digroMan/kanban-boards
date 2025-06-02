import {configureStore} from '@reduxjs/toolkit';
import { tasksSlice } from '../../../5_entities/task/model/tasks.slice';

export const store = configureStore({
    reducer: {
        tasks: tasksSlice.reducer,
    },
});

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;