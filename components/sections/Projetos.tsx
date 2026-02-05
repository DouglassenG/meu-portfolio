import Carousel from "../ui/Carousel";

const Projetos = () => {
  return (
    <section className="py-20 px-4 md:px-20 flex flex-col items-center">
      <div className="mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
          Projetos
        </h2>
        <p className="text-lg text-foreground mt-2">
          Confira alguns dos meus projetos.
        </p>
      </div>

      <Carousel />
    </section>
  );
};

export default Projetos;
