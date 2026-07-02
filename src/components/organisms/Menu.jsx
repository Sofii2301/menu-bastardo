import { MenuCard } from '../molecules/MenuCard';
import { OptionCard } from '../molecules/OptionCard';
import { CoffeeTable } from '../molecules/CoffeeTable';
import categories from '../../data/categories.json';

const coffeeSizes = ["Chico", "Mediano", "Grande"];

export function Menu({ grouped }) {
    return (
        <div className="space-y-12">
            {categories.map((category) => {
                const catName = category.category;
                const group = grouped[catName];

                if (!group || group.items.length === 0) return null;

                if (catName === "Café") {
                    const tableCoffees = group.items.filter(item =>
                        coffeeSizes.includes(item.desc)
                    );

                    const cardCoffees = group.items.filter(item =>
                        !coffeeSizes.includes(item.desc)
                    );
                    return (
                        <section
                            key={catName}
                            id={catName}
                            className="mb-5 pt-4"
                        >
                            <h2 className="category-title bebas-neue-regular mb-1 text-center w-100 ">
                                {catName}
                            </h2>

                            {group.desc && (
                                <p className="text-white text-center mb-3">
                                    {group.desc}
                                </p>
                            )}

                            {/* Cafés con tamaños → tabla */}
                            {tableCoffees.length > 0 && (
                                <CoffeeTable items={tableCoffees} />
                            )}

                            {/* Cafés sin tamaños → cards */}
                            <div className="d-flex flex-column justify-content-center g-3">
                                {cardCoffees.map((item) => (
                                    <div key={item.id} className="col-12 mt-2">
                                        <MenuCard item={item} />
                                    </div>
                                ))}
                            </div>
                        </section>
                    );
                }

                return (
                    <section
                        key={catName}
                        id={catName}
                        className="mb-5 pt-4"
                    >
                        <div className="category-title mb-4">
                            <h1 className="category-title mb-1 text-center w-100 bebas-neue-regular">
                                {catName}
                            </h1>

                            {group.desc && (
                                <p className="category-desc tenor-sans-regular text-white text-center mb-3">
                                    {group.desc}
                                </p>
                            )}
                        </div>
                        
                        <div className="d-flex flex-column justify-content-center g-3">
                            {group.items.map((item) => (
                                /*(item.desc === "muted") ? (
                                    <div key={item.id} className="col-12">
                                        <OptionCard item={item} />
                                    </div>
                                ) : (
                                    <div key={item.id} className="col-12 mt-2">
                                        <MenuCard item={item} />
                                    </div>
                                )*/
                               <MenuCard item={item} muted={item.desc === "muted"}/>
                            ))}
                        </div>
                    </section>
                );
            })}
        </div>
    );
}
