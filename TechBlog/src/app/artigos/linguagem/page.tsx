import Grid from "@/app/components/Grid";
import Title from "@/app/components/Title";
import ArtigosLinguagem from "@/app/lib/ArtigosLinguagem";

const brasil = () => {
  return (
    <>
      <Title title="Linguagens de programação" />
      <Grid artigos={ArtigosLinguagem} />
    </>
  );
};

export default brasil;
