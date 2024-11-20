import { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';

export default function CCentre({ auth, initialRobots, flash }) {
    const [robots, setRobots] = useState(initialRobots || []);
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        task: '',
        power_level: 100,
    });

    // Handle form submission for creating a new robot
    const handleCreateRobot = (e) => {
        e.preventDefault();

        // Send a POST request to the backend to create a new robot
        post('/robots', data, {
            onSuccess: (response) => {
                // Assuming the response contains the robot, update the robots list
                if (response.robot) {
                    setRobots((prev) => [...prev, response.robot]);
                }

                // Optionally clear form data after submit
                setData({ name: '', task: '', power_level: 100 });
            },
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-2xl text-black-200 leading-tight">Robot Control Centre</h2>}
        >
            <Head title="Robot Control Centre" />

            {/* Main content area */}
            <div className="py-12 bg-gray-900 min-h-screen">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Section: Robot Fleet */}
                    <div className="bg-gray-800 shadow-lg rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-100 mb-4">Robot Fleet Overview</h3>
                        
                        {/* Add Robot Form */}
                        <form onSubmit={handleCreateRobot} className="mb-4">
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-white">Robot Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    className="bg-gray-700 text-white p-2 rounded mt-2 w-full"
                                    placeholder="Enter robot name"
                                    required
                                />
                                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                            </div>

                            <div className="mb-4">
                                <label htmlFor="task" className="block text-white">Task</label>
                                <input
                                    type="text"
                                    id="task"
                                    value={data.task}
                                    onChange={(e) => setData('task', e.target.value)}
                                    className="bg-gray-700 text-white p-2 rounded mt-2 w-full"
                                    placeholder="Enter robot task"
                                    required
                                />
                                {errors.task && <p className="text-red-500 text-sm">{errors.task}</p>}
                            </div>

                            <div className="mb-4">
                                <label htmlFor="power_level" className="block text-white">Power Level</label>
                                <input
                                    type="number"
                                    id="power_level"
                                    value={data.power_level}
                                    onChange={(e) => setData('power_level', e.target.value)}
                                    className="bg-gray-700 text-white p-2 rounded mt-2 w-full"
                                    placeholder="Enter power level"
                                    min="0"
                                    max="100"
                                    required
                                />
                                {errors.power_level && <p className="text-red-500 text-sm">{errors.power_level}</p>}
                            </div>

                            <button
                                type="submit"
                                className={`bg-blue-500 text-white p-2 rounded mt-4 ${processing ? 'opacity-50' : ''}`}
                                disabled={processing}
                            >
                                {processing ? 'Creating...' : 'Add Robot'}
                            </button>
                        </form>

                        {/* Robot List */}
                        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {robots.length > 0 ? (
                                robots.map((robot) => (
                                    <div key={robot.id} className="bg-gray-700 shadow-md rounded-md p-4 text-center">
                                        <h4 className="text-white font-semibold">{robot.name}</h4>
                                        <p className="text-gray-400 text-sm">Task: {robot.task}</p>
                                        <p className="text-gray-400 text-sm">Power: {robot.power_level}%</p>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-300">No robots available</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
