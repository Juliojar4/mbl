import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/react-splide/css';

import nossosPortaVozesJson from '@/data/nossosPortaVozes';

interface nossosPortaVozesType {
  imagem: string;
  seguidores?: string[];
  nome: string;
}

const nossosPortaVozes: nossosPortaVozesType[] = nossosPortaVozesJson;

export default function InfiniteSlider() {
  return (
    <div
      className="
        relative overflow-hidden mb-5   
        [mask-image:linear-gradient(to_right,transparent_0%,black_12.5%,black_87.5%,transparent_100%)]
        [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_12.5%,black_87.5%,transparent_100%)]
      "
    >
      <Splide className='slide-infinites-slider-nossos-pota-voz'
        options={{
          type: 'loop',
          drag: false,
          arrows: false,
          pagination: false,
          gap: '2rem',
          autoWidth: true,
          speed: 0.8,
          autoScroll: {
            speed: 0.8,
          },
        }}
        extensions={{ AutoScroll }}
        aria-label="Infinite Slider"
      >
        {nossosPortaVozes.map((portaVoz, id) => (
          <SplideSlide key={id}>
            <div
              className="
           
                relative
                rounded-2xl  
                px-8 py-6 
                min-w-[200px]
                text-center font-semibold
                text-neutral-700 
              "
            >
            
                <img className="w-52 h-72" src={portaVoz.imagem} alt={portaVoz.nome} />
                <div className="absolute flex flex-col items-end justify-center gap-2 min-h-24 top-2/4 right-[-40px]">
                  {portaVoz.seguidores?.map((el) => (
                    <h4
                      key={el}
                      className="font-bold small-body w-fit bg-white text-red-300 px-8 py-3 rounded-full"
                    >
                      {el}
                    </h4>
                  ))}
             
              </div>
              <h3 className="text-red-300">{portaVoz.nome}</h3>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
