"use client"

import { useState } from "react";
import styles from "./Header.module.css";
import Link from "next/link";

const Header = () => {
  const [aberto, setAberto] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.header__logo}>
          <Link href="/">Tech-Blog</Link>
        </h1>

        <button
          className={styles.header__hamburger}
          onClick={() => setAberto(!aberto)}
          aria-label={aberto ? "Fechar menu" : "Abrir menu"}
        >
          ☰
        </button>

        <nav
          className={`${styles.header__nav} ${
            aberto ? styles.header__navAberto : ""
          }`}
        >
          <Link href="/">Início</Link>
          <Link href="/artigos/brasil">Brasil</Link>
          <Link href="/artigos/inovacoes">Inovacoes</Link>
          <Link href="/artigos/linguagem">Linguagens</Link>
          <Link href="/artigos/ia">IA</Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
