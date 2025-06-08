import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import type { TList } from "./types";

export const listsAdapter = createEntityAdapter<TList, string>({
    selectId: (list) => list.id,
});

const initialState = listsAdapter.getInitialState();

export const listsSlice = createSlice({
    name: 'lists',
    initialState: initialState,
    reducers: {
        addMany: listsAdapter.addMany,
    }
});

export const {addMany} = listsSlice.actions;
export default listsSlice.reducer;  