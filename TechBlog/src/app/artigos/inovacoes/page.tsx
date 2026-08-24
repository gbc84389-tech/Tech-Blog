import Grid from "@/app/components/Grid";
import Title from "@/app/components/Title";
import ArtigosInovacao from "@/app/lib/ArtigosInovacao";

const inovacoes = () => {
  return (
    <>
      <Title title="Inovações" />
      <Grid artigos={ArtigosInovacao} />
    </>
  );
};

export default inovacoes;
