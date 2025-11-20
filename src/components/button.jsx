export const Button = ({ href, children }) => {
    return (
        <a
            href={href}
            target="_blank"
            className="button"
        >
            {children}
        </a>
    )
}