import oneFestival from '@image/one-festival.svg';
import vetMontanha from '@image/vet-montanha.svg';

import Button from '@/components/Button';

export default function FestivalSection() {
  return (
    <section className="bg-yellow-500 mt-10 rounded-[20px] py-8 mb-20">
      <div className="flex flex-col md:flex-row justify-center mb-5">
        <div className="flex justify-center">
          <img className="w-40 md:w-64 mb-5" src={oneFestival} alt="Banner do One Festival MBL" />
        </div>
        <div className="flex flex-col gap-3 justify-center items-center px-4 md:px-12 md:py-2">
          <h3 className="uppercase">O primeiro festival do MBL</h3>
          <p className="medium-body text-center w-full md:w-[470px] text-gray-300">
            O tradicional Congresso Nacional do MBL agora é Festival: mais ideias, mais cultura, mais ação. Prepare-se
            para um evento que vai além da política!
          </p>
          <p className="medium-body md:block hidden">Dia 29 de Novembro | Local: Komplexo Tempo</p>
          <p className="medium-body w-44 text-center block md:hidden">Dia 29 de Novembro Local: Komplexo Tempo</p>
          <Button text="Garantir Meu Ingresso Agora" link="#" />
        </div>
      </div>
      <img className="md:mt-0 mt-8" src={vetMontanha} alt="Ilustração de montanha" />
    </section>
  );
}
