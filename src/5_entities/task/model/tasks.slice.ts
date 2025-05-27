import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import type { TTask } from "./types";

const tasksAdapter = createEntityAdapter({
    selectId: (task: TTask) => task.id,
});

const initialState = tasksAdapter.getInitialState();

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: initialState,
    reducers: {
        addTask: tasksAdapter.addOne,
        updateTask: tasksAdapter.updateOne,
    }
});

export const taskAdapter = tasksAdapter;