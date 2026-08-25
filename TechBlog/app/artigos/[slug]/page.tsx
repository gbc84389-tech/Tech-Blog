import Title from "@/app/components/Title";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Styles from "./DetalheArtigo.module.css";
import ArtigosPrincipal from "@/app/lib/ArtigosPrincipal";
import ArtigosIA from "@/app/lib/ArtigosIA";
import ArtigosBrasil from "@/app/lib/ArtigosBrasil";
import ArtigosInovacao from "@/app/lib/ArtigosInovacao";
import ArtigosLinguagem from "@/app/lib/ArtigosLinguagem";
import slugify from "slugify";

const artigos = [
  ...ArtigosBrasil,
  ...ArtigosIA,
  ...ArtigosInovacao,
  ...ArtigosLinguagem,
  ...ArtigosPrincipal,
];

export function generateStaticParams() {
  return artigos.map((artigo) => ({
    slug: slugify(artigo.titulo, {
      lower: true,
      strict: true,
    }),
  }));
}

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const artigo = artigos.find((artigo) => 
        slugify(artigo.titulo, {
            lower:true,
            strict:true,
        }) === slug
    )

    if(!artigo) {
        return{
            title: "Artigo nao encontrado | TechBlog",
            description: "O artigo clicado nao foi encontrado"
        }
    }

    return{
        title: `${artigo.titulo} | TechBlog`,
        description: artigo.descricao,
    }
}

const DetalheArtigo = async ({ params }: Props) => {
  const { slug } = await params;

  const clicado = artigos.find(
    (artigo) =>
      slugify(artigo.titulo, {
        lower: true,
        strict: true,
      }) === slug,
  );

  if (!clicado) notFound();

  const { titulo, autor, datapublicacao, conteudoartigo } = clicado;

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

export default DetalheArtigo;
