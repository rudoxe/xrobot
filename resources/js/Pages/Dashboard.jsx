import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard({ auth, robotCount }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-2xl text-blakc-200 leading-tight">Robot Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12 bg-gray-900">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-100">
                            Welcome to the Robot Control Center!
                            <p className="mt-4">You currently have <strong>{robotCount}</strong> robots in the system.</p>
                            <Link
                                href="/robots"
                                className="bg-blue-500 text-white p-2 rounded mt-4 inline-block"
                            >
                                Manage Robots
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
