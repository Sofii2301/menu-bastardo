export function buildCoffeeTable(items) {
    const table = {};

    items.forEach(item => {
        const name = item.name;
        const size = item.desc; // Chico / Mediano / Grande

        if (!table[name]) {
            table[name] = {};
        }

        table[name][size] = item.price;
    });

    return table;
}
