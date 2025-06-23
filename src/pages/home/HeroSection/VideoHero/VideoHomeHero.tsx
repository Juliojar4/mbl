import { useState } from 'react';
import thumbnail from '@image/sddefault.webp';

export default function VideoHomeHero() {
  const [showIframe, setShowIframe] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const handlePlay = () => {
    setShowIframe(true);
  };

  return (
    <div className="relative w-10/12 lg:w-[400px] h-[225px] mx-auto lg:mt-[-140px] lg:top-0 top-[-55px] overflow-hidden">
      {/* Thumbnail + botão */}
      {!iframeLoaded && (
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 z-10"
          style={{ backgroundImage: `url(${thumbnail})` }}
        >
          {!showIframe && (
            <button
              className="absolute top-1/2 left-1/2 w-[68px] h-[48px] -translate-x-1/2 -translate-y-1/2 cursor-pointer border-none bg-transparent"
              onClick={handlePlay}
              aria-label="Play"
              type="button"
            >
              <svg viewBox="0 0 68 48" width="100%" height="100%">
                <path
                  d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55
                        C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,
                        5.42,6.19C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,
                        5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                  fill="#212121"
                  fillOpacity="0.8"
                />
                <path d="M45,24L27,14v20z" fill="#fff" />
              </svg>
            </button>
          )}
        </div>
      )}

      {/* Iframe carregando por trás do thumbnail */}
      {showIframe && (
        <iframe
          className="absolute inset-0 w-full h-full z-0"
          src="https://www.youtube.com/embed/HgJONCviknA?start=3&autoplay=1"
          title="YouTube video"
          allow="autoplay; encrypted-media"
          allowFullScreen
          onLoad={() => setIframeLoaded(true)}
        />
      )}
    </div>
  );
}
