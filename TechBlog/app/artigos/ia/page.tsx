import Grid from "@/app/components/Grid";
import Title from "@/app/components/Title";
import ArtigosIA from "@/app/lib/ArtigosIA";

const brasil = () => {
  return (
    <>
      <Title title="Inteligência artificial" />
      <Grid artigos={ArtigosIA} />
    </>
  );
};

export default brasil;
