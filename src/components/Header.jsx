import { Bell } from "lucide-react";

const Header = () => {
    return (
        <div className="flex items-center justify-between bg-white px-6 py-4 rounded-2xl shadow-sm">

            {/* LEFT → Logo */}
            <h1 className="text-xl font-bold text-secondary tracking-wide">
                Workspace
            </h1>

            {/* RIGHT → Bell + Profile */}
            <div className="flex items-center gap-5">

                {/* Notification */}
                <div className="relative cursor-pointer">
                    <Bell className="text-gray-600 hover:text-primary transition" size={20} />

                    {/* Notification dot */}
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </div>

                {/* Profile */}
                <div className="flex items-center gap-3 cursor-pointer">
                    <div className="w-9 h-9 bg-primary text-white flex items-center justify-center rounded-full font-semibold">
                        SP
                    </div>
                    <span className="text-sm font-medium text-gray-700 hidden md:block">
                        Swetha Podhila
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Header;