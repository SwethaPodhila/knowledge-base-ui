const Button = ({
    children,
    onClick,
    variant = "primary",
    size = "md",
    fullWidth = false,
    disabled = false,
}) => {
    const baseStyles =
        "rounded-xl font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary:
            "bg-primary text-white shadow-md hover:bg-indigo-600 hover:shadow-lg focus:ring-primary",
        secondary:
            "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-gray-300",
        ghost:
            "text-gray-600 hover:bg-gray-100 focus:ring-gray-200",
    };

    const sizes = {
        sm: "px-3 py-2 text-xs sm:text-sm",
        md: "px-4 sm:px-5 py-2 sm:py-2.5 text-sm",
        lg: "px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base",
    };

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? "w-full" : ""}
      `}
        >
            {children}
        </button>
    );
};

export default Button;