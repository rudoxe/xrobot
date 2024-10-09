import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-2xl text-blakc-200 leading-tight">Robot Control Centre</h2>} // Updated header text and size
        >
            <Head title="Robot Control Centre" />

            {/* Main content area */}
            <div className="py-12 bg-gray-900 min-h-screen"> {/* Full-height background */}
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Section: System Status */}
                    <div className="bg-gray-800 shadow-lg rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-100 mb-4">System Status</h3>
                        <p className="text-gray-300">All systems are operational.</p>
                        <div className="mt-4">
                            <span className="inline-block py-1 px-3 bg-green-500 text-white rounded-full text-xs">Online</span>
                        </div>
                    </div>

                    {/* Section: Robot Fleet */}
                    <div className="bg-gray-800 shadow-lg rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-100 mb-4">Robot Fleet Overview</h3>
                        <p className="text-gray-300">Monitor the fleet's activity and performance.</p>
                        <div className="mt-4 grid grid-cols-2 gap-4">
                            <div className="text-center">
                                <p className="text-2xl font-bold text-white">12</p>
                                <p className="text-gray-400 text-sm">Active Robots</p>
                            </div>
                            <div className="text-center">
                                <p className="text-2xl font-bold text-white">2</p>
                                <p className="text-gray-400 text-sm">Idle Robots</p>
                            </div>
                        </div>
                    </div>

                    {/* Section: Commands */}
                    <div className="bg-gray-800 shadow-lg rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-100 mb-4">Send Commands</h3>
                        <p className="text-gray-300">Control individual or all robots from this panel.</p>
                        <div className="mt-4">
                            <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow">
                                Send Global Command
                            </button>
                        </div>
                    </div>

                    {/* Section: Live Feed */}
                    <div className="bg-gray-800 shadow-lg rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-100 mb-4">Live Feed</h3>
                        <p className="text-gray-300">View live data from robots in real-time.</p>
                        <div className="mt-4 h-40 bg-gray-700 rounded-lg flex items-center justify-center">
                            <span className="text-gray-400">[Live feed here]</span>
                        </div>
                    </div>

                    {/* Section: Notifications */}
                    <div className="bg-gray-800 shadow-lg rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-100 mb-4">Recent Notifications</h3>
                        <ul className="space-y-3">
                            <li className="text-gray-400">• Robot A123 has completed its task.</li>
                            <li className="text-gray-400">• Maintenance scheduled for Robot B456.</li>
                            <li className="text-gray-400">• Error reported on Robot C789.</li>
                        </ul>
                    </div>

                    {/* Section: Power Usage */}
                    <div className="bg-gray-800 shadow-lg rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-100 mb-4">Power Usage</h3>
                        <div className="mt-4">
                            <p className="text-gray-300">Total power consumption: <span className="text-white font-bold">85%</span></p>
                            <div className="w-full bg-gray-700 h-2 mt-2 rounded">
                                <div className="bg-green-500 h-2 rounded" style={{ width: '85%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
