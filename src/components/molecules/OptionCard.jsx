import { PriceTag } from '../atoms/PriceTag'

export function OptionCard({ item }) {
    return (
        <article className="border-0 px-2">
            <div className="d-flex justify-content-between align-items-start">
                <h6 className="">{item.name}</h6>
                <PriceTag value={item.price} />
            </div>
        </article>
    );
}