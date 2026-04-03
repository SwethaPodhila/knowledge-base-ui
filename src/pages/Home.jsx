import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Card from "../components/Card";
import Modal from "../components/Modal";
import Button from "../components/Button";

const initialData = [
    {
        id: 1,
        title: "AI Assistant",
        description: "Handles customer queries using NLP models.",
        date: "2026-03-14",
        type: "ai",
        status: "active",
    },
    {
        id: 2,
        title: "Chatbot KB",
        description: "Knowledge base for chatbot training.",
        date: "2026-04-01",
        type: "docs",
        status: "inactive",
    },
    {
        id: 3,
        title: "Support Docs",
        description: "Internal documentation for support team.",
        date: "2026-02-05",
        type: "docs",
        status: "active",
    },
    {
        id: 4,
        title: "ML Dataset",
        description: "Training dataset for ML pipelines.",
        date: "2026-06-28",
        type: "dataset",
        status: "active",
    },
    {
        id: 5,
        title: "Automation Flow",
        description: "Handles workflow automation tasks.",
        date: "2026-01-20",
        type: "ai",
        status: "inactive",
    },
    {
        id: 6,
        title: "Analytics Data",
        description: "Stores analytics and reporting data.",
        date: "2026-05-10",
        type: "dataset",
        status: "active",
    },
];

const Home = ({ open, setOpen }) => {
    const [search, setSearch] = useState("");
    const [filterDate, setFilterDate] = useState("");

    const filteredData = initialData.filter((item) => {
        const matchSearch = item.title
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchDate = filterDate ? item.date === filterDate : true;

        return matchSearch && matchDate;
    });

    return (
        <div className="flex h-screen bg-gray-100 overflow-hidden">
            <Sidebar />

            <div className="flex-1 flex flex-col overflow-hidden">
                <Header />

                {/* Content wrapper */}
                <div className="flex-1 overflow-y-auto p-4 md:p-6">

                    {/* Top Controls */}
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">

                        <h1 className="text-xl md:text-2xl font-semibold text-gray-800">
                            Knowledge Base
                        </h1>

                        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">

                            {/* Search */}
                            <input
                                type="text"
                                placeholder="Search..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="border px-4 py-2 rounded-xl w-full sm:w-56 md:w-64 focus:outline-none focus:ring-2 focus:ring-primary"
                            />

                            {/* Filter */}
                            <input
                                type="date"
                                value={filterDate}
                                onChange={(e) => setFilterDate(e.target.value)}
                                className="border px-3 py-2 rounded-xl w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-primary"
                            />

                            <Button onClick={() => setOpen(true)} fullWidth>
                                + Create
                            </Button>
                        </div>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mt-6">
                        {filteredData.length > 0 ? (
                            filteredData.map((item) => (
                                <Card
                                    key={item.id}
                                    title={item.title}
                                    description={item.description}
                                    date={item.date}
                                />
                            ))
                        ) : (
                            <p className="text-gray-500 col-span-full text-center mt-10">
                                No results found
                            </p>
                        )}
                    </div>

                </div>

                {open && <Modal setOpen={setOpen} />}
            </div>
        </div>
    );
};

export default Home;