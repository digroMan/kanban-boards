import type { EntityState } from "@reduxjs/toolkit"

export type TTask = {
    id: string,
    title: string,
    text: string,
    listId: number,
}

export type TTasks=TTask[]

export type TTasksState = EntityState<TTask, string>; 