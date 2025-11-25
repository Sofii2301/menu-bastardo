import { MenuGrid } from '../organisms/Menu';

export function MenuTemplate({ categoryLinks, groupedItems }) {
    return (
        <div className="min-h-screen bg-gray-50 p-6 md:p-12 font-sans max-w-5xl mx-auto">
            <header className="mb-6">
                <h1 className="text-4xl font-extrabold">BASTARDO</h1>
                <p className="text-gray-600 text-sm">Sacá el BASTARDO que llevas dentro</p>
            </header>

            <nav className="flex gap-3 overflow-x-auto mb-8">
                {categoryLinks}
            </nav>

            <MenuGrid grouped={groupedItems} />
        </div>
    );
}