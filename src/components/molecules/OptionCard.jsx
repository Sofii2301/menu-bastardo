import { PriceTag } from '../atoms/PriceTag'

export function OptionCard({ option, name }) {
    return (
        <article className="border-0">
            <div className="d-flex justify-content-between align-items-start">
                {name 
                    ? <span className="tenor-sans-regular-options text-uppercase">{option.label}</span>
                    : <h2 className="bebas-neue-regular-options text-uppercase">{option.label}</h2>
                }
                <PriceTag value={option.price} />
            </div>
        </article>
    );
}