import { useState } from "react";
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
    Menu,
    X,
} from "lucide-react";

const Sidebar = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Mobile Top Bar */}
            <div className="md:hidden flex items-center justify-between p-4 bg-secondary text-white">
                <h1 className="text-lg font-bold">Workspace</h1>
                <button onClick={() => setOpen(true)}>
                    <Menu size={24} />
                </button>
            </div>

            {/* Overlay (mobile) */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={() => setOpen(false)}
                ></div>
            )}

            {/* Sidebar */}
            <div
                className={`
          fixed md:static w-64 top-0 left-0 z-50
          w-64 h-screen bg-secondary text-gray-200 flex flex-col p-5
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
            >
                {/* Header (mobile close button) */}
                <div className="flex items-center justify-between mb-6 md:hidden">
                    <h1 className="text-xl font-bold text-white">Workspace</h1>
                    <button onClick={() => setOpen(false)}>
                        <X size={22} />
                    </button>
                </div>

                {/* Desktop Logo */}
                <h1 className="hidden md:block text-2xl font-bold text-white mb-8 tracking-wide">
                    Workspace
                </h1>

                {/* Scrollable Menu */}
                <div className="flex-1 overflow-y-auto space-y-6 pr-2">

                    {/* MY PROJECT */}
                    <Section title="MY PROJECT">
                        <SidebarItem icon={<Bot size={18} />} label="Agents" />
                        <SidebarItem icon={<Brain size={18} />} label="AI Models" />
                        <SidebarItem icon={<Library size={18} />} label="Library" />
                    </Section>

                    {/* ORCHESTRATOR */}
                    <Section title="ORCHESTRATOR">
                        <SidebarItem icon={<Layers size={18} />} label="Published" />
                        <SidebarItem icon={<Server size={18} />} label="Machines" />
                        <SidebarItem icon={<Database size={18} />} label="Queues" />
                        <SidebarItem icon={<Zap size={18} />} label="Triggers" />
                        <SidebarItem icon={<Briefcase size={18} />} label="Jobs" />
                        <SidebarItem icon={<Activity size={18} />} label="Executions" />
                        <SidebarItem icon={<Lock size={18} />} label="Vault" />
                        <SidebarItem icon={<Database size={18} />} label="Knowledge Base" active />
                        <SidebarItem icon={<Key size={18} />} label="Key Store" />
                    </Section>

                    {/* ADMIN */}
                    <Section title="ADMIN">
                        <SidebarItem icon={<Building2 size={18} />} label="Tenant" />
                        <SidebarItem icon={<Plug size={18} />} label="Integrations" />
                    </Section>
                </div>
            </div>
        </>
    );
};

const Section = ({ title, children }) => (
    <div>
        <p className="text-xs text-gray-400 mb-3 tracking-widest">{title}</p>
        <ul className="space-y-2">{children}</ul>
    </div>
);

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