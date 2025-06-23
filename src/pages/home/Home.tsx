
import homeHeroBg from '@image/home-hero-bg.avif';
import heroHomeMenbersOfMbl from '@image/hero-home-menbers-of-mbl.avif';
import heroHomeMenbersOfMblMobile from '@image/hero-image-mobile.avif';
import oneFestival from '@image/one-festival.svg';
import vetMontanha from '@image/vet-montanha.svg';

import VideoHomeHero from './VideoHero/VideoHomeHero';
import ImageGrid from './ImageGrid/ImageGrid'
import InfiniteSlider from './InfiniteSlider/InfiniteSlider';
import UltimasNoticiasGrid from './UltimasNoticiasGrid/UltimasNoticiasGrid'
import TimelineMbl from './TimelineMbl/TimelineMbl'
import LojaMbl from './LojaMbl/LojaMbl'

import Button from '@/components/Button';

export default function Home() {
  return (
    <div className="container mt-10">
      <div>
        <div
          className=" lg:w-full w-screen max-w-none relative left-1/2 -translate-x-1/2 lg:mt-0 mt-36 hero-home"
          style={{
            backgroundImage: `url(${homeHeroBg})`,
          }}
        >
          <img className="lg:block hidden lg:w-3/4 lg:mt-[-90px]" src={heroHomeMenbersOfMbl} alt="Membros do MBL" />
          <img className="block lg:hidden mt-[-80px] lg:mt-0" src={heroHomeMenbersOfMblMobile} alt="Membros do MBL" />

        </div>

        <VideoHomeHero />

        <div className="text-blue-200 flex flex-col justify-center text-center">
          <h1 className='mb-5'>Juntos pelo Brasil que Sonhamos!</h1>
          <p className="big-body max-w-[559px] self-center">
            Unimos pessoas que desejam marcar sua geração e entregamos a elas oportunidades
            reais de agir hoje, para começarem a construir um legado único para o seu país, em cada uma das
            nossas iniciativas.
          </p>
        </div>

        <section className="bg-yellow-500 mt-10 rounded-[20px] py-8 mb-20">
          <div className="flex flex-col md:flex-row justify-center mb-5">
            <div className="flex justify-center">
              <img className="w-40 md:w-64 mb-5" src={oneFestival} alt="Festival" />
            </div>
            <div className="flex flex-col gap-3 justify-center items-center px-4 md:px-12 md:py-2">
              <h3 className="uppercase">O primeiro festival do MBL</h3>
              <p className="medium-body text-center w-full md:w-[470px] text-gray-300">
                O tradicional Congresso Nacional do MBL agora é Festival: mais ideias, mais cultura, mais ação.
                Prepare-se para um evento que vai além da política!
              </p>
              <p className="medium-body md:block hidden">Dia 29 de Novembro | Local: Komplexo Tempo</p>
              <p className="medium-body w-44 text-center block md:hidden">
                Dia 29 de Novembro  Local: Komplexo Tempo
              </p>
              <Button text="Garantir Meu Ingresso Agora" link="#" />
            </div>
          </div>
          <img className="md:mt-0 mt-8" src={vetMontanha} alt="Montanha" />
        </section>

        <ImageGrid />

        <section className='flex flex-col mt-20'>
          <h2 className='text-center'>Nossos Porta-vozes</h2>
          <InfiniteSlider />
          <Button className='mt-5 self-center' text="Conheça todos porta-vozes" link="#" />
        </section>

        <section className='mt-20'>
          <h2 className='text-center mb-8'>Últimas notícias sobre o movimento</h2>

          <UltimasNoticiasGrid />
        </section>

        <section className='mt-20'>
            <TimelineMbl />
        </section>

        <section className='mt-20'>
            <h2 className='mb-5 text-center'>Loja MBL</h2>
            <LojaMbl/>
            <div className='flex justify-center'>
              <Button className='mt-10' text="Ir para Loja MBL" link="#" />
            </div>
        </section>
      </div>
    </div>
  );
}
