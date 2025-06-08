import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import type { RootStore } from "../../../6_shared/model/store/store";
import { listsAdapter } from "./list.slice";
import type { TList, TTasksState } from "./types";

type FeatureState = {
    tasks: TTasksState
}

export const selectFeatureSlice = (state: FeatureState) => state;

export const selectors = createEntityAdapter<TList>().getSelectors(selectFeatureSlice);

export const {selectAll} = listsAdapter.getSelectors((state: RootStore) => state.tasks)

export const selectorTasks = listsAdapter.getSelectors<RootStore>(state => state.tasks);

export const selectTasksByListId = (listId: string) => createSelector(selectAll, (tasks:TList[]) => tasks.filter(task => task.listId === listId));