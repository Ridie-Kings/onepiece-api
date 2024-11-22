import { Code, Database, Server } from "lucide-react";
import { Container } from "../components/Container";

export const DocumentationPage = () => {
    return (
        <Container>
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-6xl font-pirate text-white mb-4">
                        API Documentation
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Welcome to the One Piece API documentation. Here you&apos;ll find all the information needed to interact with our API endpoints.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-gray-800 p-6 rounded-xl">
                        <div className="flex items-center gap-3 mb-4">
                            <Server className="w-6 h-6 text-blue-400" />
                            <h2 className="text-xl font-bold text-white">Base URL</h2>
                        </div>
                        <code className="block bg-black/50 p-4 rounded-lg text-green-400">
                            http://localhost:3000/api
                        </code>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-xl">
                        <div className="flex items-center gap-3 mb-4">
                            <Database className="w-6 h-6 text-purple-400" />
                            <h2 className="text-xl font-bold text-white">Response Format</h2>
                        </div>
                        <code className="block bg-black/50 p-4 rounded-lg text-green-400">
                            Content-Type: application/json
                        </code>
                    </div>
                </div>

                <div className="space-y-8">
                    {[
                        {
                            endpoint: "/characters",
                            description: "Get all characters or a specific character by ID",
                            methods: ["GET"],
                            parameters: [
                                { name: "id", type: "number", description: "Character ID (optional)" }
                            ]
                        },
                        {
                            endpoint: "/crews",
                            description: "Get all pirate crews or a specific crew by ID",
                            methods: ["GET"],
                            parameters: [
                                { name: "id", type: "number", description: "Crew ID (optional)" }
                            ]
                        },
                        {
                            endpoint: "/devil-fruits",
                            description: "Get all Devil Fruits or a specific fruit by ID",
                            methods: ["GET"],
                            parameters: [
                                { name: "id", type: "number", description: "Devil Fruit ID (optional)" }
                            ]
                        },
                        {
                            endpoint: "/hakis",
                            description: "Get all Haki types or a specific type by ID",
                            methods: ["GET"],
                            parameters: [
                                { name: "id", type: "number", description: "Haki ID (optional)" }
                            ]
                        },
                        {
                            endpoint: "/origins",
                            description: "Get all origins/locations or a specific one by ID",
                            methods: ["GET"],
                            parameters: [
                                { name: "id", type: "number", description: "Origin ID (optional)" }
                            ]
                        }
                    ].map((endpoint) => (
                        <div key={endpoint.endpoint} className="bg-gray-800 rounded-xl overflow-hidden">
                            <div className="p-6 border-b border-gray-700">
                                <div className="flex items-center gap-3 mb-4">
                                    <Code className="w-6 h-6 text-yellow-400" />
                                    <h2 className="text-xl font-bold text-white">{endpoint.endpoint}</h2>
                                </div>
                                <p className="text-gray-400">{endpoint.description}</p>
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-semibold text-white mb-4">Methods</h3>
                                <div className="flex gap-2 mb-6">
                                    {endpoint.methods.map((method) => (
                                        <span
                                            key={method}
                                            className="px-3 py-1 bg-green-900 text-green-400 rounded-full text-sm"
                                        >
                                            {method}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-4">Parameters</h3>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="border-b border-gray-700">
                                                <th className="py-2 px-4 text-gray-400">Name</th>
                                                <th className="py-2 px-4 text-gray-400">Type</th>
                                                <th className="py-2 px-4 text-gray-400">Description</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {endpoint.parameters.map((param) => (
                                                <tr key={param.name} className="border-b border-gray-700">
                                                    <td className="py-2 px-4 text-blue-400">{param.name}</td>
                                                    <td className="py-2 px-4 text-purple-400">{param.type}</td>
                                                    <td className="py-2 px-4 text-gray-400">{param.description}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    )
}