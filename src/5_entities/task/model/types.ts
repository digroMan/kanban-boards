import type { EntityState } from "@reduxjs/toolkit"

export type TTask = {
    id: string,
    title: string,
    text: string,
    listId: string,
}

export type TTasks=TTask[]

export type TTasksState = EntityState<TTask, string>; 