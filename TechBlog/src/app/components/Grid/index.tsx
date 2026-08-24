import { ArtigoTipagem } from "@/app/types/types";
import Card from "../Card";
import Styles from "./Grid.module.css"

type Props = {
  artigos: ArtigoTipagem[]
};

const Grid = ({ artigos }: Props) => {
  return (
    <section className={Styles.Grid}>
      {artigos.map((artigo) => (<Card key={artigo.id} artigos={artigo} />))}
    </section>
  );
};

export default Grid;
