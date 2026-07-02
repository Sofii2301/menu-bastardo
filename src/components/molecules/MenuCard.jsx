import { TextLabel } from '../atoms/TextLabel';
import { PriceTag } from '../atoms/PriceTag'
import { OptionCard } from './OptionCard';

export function MenuCard({ item, muted }) {
    return (
        <article className="card border-0 rounded-4 px-2 my-1">
            {!muted &&  
                <>
                    <div className="d-flex justify-content-between align-items-start card-heading">
                        {item.name === "Flan Casero" ? (
                            <div className='d-flex flex-column pb-3'>
                                <h2 className="bebas-neue-regular">{item.name}</h2>
                                <div className='text-white small tenor-sans-regular text-uppercase'>Adicional dulce: $1.500</div>
                            </div>
                        ):(item.name === "Helado" ? (
                            <>
                                <h2 className="bebas-neue-regular">{item.name}</h2>
                                <div className='text-white small tenor-sans-regular text-uppercase'>Consultar gustos</div>
                            </>
                        ):(
                            <>
                                <h2 className="bebas-neue-regular">{item.name}</h2>
                            </>
                        ))}
                        <PriceTag value={item.price} />
                    </div>
                    <TextLabel>{item.desc}</TextLabel>
                </>
            }
            {muted && <OptionCard item={item}/>}
        </article>
    );
}