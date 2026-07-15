import { useRef } from "react";

import { scrollToSection } from "../../../js/menu";

import "./categoryNav.css";
import { useCategoryNav } from "../../../hooks/useCategoryNav";
import { CategoryButton } from "../../molecules/CategoryButton";

export function CategoryNav({ categories }) {

   const {
        navRef,
        showLeft,
        showRight,
        visible,
        scrollNav
    } = useCategoryNav();

    return (
        <div className={`category-navbar ${visible ? "show" : ""}`}>
            {showLeft && (
                <button
                    className="nav-arrow d-none d-md-flex"
                    onClick={() => scrollNav(-1)}
                >
                    ❮
                </button>
            )}

            <div
                ref={navRef}
                className={`category-nav ${
                    !showLeft && !showRight ? "justify-content-center" : ""
                }`}
            >

                {categories.map(category => (

                    <CategoryButton
                        key={category.id}
                        category={category}
                    />

                ))}

            </div>

            {showRight && (
                <button
                    className="nav-arrow d-none d-md-flex"
                    onClick={() => scrollNav(1)}
                >
                    ❯
                </button>
            )}
        </div>
    );
}