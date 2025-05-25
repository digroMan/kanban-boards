import cn from 'classnames'
import styles from './Boards.module.scss'
import { Board } from '../../3_widgets/Board'

export const Boards = () => {
    return (
        <section>
            <div className={cn('container-box', styles.container)}>
                <Board title='К работе'/>
                <Board title='В работе'/>
                <Board title='Выполнено'/>
            </div>
        </section>
    )
}