import { useState } from "react";
import Button from "./Button";

const Modal = ({ setOpen }) => {
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");

    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState("");

    const handleSubmit = () => {
        let newErrors = {};

        if (!name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!desc.trim()) {
            newErrors.desc = "Description is required";
        }

        // If validation fails
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setSuccess("");
            return;
        }

        // Success
        setErrors({});
        setSuccess("Successfully created your knowledge base ✅");

        console.log({ name, desc });

        // Auto close after 2 sec
        setTimeout(() => {
            setOpen(false);
        }, 2000);
    };

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex justify-center items-center z-50">

            <div className="w-[440px] rounded-3xl p-[1px] bg-gradient-to-r from-indigo-500 to-purple-500 shadow-2xl">

                <div className="bg-white rounded-3xl p-6">

                    {/* Header */}
                    <h2 className="text-2xl font-semibold text-gray-800 mb-1">
                        Create Knowledge Base
                    </h2>
                    <p className="text-sm text-gray-500 mb-5">
                        Organize your data smartly 🚀
                    </p>

                    {/* Form */}
                    <div className="space-y-4">

                        {/* Name */}
                        <div>
                            <label className="text-sm font-medium text-gray-600">
                                Name
                            </label>
                            <input
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                    setErrors((prev) => ({ ...prev, name: "" }));
                                }}
                                placeholder="Enter name..."
                                className="w-full mt-1 border border-gray-200 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                            {errors.name && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.name}
                                </p>
                            )}
                        </div>

                        {/* Description */}
                        <div>
                            <label className="text-sm font-medium text-gray-600">
                                Description
                            </label>
                            <textarea
                                value={desc}
                                onChange={(e) => {
                                    setDesc(e.target.value);
                                    setErrors((prev) => ({ ...prev, desc: "" }));
                                }}
                                placeholder="Write something..."
                                className="w-full mt-1 border border-gray-200 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                            {errors.desc && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.desc}
                                </p>
                            )}
                        </div>

                        {/* Dropdowns */}
                        <div>
                            <label className="text-sm font-medium text-gray-600">
                                Vector Database
                            </label>
                            <select className="w-full mt-1 border border-gray-200 p-2 rounded-lg">
                                <option>Qdrant</option>
                                <option>Pinecone</option>
                                <option>Weaviate</option>
                                <option>Milvus</option>
                                <option>Supabase Vector</option>
                            </select>
                        </div>

                        <div>
                            <label className="text-sm font-medium text-gray-600">
                                Embedding Model
                            </label>
                            <select className="w-full mt-1 border border-gray-200 p-2 rounded-lg">
                                <option>text-embedding-ada-002</option>
                                <option>text-embedding-3-small</option>
                                <option>text-embedding-3-large</option>
                                <option>BERT</option>
                                <option>MiniLM</option>
                            </select>
                        </div>

                        {/* Success Message */}
                        {success && (
                            <p className="text-green-600 text-sm font-medium mt-2">
                                {success}
                            </p>
                        )}
                    </div>

                    {/* Footer */}
                    <div className="flex justify-between items-center mt-6">
                        <button
                            onClick={() => setOpen(false)}
                            className="text-sm text-gray-500 hover:text-gray-700"
                        >
                            Cancel
                        </button>

                        <Button onClick={handleSubmit}>
                            Create →
                        </Button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Modal;