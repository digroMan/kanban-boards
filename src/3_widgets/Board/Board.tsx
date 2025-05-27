import cn from 'classnames'
import styles from './Board.module.scss'
import type { TBoardProps } from './Board.props'
import { TaskItem } from '../../5_entities/task'
import { List, ListItem, Typography } from '@mui/material'
import { TaskAdd } from '../../4_features/task'

const TASKS = [
    {
        title: 'Заголовок задачи 1',
        text: 'Текст задачи 1'
    },
    {
        title: 'Заголовок задачи 2',
        text: 'Текст задачи 2'
    },
]

const TASKS_NORMALIZED = {
    byId: {
        'task1': {id: 'task1', title: 'Заголовок задачи 1', text:'Текст задачи 1', listId: 1},
        'task2': {id: 'task2', title: 'Заголовок задачи 2', text:'Текст задачи 2', listId: 1},
        'task3': {id: 'task3', title: 'Заголовок задачи 3', text:'Текст задачи 3', listId: 1},
        'task4': {id: 'task4', title: 'Заголовок задачи 4', text:'Текст задачи 4', listId: 2},
        'task5': {id: 'task5', title: 'Заголовок задачи 5', text:'Текст задачи 5', listId: 2},
        'task6': {id: 'task6', title: 'Заголовок задачи 6', text:'Текст задачи 6', listId: 3},
        'task7': {id: 'task7', title: 'Заголовок задачи 7', text:'Текст задачи 7', listId: 3},
    },
    allIds: ['task1','task2','task3','task4','task5','task6','task7'],
}

const LISTS_NORMALIZED = {
    byId: {
        1: {id: 1, title: 'К работе:', tasksId: [1,2,3]},
        2: {id: 2, title: 'В работе:', tasksId: [4,5]},
        3: {id: 3, title: 'Выполнено:', tasksId: [6,7]},
    },
    allIds: [1,2,3],
}

export const Board = ({title} : TBoardProps) => {
    return (
        <div className={styles.container}>
            <Typography variant='h3'>{title}</Typography>
            <List>
                {Object.entries(TASKS_NORMALIZED.byId).map(([_, value]) => (
                    <ListItem>
                        <TaskItem title={value.title} text={value.text}/>
                    </ListItem>
                ))}
            </List>
            <TaskAdd/>
        </div>
    )
}