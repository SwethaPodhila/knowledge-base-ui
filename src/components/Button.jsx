const Button = ({
    children,
    onClick,
    variant = "primary",
    size = "md",
    fullWidth = false,
}) => {
    const baseStyles =
        "rounded-xl font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
        primary:
            "bg-primary text-white shadow-md hover:bg-indigo-600 hover:shadow-lg focus:ring-primary",
        secondary:
            "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-gray-300",
        ghost:
            "text-gray-600 hover:bg-gray-100 focus:ring-gray-200",
    };

    const sizes = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-5 py-2 text-sm",
        lg: "px-6 py-3 text-base",
    };

    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? "w-full" : ""
                }`}
        >
            {children}
        </button>
    );
};

export default Button;