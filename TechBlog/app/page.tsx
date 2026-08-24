import Grid from "@/app/components/Grid";
import ArtigosPrincipal from "@/app/lib/ArtigosPrincipal"
import Title from "@/app/components/Title";
import Sobre from "@/app/components/Sobre";

export default function Home() {
  return (
    <>
      <Sobre/>
      <Title title="Principais Artigos"/>
      <Grid artigos={ArtigosPrincipal}/>
    </>
  );
}
