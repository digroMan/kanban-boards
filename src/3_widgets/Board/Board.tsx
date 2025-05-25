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
        1: {id: 1, title: 'Заголовок задачи 1', text:'Текст задачи 1', listId: 1},
        2: {id: 2, title: 'Заголовок задачи 2', text:'Текст задачи 2', listId: 1},
        3: {id: 3, title: 'Заголовок задачи 3', text:'Текст задачи 3', listId: 1},
        4: {id: 4, title: 'Заголовок задачи 4', text:'Текст задачи 4', listId: 2},
        5: {id: 5, title: 'Заголовок задачи 5', text:'Текст задачи 5', listId: 2},
        6: {id: 6, title: 'Заголовок задачи 6', text:'Текст задачи 6', listId: 3},
        7: {id: 7, title: 'Заголовок задачи 7', text:'Текст задачи 7', listId: 3},
    },
    allIds: [1,2,3,4,5,6,7],
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
                {TASKS_NORMALIZED.byId.map(task => (
                    <ListItem>
                        <TaskItem title={task.title} text={task.text}/>
                    </ListItem>
                ))}
            </List>
            <TaskAdd/>
        </div>
    )
}