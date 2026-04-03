import { Bell, Menu } from "lucide-react";

const Header = ({ onMenuClick }) => {
    return (
        <div className="flex items-center justify-between bg-white px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl shadow-sm">

            {/* LEFT → Mobile Menu + Logo */}
            <div className="flex items-center gap-3">

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-700"
                    onClick={onMenuClick}
                >
                    <Menu size={22} />
                </button>

                {/* Logo */}
                <h1 className="text-lg md:text-xl font-bold text-secondary tracking-wide">
                    Workspace
                </h1>
            </div>

            {/* RIGHT → Bell + Profile */}
            <div className="flex items-center gap-3 md:gap-5">

                {/* Notification */}
                <div className="relative cursor-pointer">
                    <Bell className="text-gray-600 hover:text-primary transition" size={20} />
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </div>

                {/* Profile */}
                <div className="flex items-center gap-2 md:gap-3 cursor-pointer">
                    <div className="w-8 h-8 md:w-9 md:h-9 bg-primary text-white flex items-center justify-center rounded-full font-semibold text-sm md:text-base">
                        SP
                    </div>

                    {/* Hide name on small screens */}
                    <span className="text-sm font-medium text-gray-700 hidden sm:block">
                        Swetha Podhila
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Header;