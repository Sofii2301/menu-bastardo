import { buildCoffeeTable } from '../../js/coffee';
import { formatPrice } from '../../js/format';

export function CoffeeTable({ items }) {
    const table = buildCoffeeTable(items);

    return (
        <div className="table-responsive rounded-4 rounded-4">
            <table className="table text-center align-middle">
                <thead className='justify-content-end'>
                    <tr>
                        <th></th>
                        <th className="bebas-neue-regular fs-4">Chico</th>
                        <th className="bebas-neue-regular fs-4">Mediano</th>
                        <th className="bebas-neue-regular fs-4">Grande</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(table).map((name) => (
                        <tr key={name}>
                            <th className="text-start bebas-neue-regular fs-5">{name}</th>
                            <td className='tenor-sans-regular'>{table[name].Chico && `$${formatPrice(table[name].Chico)}`}</td>
                            <td className='tenor-sans-regular'>{table[name].Mediano && `$${formatPrice(table[name].Mediano)}`}</td>
                            <td className='tenor-sans-regular'>{table[name].Grande && `$${formatPrice(table[name].Grande)}`}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
