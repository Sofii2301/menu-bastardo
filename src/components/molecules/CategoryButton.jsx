export function CategoryButton({ category }) {

    return (
        <a
            href={`#${category.href}`}
            className="btn btn-category-nav"
        >
            {category.category}
        </a>
    );
}