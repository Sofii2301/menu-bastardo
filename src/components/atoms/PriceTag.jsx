import { formatPrice } from "../../js/format";

export function PriceTag({ value }) {
    const isNumber = typeof value === "number";

    return (
        <span className="tenor-sans-regular price">
            {isNumber ? `$${formatPrice(value)}` : value}
        </span>
    );
}