import homeHeroBg from '@image/home-hero-bg.avif';
import heroHomeMenbersOfMbl from '@image/hero-home-menbers-of-mbl.avif';
import heroHomeMenbersOfMblMobile from '@image/hero-image-mobile.avif';

import VideoHomeHero from './VideoHero/VideoHomeHero';

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center">
      <div
        className="lg:w-full w-screen max-w-none relative left-[54%] md:left-1/2 -translate-x-1/2 mt-36 hero-home"
        style={{ backgroundImage: `url(${homeHeroBg})` }}
      >
        <img className="lg:block hidden lg:w-3/4 lg:mt-[-90px]" src={heroHomeMenbersOfMbl} alt="Membros do MBL" />
        <img className="block lg:hidden mt-[-80px] lg:mt-0" src={heroHomeMenbersOfMblMobile} alt="Membros do MBL" />
      </div>

      <VideoHomeHero />

      <div className="text-blue-200 flex flex-col justify-center text-center">
        <h1 className="mb-5">Juntos pelo Brasil que Sonhamos!</h1>
        <p className="big-body max-w-[559px] self-center">
          Unimos pessoas que desejam marcar sua geração e entregamos a elas oportunidades reais de agir hoje, para
          começarem a construir um legado único para o seu país, em cada uma das nossas iniciativas.
        </p>
      </div>
    </section>
  );
}
