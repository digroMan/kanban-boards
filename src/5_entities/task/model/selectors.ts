import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import type { RootStore } from "../../../6_shared/model/store/store";
import { tasksAdapter } from "./tasks.slice";
import type { TTask, TTasksState } from "./types";
import { selectRootState } from "../../../6_shared/model/selectors";

type FeatureState = {
    tasks: TTasksState
}

const selectTasks = createSelector(selectRootState, (state) => state.tasks);

export const selectTasksByListId = (id: string) => createSelector(selectTasks, (tasks) => {
    console.log(tasks)
    // return tasks.filter(task => task.)
})

export const selectFeatureSlice = (state: FeatureState) => state.tasks;

export const selectors = createEntityAdapter<TTask>().getSelectors(selectFeatureSlice);

export const selectorsAllTasks = selectors.selectAll;

// export const selectTasksByListId = createSelector(selse)

// export const selectTasksById = (id : string) => {
//     createSelector(
//         selectors.selectById(id),
//         tasks => tasks,
//     );
// }
export const selectorsTasks = tasksAdapter.getSelectors<RootStore>(state=>state.tasks);
