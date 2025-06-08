import { tasksSlice } from '../../../5_entities/task/model/tasks.slice';
import { useMemo } from 'react';
import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { listsSlice } from '../../../5_entities/task copy/model/list.slice';

const rootActions = {
    ...tasksSlice.actions,
    ...listsSlice.actions,
}

export const useActions = () => {
    const dispatch = useDispatch();
    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
}