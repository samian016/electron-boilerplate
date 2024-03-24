export default function Button({
    name = "Button",
    variant = "default",
    strace = false,
    ...props
}) {
    const variants = {
        base: {
            ...strace && { width: "100%" },
            border: "1px solid #38BDF8",
            borderRadius: "5px",
            background: "transparent",
            color: "#38BDF8",
            paddingTop: "1px",
            paddingBottom: "1px"
        },
    }
    return (
        <button
            className="border"
            style={{
                ...variants[variant],
                textTransform: "uppercase",
                fontSize: "14px"
            }}
            {...props}
        >
            {name}
        </button>
    )
}