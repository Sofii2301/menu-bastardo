import categories from '../data/categories.json';

export function groupByCategory(items) {
    const grouped = {};

    items.forEach((item) => {
        const catName = item.category;

        if (!grouped[catName]) {
            const categoryInfo = categories.find(
                (c) => c.category === catName
            );

            grouped[catName] = {
                desc: categoryInfo ? categoryInfo.desc : '',
                items: []
            };
        }

        grouped[catName].items.push(item);
    });

    return grouped;
}