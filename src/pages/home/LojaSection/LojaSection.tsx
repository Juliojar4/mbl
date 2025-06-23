import LojaMbl from '../LojaMbl/LojaMbl';
import Button from '@/components/Button';

export default function LojaSection() {
  return (
    <section className="mt-20">
      <h2 className="mb-5 text-center">Loja MBL</h2>
      <LojaMbl />
      <div className="flex justify-center">
        <Button className="mt-10" text="Ir para Loja MBL" link="#" />
      </div>
    </section>
  );
}
