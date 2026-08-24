import Grid from "./components/Grid";
import ArtigosPrincipal from "./lib/ArtigosPrincipal"
import Title from "./components/Title";
import Sobre from "./components/Sobre";

export default function Home() {
  return (
    <>
      <Sobre/>
      <Title title="Principais Artigos"/>
      <Grid artigos={ArtigosPrincipal}/>
    </>
  );
}
