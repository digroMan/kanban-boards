import styles from './Board.module.scss'
import type { TBoardProps } from './Board.props'
import { TaskItem } from '../../5_entities/task'
import { List, ListItem, Typography } from '@mui/material'
import { TaskAdd } from '../../4_features/task'
import { useSelector } from 'react-redux'
import { selectorsAllTasks, selectTasksByListId } from '../../5_entities/task/model/selectors'
import { useEffect } from 'react'

const LISTS_NORMALIZED = {
    byId: {
        1: {id: 1, title: 'К работе:', tasksId: [1,2,3]},
        2: {id: 2, title: 'В работе:', tasksId: [4,5]},
        3: {id: 3, title: 'Выполнено:', tasksId: [6,7]},
    },
    allIds: [1,2,3],
}

export const Board = ({listId, title} : TBoardProps) => {
    const taskList = useSelector(selectorsAllTasks);
    const tasksByListId = useSelector(selectTasksByListId);
    
    useEffect(() => {
        if(taskList.length === 0) return
        // console.log(taskList)
        console.log(tasksByListId(listId))
    },[taskList])

    return (
        <div className={styles.container}>
            <Typography variant='h3'>{title}</Typography>
            <List>
                {taskList.length &&
                    taskList.map((taskItem) => (
                        <ListItem key={taskItem.id}>
                            <TaskItem title={taskItem.title} text={taskItem.text}/>
                        </ListItem>
                    ))
                }
            </List>
            <TaskAdd/>
        </div>
    )
}