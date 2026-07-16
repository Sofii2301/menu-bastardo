import { Menu } from '../organisms/Menu/Menu';
import "./menuTemplate.css"
import logo from "../../assets/logo.png";
import { CategoryNav } from '../organisms/CategoryNav/CategoryNav';
import { CategoryButton } from '../molecules/CategoryButton';
import { FloatingMenu } from '../molecules/FloatingMenu';

export function MenuTemplate({ categories, groupedItems }) {
    const categoryLinks = categories
        .map((cat) => (
            <CategoryButton
                key={cat.id}
                category={cat}
            />
        ));

    return (
        <>
            <CategoryNav categories={categories} />
            <div className="container d-flex flex-column align-items-center col-12 col-md-6 py-4 rounded-4">
                <div className="container-heading d-flex flex-column justify-content-around align-items-center">
                    <header className="mb-4 h-50 text-center d-flex flex-column align-items-center justify-content-center">
                        <img src={logo} alt="Bastardo" className='logo'/>
                        <h5 className="tenor-sans-regular">Sacá el BASTARDO que llevas dentro</h5>
                    </header>
                    <div className='d-flex h-50 flex-column align-items-center'>
                        <nav className="nav-category d-flex pb-2 mb-4">
                            {categoryLinks}
                        </nav>
                    </div>
                </div>
                <Menu grouped={groupedItems} />
                <FloatingMenu />
            </div>
        </>
    );
}