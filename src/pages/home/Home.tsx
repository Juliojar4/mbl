
import ImageGrid from './ImageGrid/ImageGrid';
import HeroSection from './HeroSection/HeroSection';
import FestivalSection from './FestivalSection/FestivalSection';
import PortaVozesSection from './PortaVozesSection/PortaVozesSection';
import UltimasNoticiasSection from './UltimasNoticiasSection/UltimasNoticiasSection';
import TimelineSection from './TimelineSection/TimelineSection';
import LojaSection from './LojaSection/LojaSection';

export default function Home() {
  return (
    <div className="container mt-10">
      <div>
        <HeroSection />
        <FestivalSection />
        <ImageGrid />
        <PortaVozesSection />
        <UltimasNoticiasSection />
        <TimelineSection />
        <LojaSection />
      </div>
    </div>
  );
}
