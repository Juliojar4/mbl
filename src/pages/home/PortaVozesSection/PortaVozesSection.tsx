import InfiniteSlider from './InfiniteSlider/InfiniteSlider';
import Button from '@/components/Button';

export default function PortaVozesSection() {
  return (
    <section className="flex flex-col mt-20">
      <h2 className="text-center">Nossos Porta-vozes</h2>
      <InfiniteSlider />
      <Button className="mt-5 self-center" text="Conheça todos porta-vozes" link="#" />
    </section>
  );
}
