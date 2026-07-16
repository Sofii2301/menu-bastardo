export function FloatingButton({
    icon,
    onClick,
    href,
    target = "_blank",
    color = "dark"
}) {

    const className = `btn btn-${color} rounded-circle d-flex align-items-center justify-content-center shadow`;

    if (href) {
        return (
            <a
                href={href}
                target={target}
                rel="noreferrer"
                className={className}
                style={{ width: 56, height: 56 }}
            >
                {icon}
            </a>
        );
    }

    return (
        <button
            onClick={onClick}
            className={className}
            style={{ width: 56, height: 56 }}
        >
            {icon}
        </button>
    );
}