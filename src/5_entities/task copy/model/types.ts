import type { EntityState } from "@reduxjs/toolkit"

export type TList = {
    id: string,
    title: string,
    tasksId: string[],
}

export type TLists=TList[]

export type TTasksState = EntityState<TList, string>; 