import Title from "@/app/components/Title";
import { notFound } from "next/navigation";
import Styles from "./DetalheArtigo.module.css";
import ArtigosPrincipal from "@/app/lib/ArtigosPrincipal";
import ArtigosIA from "@/app/lib/ArtigosIA";
import ArtigosBrasil from "@/app/lib/ArtigosBrasil";
import ArtigosInovacao from "@/app/lib/ArtigosInovacao";
import ArtigosLinguagem from "@/app/lib/ArtigosLinguagem";

export function generateStaticParams() {
    const artigos = [
        ...ArtigosBrasil,
        ...ArtigosIA,
        ...ArtigosInovacao,
        ...ArtigosLinguagem,
        ...ArtigosPrincipal
    ];

    return artigos.map((artigo) => ({
        categoria: artigo.categoria,
        id: artigo.id.toString(),
    }));
}

type Props = {
  params: Promise<{
    categoria: string;
    id: string;
  }>;
};

const DetalheArtigoBrasil = async ({ params }: Props) => {
  const { categoria, id } = await params;
  const idv = parseInt(id);

  let artigos;

  switch (categoria) {
    case "principal":
      artigos = ArtigosPrincipal;
      break;

    case "brasil":
      artigos = ArtigosBrasil;
      break;

    case "ia":
      artigos = ArtigosIA;
      break;

    case "inovacoes":
      artigos = ArtigosInovacao;
      break;

    case "linguagem":
      artigos = ArtigosLinguagem;
      break;

    default:
      notFound();
  }

  const clicado = artigos.find((artigo) => artigo.id === idv);
  if (!clicado) notFound();

  const { titulo, descricao, autor, datapublicacao, conteudoartigo } = clicado;
  return (
    <>
      <Title title={titulo} />
      <div className={Styles.Detalhe__container}>
        <p className={Styles.Detalhe__conteudo}>{conteudoartigo}</p>
        <p className={Styles.Detalhe__autor}>{autor}</p>
        <p className={Styles.Detalhe__data}>{datapublicacao}</p>
      </div>
    </>
  );
};

export default DetalheArtigoBrasil;
