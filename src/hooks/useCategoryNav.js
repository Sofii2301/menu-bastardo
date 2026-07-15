import { useEffect, useRef, useState } from "react";

export function useCategoryNav() {
    const navRef = useRef(null);

    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(false);
    const [visible, setVisible] = useState(false);

    const updateArrows = () => {
        const nav = navRef.current;
        if (!nav) return;

        setShowLeft(nav.scrollLeft > 5);

        setShowRight(
            nav.scrollLeft + nav.clientWidth < nav.scrollWidth - 5
        );
    };

    const scrollNav = (direction) => {
        navRef.current?.scrollBy({
            left: direction * 220,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        const nav = navRef.current;

        const handleWindowScroll = () => {
            setVisible(window.scrollY >= showAt);
        };

        updateArrows();
        handleWindowScroll();

        nav?.addEventListener("scroll", updateArrows);
        window.addEventListener("resize", updateArrows);
        window.addEventListener("scroll", handleWindowScroll);

        return () => {
            nav?.removeEventListener("scroll", updateArrows);
            window.removeEventListener("resize", updateArrows);
            window.removeEventListener("scroll", handleWindowScroll);
        };
    }, []);

    return {
        navRef,
        showLeft,
        showRight,
        visible,
        scrollNav
    };
}