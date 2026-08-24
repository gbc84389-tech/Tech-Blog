import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                <p className={styles.footer__text}>Tech-Blog - Todos os Direitos Reservados</p>
            </footer>
        </>
    )
}

export default Footer