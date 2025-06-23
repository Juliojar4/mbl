import amandaEOruam from '@image/amanda-e-oruam.jpg';
import kimKataguiri from '@image/kim-kataguiri.jpg';
import educacaoFinanceira from '@image/educação-financeira-guto-zacarias.jpg';

export interface UltimaNoticia {
  imagem: string;
  title: string;
  resumo: string;
  alt: string;
  link: string;
}

const data: UltimaNoticia[] = [
  {
    imagem: amandaEOruam,
    title: 'O que é o “Projeto Anti-Oruam”, protocolado por vereadora de São Paulo',
    resumo:
      'Proposta apresentada por Amanda Vettorazzo (União Brasil) quer proibir a Prefeitura da capital...',
    alt: 'Imagem com o cantor Orum e a vereadora Amanda Vettorazzo',
    link: '#',
  },
  {
    imagem: kimKataguiri,
    title: 'Kataguiri propõe pena de até 25 anos para estupro de vulnerável',
    resumo:
      'O deputado federal Kim Kataguiri (União-SP) apresentou, nesta quarta-feira (26), o Projeto de Lei…',
    alt: 'Deputado Kim Kataguiri discursando na câmara',
    link: '#',
  },
  {
    imagem: educacaoFinanceira,
    title: 'Alesp aprova projeto de educação financeira nas escolas de São Paulo',
    resumo:
      'Autor da proposta é o deputado estadual Guto Zacarias (Novo), vice-líder do governo Tarcísio...',
    alt: 'Pessoa colocando uma moeda em uma cofre',
    link: '#',
  },
];

export default data;
