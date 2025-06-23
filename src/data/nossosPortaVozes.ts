import cristianoBeraldo from '@image/cristiano-beraldo.avif';
import ricardoAlmeida from '@image/ricardo-almeida.webp';
import guto from '@image/guto.avif';
import renatoBattista from '@image/renato-battista.webp';
import amanda from '@image/amanda.webp';
import jota from '@image/jota.avif';
import pauloCruz from '@image/paulo-cruz.webp';

export interface PortaVoz {
  imagem: string;
  seguidores?: string[];
  nome: string;
}

const data: PortaVoz[] = [
  {
    imagem: cristianoBeraldo,
    seguidores: ['+16 mil Votos', '+263 mil Seguidores'],
    nome: 'Cristiano Beraldo',
  },
  {
    imagem: ricardoAlmeida,
    seguidores: ['+11 mil Seguidores'],
    nome: 'Ricardo Almeida',
  },
  {
    imagem: guto,
    seguidores: ['+150 mil Votos', '+1,3 mi Seguidores'],
    nome: 'Guto Zacarias',
  },
  {
    imagem: renatoBattista,
    seguidores: ['+54 mil Votos', '+356 mil Seguidores'],
    nome: 'Renato Battista',
  },
  {
    imagem: amanda,
    seguidores: ['+40 mil Votos', '+1 mi Seguidores'],
    nome: 'Amanda Vettorazzo',
  },
  {
    imagem: jota,
    seguidores: ['+422 mil Seguidores'],
    nome: 'Jota',
  },
  {
    imagem: pauloCruz,
    seguidores: ['+125 mil Seguidores'],
    nome: 'Paulo Cruz',
  },
];

export default data;
