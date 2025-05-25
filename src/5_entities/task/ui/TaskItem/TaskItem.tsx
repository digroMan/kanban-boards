import cn from 'classnames'
import styles from './TaskItem.module.scss'
import type { TTaskItemProps } from './TaskItem.props'
import { Card, CardContent, CardHeader } from '@mui/material'

export const TaskItem = ({title, text} : TTaskItemProps) => {
    return (
        <Card>
            <CardHeader title={title} />
            <CardContent>{text}</CardContent>
        </Card>
    )
}