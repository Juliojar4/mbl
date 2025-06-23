import dedoApontando from '@image/dedo-apontando.webp';
import maquinaDeCortes from '@image/maquina-de-cortes.avif';

export interface ColCardTwoType {
  imagem: string;
  titulo: string;
  alt: string;
  descricao: string;
  url?: string;
  botoes?: { textButton: string; url: string }[];
}

const data: ColCardTwoType[] = [
  {
    imagem: dedoApontando,
    titulo: 'Academia MBL',
    alt: 'Dedo apontando para o usuário',
    descricao:
      'Queremos que você seja nosso político eleito, chefe de gabinete, um coordenador ou um intelectual.',
    url: '#',
  },
  {
    imagem: maquinaDeCortes,
    titulo: 'Cursos',
    alt: 'Munitor estilo MAC com o site Maquina de cortes aberto',
    descricao:
      'Conheça nossos cursos elaborados para o seu desenvolvimento intelectual e profissional.',
    botoes: [
      { textButton: 'Máquina de Cortes', url: '#' },
      { textButton: 'Filosofia Política', url: '#' },
      { textButton: 'Segredos da Escrita', url: '#' },
      { textButton: 'História da Humanidade', url: '#' },
    ],
  },
];

export default data;
