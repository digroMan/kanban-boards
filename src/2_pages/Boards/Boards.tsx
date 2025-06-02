import cn from 'classnames'
import styles from './Boards.module.scss'
import { Board } from '../../3_widgets/Board'
import { useEffect } from 'react'
import { useActions } from '../../6_shared/lib/hooks/useActions'

const TASKS_NORMALIZED = {
    byId: {
        'task-1': {id: 'task-1', title: 'Заголовок задачи 1', text:'Текст задачи 1', listId: 'listId-1'},
        'task-2': {id: 'task-2', title: 'Заголовок задачи 2', text:'Текст задачи 2', listId: 'listId-1'},
        'task-3': {id: 'task-3', title: 'Заголовок задачи 3', text:'Текст задачи 3', listId: 'listId-1'},
        'task-4': {id: 'task-4', title: 'Заголовок задачи 4', text:'Текст задачи 4', listId: 'listId-2'},
        'task-5': {id: 'task-5', title: 'Заголовок задачи 5', text:'Текст задачи 5', listId: 'listId-2'},
        'task-6': {id: 'task-6', title: 'Заголовок задачи 6', text:'Текст задачи 6', listId: 'listId-3'},
        'task-7': {id: 'task-7', title: 'Заголовок задачи 7', text:'Текст задачи 7', listId: 'listId-3'},
    },
    allIds: ['task-1','task-2','task-3','task-4','task-5','task-6','task-7'],
}
export const Boards = () => {
    const {addMany} = useActions();

    useEffect(() => {
        addMany(Object.values(TASKS_NORMALIZED.byId))
    }, [])
    
    return (
        <section>
            <div className={cn('container-box', styles.container)}>
                <Board listId={'listId-1'} title='К работе'/>
                <Board listId={'listId-2'} title='В работе'/>
                <Board listId={'listId-3'} title='Выполнено'/>
            </div>
        </section>
    )
}