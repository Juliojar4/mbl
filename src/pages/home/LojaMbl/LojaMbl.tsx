import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/react-splide/css';

import LojaMblJson from '@/data/loja-mbl.json';

import Button from '@/components/Button';

export default function LojaMbl() {
  return (
<div
  className="
    w-screen 
    max-w-none 
    relative 
    left-1/2 
    -translate-x-1/2
    [mask-image:linear-gradient(to_right,transparent_0%,black_12.5%,black_87.5%,transparent_100%)]
    [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_12.5%,black_87.5%,transparent_100%)]
  "
>
  <Splide
    className="slide-infinites-slider-nossos-pota-voz"
    options={{
      type: 'loop',
      drag: false,
      arrows: false,
      pagination: false,
      gap: '2rem',
      autoWidth: true,
      speed: 2,
      autoScroll: {
        speed: 2,
      },
    }}
    extensions={{ AutoScroll }}
 
    aria-label="Infinite Slider"
  >
      {LojaMblJson.map((el, id) => (
        <SplideSlide key={id}>
          <img className="w-64" src={el.imagem} alt="Produto da Loja MBL" />
        </SplideSlide>
      ))}
  </Splide>
</div>

  );
}
                    