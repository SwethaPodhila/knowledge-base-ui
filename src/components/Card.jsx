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
        <div className="group bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

            {/* Top */}
            <div className="flex justify-between items-start">
                <h3 className="font-semibold text-lg text-gray-800 group-hover:text-primary transition">
                    {title}
                </h3>

                <MoreVertical className="text-gray-400 cursor-pointer opacity-0 group-hover:opacity-100 transition" size={18} />
            </div>

            {/* Type badge */}
            <span
                className={`inline-block mt-2 px-2 py-1 text-xs font-medium rounded-md ${typeStyles[type] || "bg-gray-100 text-gray-500"
                    }`}
            >
                {type?.toUpperCase()}
            </span>

            {/* Description */}
            <p className="text-sm text-gray-500 mt-3 leading-relaxed line-clamp-2">
                {description}
            </p>

            {/* Footer */}
            <div className="flex justify-between items-center mt-5">
                <p className="text-xs text-gray-400">
                    {new Date(date).toLocaleDateString()}
                </p>

                <span
                    className={`text-xs px-2 py-1 rounded-md font-medium ${statusStyles[status]
                        }`}
                >
                    {status}
                </span>
            </div>
        </div>
    );
};

export default Card;
