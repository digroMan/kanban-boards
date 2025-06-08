import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import type { RootStore } from "../../../6_shared/model/store/store";
import { tasksAdapter } from "./tasks.slice";
import type { TTask, TTasksState } from "./types";

type FeatureState = {
    tasks: TTasksState
}

export const selectFeatureSlice = (state: FeatureState) => state.tasks;

export const selectors = createEntityAdapter<TTask>().getSelectors(selectFeatureSlice);

export const {selectAll} = tasksAdapter.getSelectors((state: RootStore) => state.tasks)

export const selectorTasks = tasksAdapter.getSelectors<RootStore>(state => state.tasks);

export const selectTasksByListId = (listId: string) => createSelector(selectAll, (tasks:TTask[]) => tasks.filter(task => task.listId === listId));