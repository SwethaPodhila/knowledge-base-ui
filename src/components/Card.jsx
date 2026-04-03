import { MoreVertical } from "lucide-react";

const Card = ({ title, description, date, type, status }) => {
    const typeStyles = {
        ai: "bg-indigo-50 text-indigo-600",
        docs: "bg-emerald-50 text-emerald-600",
        dataset: "bg-amber-50 text-amber-600",
    };

    const statusStyles = {
        active: "bg-green-100 text-green-600",
        inactive: "bg-gray-200 text-gray-600",
    };

    return (
        <div className="group bg-white p-4 md:p-5 rounded-xl md:rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl md:hover:-translate-y-1 transition-all duration-300">

            {/* Top */}
            <div className="flex justify-between items-start gap-2">
                <h3 className="font-semibold text-base md:text-lg text-gray-800 group-hover:text-primary transition line-clamp-1">
                    {title}
                </h3>

                <MoreVertical className="text-gray-400 cursor-pointer opacity-100 md:opacity-0 md:group-hover:opacity-100 transition" size={18} />
            </div>

            {/* Type badge */}
            <span
                className={`inline-block mt-2 px-2 py-1 text-[10px] md:text-xs font-medium rounded-md ${typeStyles[type] || "bg-gray-100 text-gray-500"
                    }`}
            >
                {type?.toUpperCase()}
            </span>

            {/* Description */}
            <p className="text-xs md:text-sm text-gray-500 mt-3 leading-relaxed line-clamp-2">
                {description}
            </p>

            {/* Footer */}
            <div className="flex justify-between items-center mt-4 md:mt-5">
                <p className="text-[10px] md:text-xs text-gray-400">
                    {new Date(date).toLocaleDateString()}
                </p>

                <span
                    className={`text-[10px] md:text-xs px-2 py-1 rounded-md font-medium ${statusStyles[status]
                        }`}
                >
                    {status}
                </span>
            </div>
        </div>
    );
};

export default Card;
