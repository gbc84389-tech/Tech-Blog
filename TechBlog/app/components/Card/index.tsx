import { ArtigoTipagem } from "@/app/types/types";
import Styles from "./Card.module.css";
import Link from "next/link";
import slugify from 'slugify'

type Props = {
  artigos: ArtigoTipagem;
};

const Card = ({ artigos }: Props) => {
  const { id, titulo, autor, datapublicacao, conteudoartigo, descricao } =
    artigos;

    const slug = slugify(titulo, {
      lower: true,
      strict: true,
    })
  return (
    <Link href={`/artigos/${slug}`} className={Styles.Card}>
      <div className={Styles.Card__container}>
        <h3 className={Styles.Card__title}>{titulo}</h3>
        <img src="https://placehold.co/350x250" alt={titulo} />
        <p className={Styles.Card__descricao}>{descricao}</p>
        <p className={Styles.Card__autor}>{autor}</p>
        <p className={Styles.Card__date}>{datapublicacao}</p>
      </div>
    </Link>
  );
};

export default Card;
