import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import type { TTask } from "./types";

export const tasksAdapter = createEntityAdapter<TTask, string>({
    selectId: (task) => task.id,
});

const initialState = tasksAdapter.getInitialState();

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: initialState,
    reducers: {
        addMany: tasksAdapter.addMany,
    }
});

export const {addMany} = tasksSlice.actions;
export default tasksSlice.reducer;  