import revistaValete from '@image/revista-valet-presente-argentina.webp';
import appValetMobile from '@image/app-valet-mobile.webp';
import arteDaGuerra from '@image/arte-da-guerra.avif';

export interface ColCardOneType {
  imagem: string;
  titulo: string;
  descricao: string;
  alt: string;
  url: string;
}

const data: ColCardOneType[] = [
  {
    imagem: revistaValete,
    titulo: 'Revista Valete',
    descricao:
      'Conteúdos dos mais diversos temas. De economia a filosofia, de política a história, de cultura a culinária, para ler e aprender no conforto da sua casa.',
    alt: 'Revista Valete',
    url: '#',
  },
  {
    imagem: appValetMobile,
    titulo: 'Valete+',
    descricao:
      'Aplicativo que reúne conhecimento e cultura, com diversos conteúdos para você se aprofundar em temas relevantes e transformadores.',
    alt: 'Valete +',
    url: '#',
  },
  {
    imagem: arteDaGuerra,
    titulo: 'Clube do Livro',
    alt: 'Clube do Livro',
    descricao:
      'Nossa comunidade de leitura que busca as conexões necessárias para resgatar a cultura, a literatura, a identidade e o imaginário brasileiro.',
    url: '#',
  },
];

export default data;
