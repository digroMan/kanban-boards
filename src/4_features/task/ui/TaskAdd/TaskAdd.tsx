import styles from './TaskAdd.module.scss'
import { FaPlus } from "react-icons/fa6";
import type { TTaskAddProps } from './TaskAdd.props'
import { Button } from '@mui/material'

export const TaskAdd = ({} : TTaskAddProps) => {
    return (
        <Button startIcon={<FaPlus/>}>Добавить новую задачу</Button>
    )
}