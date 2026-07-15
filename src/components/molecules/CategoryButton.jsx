export function CategoryButton({ category }) {

    return (
        <a
            href={`#${category.category}`}
            onClick={(e) => scrollToSection(e, category.category)}
            className="btn btn-category-nav"
        >
            {category.category}
        </a>
    );
}