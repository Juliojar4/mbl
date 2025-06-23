import ultimasNoticiasJson from '@/data/ultimas-noticias.json'
import Button from '@/components/Button';


export default function UltimasNoticiasGrid() {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 '>
            {ultimasNoticiasJson.map((el, index) => (
                <div className='container-ultimas-noticias rounded-[20px]' key={index}>
                    <img className='w-full h-[175px] object-cover rounded-t-[20px]' src={el.imagem} alt={el.alt} />
                    <div className='flex flex-col gap-5 p-8'>
                        <h3>{el.title}</h3>
                        <p className='text-gray-500'>{el.resumo}</p>
                        <Button className='box-shadow-button-ultimas-noticias rounded-xl !px-4 !pt-2 self-start hover:!bg-[#5cbcae]' text="Leia mais" link={el.link} />
                    </div>
                </div>
            ))}
        </div>
    )
}