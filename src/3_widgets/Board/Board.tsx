import styles from './Board.module.scss'
import type { TBoardProps } from './Board.props'
import { TaskItem } from '../../5_entities/task'
import { List, ListItem, Typography } from '@mui/material'
import { TaskAdd } from '../../4_features/task'
import { useSelector } from 'react-redux'
import { selectAll, selectTasksByListId } from '../../5_entities/task/model/selectors'
import { useEffect } from 'react'

export const Board = ({listId, title} : TBoardProps) => {
    const tasksList = useSelector(selectTasksByListId(listId));

    return (
        <div className={styles.container}>
            <Typography variant='h3'>{title}</Typography>
            <List>
                {tasksList.length &&
                    tasksList.map((taskItem) => (
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