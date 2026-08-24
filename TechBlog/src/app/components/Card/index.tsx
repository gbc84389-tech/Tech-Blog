import { ArtigoTipagem } from "@/app/types/types";
import Styles from "./Card.module.css";
import Link from "next/link";

type Props = {
  artigos: ArtigoTipagem;
};

const Card = ({ artigos }: Props) => {
  const { categoria, id, titulo, autor, datapublicacao, conteudoartigo, descricao } =
    artigos;

  return (
    <Link href={`/artigos/${categoria}/${id}`} className={Styles.Card}>
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
