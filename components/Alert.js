import styles from '/styles/alert.module.css'
import cn from 'classnames'

export default function Alert({ children, type }) {
    return (
        <div
            className={cn({
                [styles.success]: type === 'success',
                [styles.error]: type === 'error'
            })}
        >
            {console.log(type, "type")}
            {children}
        </div>
    )
}