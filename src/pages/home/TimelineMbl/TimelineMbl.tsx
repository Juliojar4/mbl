export default function TimelineMbl() {
    return (
        <div>
          <h2 className='text-center mb-8'>Timeline do Movimento Brasil Livre</h2>
          <div className='flex flex-col'>
            <div className='grid grid-cols-1 lg:grid-cols-[7fr_5fr] lg:gap-10 
              lg:w-full w-screen max-w-none relative left-1/2 -translate-x-1/2'>
            <div className='flex justify-end items-center relative '>
              <div className='flex flex-row-reverse items-end lg:block bg-blue-300 h-full w-full lg:w-[85%] lg:pt-5'>
                <div className="flex flex-col leading-none text-right">
                  <span className="text-white text-[140px] font-sans font-bold">20</span>
                  <span className="text-white text-[140px] font-sans font-bold mt-[-30px]">14</span>
                </div>
                <img
                  className='lg:absolute static lg:w-[370px] w-[275px] bottom-0 left-[-40px] mix-blend-multiply'
                  src="src/assets/images/grupo-mbl-jovem.avif"
                  alt="Grupo MBL jovem reunido"
                />
              </div>
            </div>
              <div className="flex lg:block justify-center">
                <div className='w-[320px] py-5'>
                  <div className='mb-5'>
                    <h3 className='mb-3'>O nascimento</h3>
                    <p className='text-gray-700 medium-body font-normal'>Nasce o MBL, movimento que influenciou diretamente a política e o destino do país, criado por Renan Santos, Kim Kataguiri, Alexandre Santos, Rafael Rizzo e outros.</p>
                  </div>
                  <div className='mb-5'>
                    <h3 className='mb-3'>Primeira manifestação</h3>
                    <p className='text-gray-700 medium-body font-normal'>Realizada no MASP, em São Paulo, reunindo cerca de 5 mil pessoas.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-[7fr_5fr] lg:gap-10 
              lg:w-full w-screen max-w-none relative left-1/2 -translate-x-1/2'>
              <div className='flex justify-end items-center relative'>
                <div className='bg-orange-300 h-full w-full lg:w-[85%]'>
                  <div className="flex flex-col h-full justify-center leading-none text-right">
                    <span className="text-white text-[140px] font-sans font-bold">20</span>
                    <span className="text-white text-[140px] font-sans font-bold mt-[-30px]">15</span>
                  </div>
                </div>
              </div>
              <div className="flex lg:block justify-center">
                <div className='w-[320px] py-5'>
                  <div className='mb-5'>
                    <h3 className='mb-3'>Campanhas contra Dilma Rousseff</h3>
                    <p className='text-gray-700 medium-body font-normal'>Convoca e organiza as manifestações nacionais contra o governo Dilma Rousseff, com atos realizados em diversas cidades brasileiras.</p>
                  </div>
                  <div className='mb-5'>
                    <h3 className='mb-3'>Um ato histórico</h3>
                    <p className='text-gray-700 medium-body font-normal'>Realiza a "Marcha pela Liberdade", uma caminhada de 1100 km de São Paulo a Brasília pelo impeachment de Dilma Rousseff. Culminando com a entrega do pedido de impeachment à oposição.</p>
                  </div>
                  <div className='mb-5'>
                    <h3 className='mb-3'>O primeiro congresso</h3>
                    <p className='text-gray-700 medium-body font-normal'>É realizada a primeira edição do congresso que se tornou referência política no país em suas mais de 10 edições de sucesso.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-10 
              lg:w-full w-screen max-w-none relative left-1/2 -translate-x-1/2'>
              <div className='flex justify-end items-center relative overflow-y-clip'>
                <div className='bg-blue-300 h-full w-full lg:w-[85%] lg:pt-9'> 
                  <div className="flex flex-col leading-none text-right">
                    <span className="text-white text-[140px] font-sans font-bold">20</span>
                    <span className="text-white text-[140px] font-sans font-bold mt-[-30px]">16</span>
                  </div>
                  <img
                    className='absolute w-[310px] bottom-[-50px] left-[-20px] mix-blend-multiply'
                    src="src/assets/images/kim-e-ranam-jovens.avif"
                    alt="Kim e Ranam jovens"
                  />
                </div>
              </div>
              <div className="flex lg:block justify-center">
                <div className='w-[320px] pb-16 lg:py-16'>
                  <div className='mb-5'>
                    <h3 className='mb-3'>Impeachment de Dilma Rousseff</h3>
                    <p className='text-gray-700 medium-body font-normal'>Culminação do primeiro objetivo do movimento.</p>
                  </div>
                  <div className='mb-5'>
                    <h3 className='mb-3'>Eleições municipais</h3>
                    <p className='text-gray-700 medium-body font-normal'>MBL lança seus primeiros candidatos.</p>
                  </div>
                </div>
              </div>
            </div>

            <a className='relative mt-[-24px] bg-black text-white font-bold py-2 px-5 uppercase text-2xl rounded-lg self-center ' href="">Continua</a>
          </div>
        </div>
    )
}