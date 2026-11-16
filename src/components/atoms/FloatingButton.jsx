export function FloatingButton({
    icon,
    onClick,
    href,
    target = "_blank",
    color = "dark",
    label,
    extraClassName = ""
}) {

    const className = `btn btn-${color} rounded-circle d-flex align-items-center justify-content-center shadow ${extraClassName}`.trim();

    if (href) {
        return (
            <a
                href={href}
                target={target}
                rel="noreferrer"
                aria-label={label}
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