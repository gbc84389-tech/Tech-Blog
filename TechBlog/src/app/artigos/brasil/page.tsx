import Grid from "@/app/components/Grid";
import Title from "@/app/components/Title";
import ArtigosBrasil from "@/app/lib/ArtigosBrasil";

const brasil = () => {
  return (
    <>
      <Title title="Artigos Brasil" />
      <Grid artigos={ArtigosBrasil} />
    </>
  );
};

export default brasil;
