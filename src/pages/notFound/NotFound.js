import styles from './notFound.module.scss';
export default function NotFound(){
    return (
        <div className={styles.notFound}>
            <h2 className={styles.notFound__title}>Упс... Такой страницы не существует!</h2>
        </div>
    )
}
