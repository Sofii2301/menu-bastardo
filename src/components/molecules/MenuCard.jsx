import { TextLabel } from '../atoms/TextLabel';
import { PriceTag } from '../atoms/PriceTag'
import { OptionCard } from './OptionCard';

export function MenuCard({ item }) {
    return (
        <article className="card border-0 rounded-4 px-3 my-1">
            <div className="d-flex justify-content-between align-items-start card-heading gap-2">
                {item.name && <h2 className="bebas-neue-regular">{item.name}</h2>}
                {item.add && <div className='text-white small tenor-sans-regular text-uppercase'>{item.add}</div>}
                {item.price && <PriceTag value={item.price} />}
            </div>
            {item.desc && (<TextLabel>{item.desc}</TextLabel>)}
            {item.options?.map(option=>(
                <OptionCard
                    key={option.name}
                    option={option}
                    name={item.name}
                />
            ))}
        </article>
    );
}