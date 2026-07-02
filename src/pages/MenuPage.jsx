import data from '../data/menu.json';
import tags from '../data/tags.json';
import { groupByCategory, scrollToSection } from '../js/menu';
import { MenuTemplate } from '../components/templates/MenuTemplate';

export default function MenuPage() {
  const grouped = groupByCategory(data);

  const categoryLinks = tags
    //.filter(cat => grouped[cat.category])
    .map((cat) => (
      <a
        key={cat.category}
        href={`#${cat.category}`}
        onClick={(e) => scrollToSection(e, cat.category)}
        className="btn btn-category-nav fw-bold btn-sm me-2 mb-2"
      >
        {cat.category}
      </a>
    ));


  return <MenuTemplate categoryLinks={categoryLinks} groupedItems={grouped} />;
}