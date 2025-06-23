import amandaMoletomAzul from '@image/amanda-com-moletom-azul.webp';
import gutoCamisaBranca from '@image/guto-com-camisa-branca-do-mbl.webp';
import kimCamisaPreta from '@image/kim-com-camisa-preta-do-mbl.webp';
import renamCamisaAmarela from '@image/renam-com-camisa-amarela.webp';
import pauloMoletom from '@image/paulo-com-moletom-mbl.webp';
import moletomValet from '@image/moletom-valet.webp';

export interface ProdutoLoja {
  imagem: string;
  link: string;
}

const data: ProdutoLoja[] = [
  { imagem: amandaMoletomAzul, link: '#' },
  { imagem: gutoCamisaBranca, link: '#' },
  { imagem: kimCamisaPreta, link: '#' },
  { imagem: renamCamisaAmarela, link: '#' },
  { imagem: pauloMoletom, link: '#' },
  { imagem: moletomValet, link: '#' },
];

export default data;
