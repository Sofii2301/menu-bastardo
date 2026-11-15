import { useEffect, useState } from 'react';
import fallbackMenu from '../data/menu.json';
import tags from '../data/tags.json';
import { groupByCategory } from '../js/menu';
import { getMenu } from '../services/menuService';
import { MenuTemplate } from '../components/templates/MenuTemplate';

export default function MenuPage() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    let cancelled = false;

    getMenu()
      .then((data) => {
        if (!cancelled) setItems(data);
      })
      .catch((error) => {
        // Si la API falla, mostramos el menú local para no dejar la página vacía
        console.error('No se pudo cargar el menú desde la API:', error);
        if (!cancelled) setItems(fallbackMenu);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (!items) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <p className="tenor-sans-regular text-white text-uppercase">Cargando menú…</p>
      </div>
    );
  }

  return <MenuTemplate categories={tags} groupedItems={groupByCategory(items)} />;
}
