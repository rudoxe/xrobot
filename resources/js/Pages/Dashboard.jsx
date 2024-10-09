import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-2xl text-blakc-200 leading-tight">Robot Dashboard</h2>} // Updated header text and color
        >
            <Head title="Dashboard" />

            <div className="py-12 bg-gray-900"> {/* Set background to dark gray */}
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg"> {/* Darker container background */}
                        <div className="p-6 text-gray-100">
                            Welcome to the Robot Control Center! You can monitor and manage all robotic systems here.
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
