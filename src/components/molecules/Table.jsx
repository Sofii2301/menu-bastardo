import { formatPrice } from '../../js/format';

export function Table({ item }) {
    return (
        <div className="table-responsive rounded-4 rounded-4">
            <table className="table text-center align-middle">
                <thead className='justify-content-end'>
                    <tr>
                        <th></th>
                        {item.columns.map(column => (

                            <th 
                                key={column}
                                className="bebas-neue-regular fs-4"
                            >
                                {column}
                            </th>

                        ))}
                    </tr>
                </thead>
                <tbody>
                    {item.rows.map(row => (
                        <tr key={row.name}>
                            <th className="text-start bebas-neue-regular fs-5">
                                {row.name}
                            </th>
                            {row.prices.map(price => (
                                <td
                                    key={price}
                                    className='tenor-sans-regular'
                                >
                                    ${formatPrice(price)}
                                </td>

                            ))}

                        </tr>

                    ))}
                </tbody>
            </table>
        </div>
    );
}
