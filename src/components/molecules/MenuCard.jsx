import { TextLabel } from '../atoms/TextLabel';
import { PriceTag } from '../atoms/PriceTag';
import { CategoryTag } from '../atoms/CategoryTag';

export function MenuCard({ item }) {
    return (
        <article className="bg-white rounded-2xl p-4 shadow hover:shadow-md transition">
            <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <PriceTag value={item.price} />
            </div>
            <TextLabel>{item.desc}</TextLabel>
            <div className="mt-4">
                <CategoryTag category={item.category} />
            </div>
        </article>
    );
}