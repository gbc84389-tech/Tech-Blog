import styles from "./Header.module.css"
import Link from "next/link"

const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <h1 className={styles.header__logo}>
                   <Link href="/">
                        Tech-Blog
                    </Link>
                </h1>
                <nav className={styles.header__nav}>
                    <Link href="/">Início</Link>
                    <Link href="/artigos/brasil">Brasil</Link>
                    <Link href="/artigos/inovacoes">Inovacoes</Link>
                    <Link href="/artigos/linguagem">Linguagens</Link>
                    <Link href="/artigos/ia">IA</Link>
                </nav>
            </header>
        </>
    )
}

export default Header