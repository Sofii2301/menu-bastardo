export function groupByCategory(items) {
    const grouped = {};
        items.forEach((item) => {
            if (!grouped[item.category]) grouped[item.category] = [];
            grouped[item.category].push(item);
        });
    return grouped;
}

export function scrollToSection(e, id) {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ 
        behavior: "smooth", 
        block: "start" 
    });
}