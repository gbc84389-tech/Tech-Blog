import Styles from "./Sobre.module.css";

const Sobre = () => {
  return (
    <>
      <div className={Styles.Sobre__container}>
        <h2 className={Styles.Sobre__titulo}>Sobre o Tech-Blog</h2>
        <p className={Styles.Sobre__desc}>
          Este é um espaço dedicado a tecnologia, programação e desenvolvimento.
          Aqui você encontra conteúdos sobre o mundo da tecnologia, dicas para
          quem está começando na área e reflexões sobre como as ferramentas
          digitais estão transformando o nosso dia a dia. Nosso objetivo é
          compartilhar informações de forma simples e acessível, tornando
          assuntos relacionados à tecnologia mais fáceis de entender e
          despertando a curiosidade de quem deseja aprender cada vez mais.
        </p>
      </div>
    </>
  );
};

export default Sobre;
