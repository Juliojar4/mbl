import colCardOneJson from '@/data/col-card-one.json';
import colCardTwoJson from '@/data/col-card-two.json';

import Button from '@/components/Button';


interface Botao {
    textButton: string;
    url: string;
}

interface ColCardOneType {
    imagem: string;
    titulo: string;
    alt: string;
    descricao: string;
    url: string;
}

interface ColCardTwoType {
    imagem: string;
    titulo: string;
    descricao: string;
    alt: string;
    url?: string;
    botoes?: Botao[];
}

const colCardOne: ColCardOneType[] = colCardOneJson;
const colCardTwo: ColCardTwoType[] = colCardTwoJson;

export default function ImageGrid() {
    return(
        <section className="mt-20">
            <div className="flex flex-col items-center text-center">
            <h2 className="text-2xl font-bold mb-4">Iniciativas MBL</h2>
            <p className="big-body w-[506px] max-w-full mb-10">
                Conheça nossos projetos para a refundação do Brasil através da transformação cultural, educacional e legislativa de todo Brasil.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 gap-10 w-full max-w-6xl">

                {colCardOne.map((card: ColCardOneType, index: number) => (
                    <div
                        key={index}
                        className="relative pt-40 mb-24 bg-white rounded-[20px] text-left p-8 transition box-shadown-card-grid"
                    >
                        <img src={card.imagem} alt={card.titulo} className="absolute mt-[-94px] left-1/2 -translate-x-1/2 top-0 w-[270px] h-64 object-contain rounded mb-4" />
                        <div className='flex flex-col h-full'>
                            <h3 className="text-lg font-semibold mb-2">{card.titulo}</h3>
                            <p className="text-gray-500 font-normal medium-body mb-4">{card.descricao}</p>
                            <Button className='w-fit mt-auto' text="Saiba Mais" link={card.url} />
                        </div>
                    </div>
                ))}

                {colCardTwo.map((card: ColCardTwoType, index: number) => (
                    <div
                        key={index}
                        className={`relative pt-40 bg-white text-left p-8 transition box-shadown-card-grid rounded-[20px] ${
                        index === 1 ? 'lg:col-span-2 ' : 'mb-20 lg:mb-0'
                        }`}
                    >
                        <img src={card.imagem} alt={card.alt} className="absolute left-1/2 -translate-x-1/2 mt-[-94px] top-0 w-[270px] h-64 object-contain rounded mb-4" />
                        <div className='flex flex-col h-full'>
                            <h3 className="text-lg font-semibold mb-2">{card.titulo}</h3>
                            <p className="text-gray-500 font-normal mb-4">{card.descricao}</p>

                            {card.url && <Button className='w-fit mt-auto' text="Saiba Mais" link={card.url} />}

                            {card.botoes && (
                                <div className="flex flex-col lg:grid mt-auto grid-cols-2">
                                    {card.botoes.map((botao, i) => (
                                    <Button className=" w-fit mb-3" key={i} text={botao.textButton} link={botao.url} />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </section>
    )
}