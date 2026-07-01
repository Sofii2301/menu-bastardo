import { Menu } from '../organisms/Menu';
import "./menuTemplate.css"
import logo from "../../assets/logo.png";

export function MenuTemplate({ categoryLinks, groupedItems }) {
    return (
        <div className="container d-flex flex-column align-items-center col-12 col-md-6 py-4 rounded-4">
            <div className="container-heading d-flex flex-column justify-content-around align-items-center">
                <header className="mb-4 h-50 text-center d-flex flex-column align-items-center justify-content-center">
                    <img src={logo} alt="Bastardo" className='logo'/>
                    <h2 className="small tenor-sans-regular">Sacá el BASTARDO que llevas dentro</h2>
                </header>
                <div className='d-flex h-50 flex-column align-items-center'>
                    <nav className="nav-category d-flex pb-2 mb-4">
                        {categoryLinks}
                    </nav>
                </div>
                
            </div>
            

            <Menu grouped={groupedItems} />
        </div>
    );
}