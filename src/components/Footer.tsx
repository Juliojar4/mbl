import React from 'react';
import Logo from '@image/Movimento_Brasil_Livre_logo.png';  
import Jornal from '@image/jornal.svg'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const icons = ['youtube', 'x', 'tiktok', 'instagram', 'facebook']

  return (
    <footer className="text-center p-4 pb-0">
    <div className='container-footer-small lg:grid grid-cols-2 gap-16'>
      <div className='flex flex-col items-baseline'>
        <div className='flex items-center gap-3 my-9 lg:my-0'>
          <img className='w-8 h-8' src={Jornal} alt="" />
          <h2 className='!text-[1.5rem]'>Assine a nossa newsletter</h2>
        </div>
        <p className='text-left mb-10 medium-body font-normal'>Como assinante da nossa newsletter, você recebe análises exclusivas sobre temas relevantes para sua vida e informações em primeira mão sobre diversas ações do MBL e da Valete.</p>
      </div>
      <div>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-gray-800 text-left text-xs font-semibold mb-1">
                Nome
              </label>
              <input
                id="name"
                type="text"
                placeholder="João Silva"
                className="w-full rounded-xl bg-neutral-100 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-800 text-left text-xs font-semibold mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="jsilva@gmail.com"
                className="w-full rounded-xl bg-neutral-100 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
          </div>

          {/* Checkbox */}
          <div className="flex items-start gap-3 my-4">
            <input
              id="accept"
              type="checkbox"
              className="accent-orange-300 mt-1"
            />
            <label htmlFor="accept" className="text-left text-xs text-gray-800">
              Concordo em receber a newsletter do MBL e parceiros. Podendo cancelar
              a qualquer momento. Confira a nossa{' '}
              <a href="#" className="underline">
                Política de Privacidade
              </a>
              .
            </label>
          </div>

          {/* Botão */}
          <button
            type="submit"
            className="
            w-full
            bg-blue-300 hover:bg-red-300
            text-white
            font-semibold
            rounded-lg
            py-2
            transition
          "
          >
            Assine gratuitamente agora
          </button>
        </form>
      </div>
    </div>
    <div className='w-screen max-w-none relative left-1/2 -translate-x-1/2 bg-[#eeeeee] py-5 mt-10'>
      <div className='flex lg:flex-row flex-col items-center justify-between gap-5 lg:gap-0 container-footer-small'>
        <div className='flex flex-col items-center'>
          <img className='w-32 mb-3' src={Logo} alt="" />
          <p className='text-gray-500 text-[.625rem]'>© MBL {currentYear} | Todos os direitos reservados.</p>
        </div>
        <div className='flex gap-3'>
          {icons.map((el, id) => (
            <div className='flex items-center' key={id}>
              <img src={`/src/assets/images/${el}.svg`} className='w-5' alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer;