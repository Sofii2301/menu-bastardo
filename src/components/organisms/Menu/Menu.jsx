import { MenuCard } from '../../molecules/MenuCard';
import { OptionCard } from '../../molecules/OptionCard';
import { Table } from '../../molecules/Table';
import categories from '../../../data/categories.json';
import "./menu.css"

const coffeeSizes = ["Chico", "Mediano", "Grande"];

export function Menu({ grouped }) {
    return (
        <div className="space-y-12">
            {categories.map((category) => {
                const catName = category.category;
                const group = grouped[catName];

                if (!group || group.items.length === 0) return null;

                return (
                    <section
                        key={catName}
                        id={catName}
                        className="menu-section mb-5 pt-4"
                    >
                        <div className="category-title mb-4">
                            <h1 className="category-title mb-1 text-center w-100 bebas-neue-regular">
                                {catName}
                            </h1>

                            {group.desc && (
                                <p className="category-desc tenor-sans-regular text-white text-uppercase text-center mb-3">
                                    {group.desc}
                                </p>
                            )}
                        </div>
                        
                        <div className="d-flex flex-column justify-content-center g-3">
                            {group.items.map(item => {
                                if(item.layout === "table"){
                                    return (
                                        <Table
                                            key={item.id}
                                            item={item}
                                        />
                                    );
                                }
                                return (
                                    <MenuCard
                                        key={item.id}
                                        item={item}
                                        muted={item.desc === "muted"}
                                    />
                                )
                            })}
                        </div>
                    </section>
                );
            })}
        </div>
    );
}
