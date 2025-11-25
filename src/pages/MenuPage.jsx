import data from '../data/menu.json';
import { groupByCategory, scrollToSection } from '../js/menu';
import { MenuTemplate } from '../components/templates/MenuTemplate';

export default function MenuPage() {
  const grouped = groupByCategory(data);
  const categories = Object.keys(grouped);

  const categoryLinks = categories.map((cat) => (
    <a
      key={cat}
      href={`#${cat}`}
      onClick={(e) => scrollToSection(e, cat)}
      className="px-3 py-1 rounded-full border bg-white text-sm hover:bg-amber-100"
    >
      {cat}
    </a>
  ));


  return <MenuTemplate categoryLinks={categoryLinks} groupedItems={grouped} />;
}