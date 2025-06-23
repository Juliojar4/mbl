import Button from '@/components/Button';


export default function NotFound() {
    return  (
      <section className="container mt-24">
        <div className='flex flex-col my-24 gap-5 justify-center items-center'>
          <h1 className="text-black text-center">Página não encontrada</h1>
          <p>ERROR 404</p>
          <Button text="Ir para a Home" link="/" />
        </div>
      </section>
    )
  }