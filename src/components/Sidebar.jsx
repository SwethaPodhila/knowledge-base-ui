import {
    Bot,
    Brain,
    Library,
    Layers,
    Server,
    Database,
    Zap,
    Briefcase,
    Activity,
    Lock,
    Key,
    Building2,
    Plug,
} from "lucide-react";

const Sidebar = () => {
    return (
        <div className="w-64 h-screen bg-secondary text-gray-200 flex flex-col p-5">
            {/* Logo */}
            <h1 className="text-2xl font-bold text-white mb-8 tracking-wide">
                Workspace
            </h1>

            {/* Scrollable Menu */}
            <div className="flex-1 overflow-y-auto space-y-6 pr-2">

                {/* MY PROJECT */}
                <div>
                    <p className="text-xs text-gray-400 mb-3 tracking-widest">
                        MY PROJECT
                    </p>

                    <ul className="space-y-2">
                        <SidebarItem icon={<Bot size={18} />} label="Agents" />
                        <SidebarItem icon={<Brain size={18} />} label="AI Models" />
                        <SidebarItem icon={<Library size={18} />} label="Library" />
                    </ul>
                </div>

                {/* ORCHESTRATOR */}
                <div>
                    <p className="text-xs text-gray-400 mb-3 tracking-widest">
                        ORCHESTRATOR
                    </p>

                    <ul className="space-y-2">
                        <SidebarItem icon={<Layers size={18} />} label="Published" />
                        <SidebarItem icon={<Server size={18} />} label="Machines" />
                        <SidebarItem icon={<Database size={18} />} label="Queues" />
                        <SidebarItem icon={<Zap size={18} />} label="Triggers" />
                        <SidebarItem icon={<Briefcase size={18} />} label="Jobs" />
                        <SidebarItem icon={<Activity size={18} />} label="Executions" />
                        <SidebarItem icon={<Lock size={18} />} label="Vault" />

                        {/* Active item */}
                        <SidebarItem
                            icon={<Database size={18} />}
                            label="Knowledge Base"
                            active
                        />

                        <SidebarItem icon={<Key size={18} />} label="Key Store" />
                    </ul>
                </div>

                {/* ADMIN */}
                <div>
                    <p className="text-xs text-gray-400 mb-3 tracking-widest">
                        ADMIN
                    </p>

                    <ul className="space-y-2">
                        <SidebarItem icon={<Building2 size={18} />} label="Tenant" />
                        <SidebarItem icon={<Plug size={18} />} label="Integrations" />
                    </ul>
                </div>
            </div>
        </div>
    );
};

const SidebarItem = ({ icon, label, active }) => {
    return (
        <li
            className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-all duration-200
        ${active
                    ? "bg-primary text-white shadow-md"
                    : "hover:bg-primary/20 hover:text-white"
                }`}
        >
            {icon}
            <span className="text-sm font-medium">{label}</span>
        </li>
    );
};

export default Sidebar;