import { MenuCard } from '../molecules/MenuCard';

export function MenuGrid({ grouped }) {
    return (
        <div className="space-y-12">
            {Object.keys(grouped).map((cat) => (
                <section key={cat} id={cat} className="scroll-mt-24">
                    <h2 className="text-3xl font-bold mb-4">{cat}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {grouped[cat].map((item) => (
                            <MenuCard key={item.id} item={item} />
                        ))}
                    </div>
                </section>
            ))}
        </div>
    );
}