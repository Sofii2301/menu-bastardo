import data from '../data/menu.json';
import tags from '../data/tags.json';
import { groupByCategory, scrollToSection } from '../js/menu';
import { MenuTemplate } from '../components/templates/MenuTemplate';

export default function MenuPage() {
  const grouped = groupByCategory(data);

  return <MenuTemplate categories={tags} groupedItems={grouped} />;
}