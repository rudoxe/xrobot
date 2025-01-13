import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { TypeAnimation } from 'react-type-animation'; // Import TypeAnimation

const AnimatedText = () => {
    return (
        <TypeAnimation
            sequence={[
                'Welcome to the Robot Dashboard',
                1000,
                'Monitor Your Robots Effortlessly',
                1000,
                'Create, Manage, and Innovate',
                1000,
            ]}
            wrapper="h1"
            speed={50}
            style={{
                fontSize: '2.5em',
                fontWeight: 'bold',
                color: 'white',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                textAlign: 'center',
                marginBottom: '20px',
            }}
            repeat={Infinity}
        />
    );
};

export default function Dashboard({ auth, robotCount }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-2xl text-white leading-tight">Robot Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="relative min-h-screen bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center">
                    <AnimatedText />

                    <div className="mt-8">
                        <img
                            src="/images/cute-3d-robot-say-hello-png.png"
                            alt="Cute Robot"
                            className="mx-auto w-60 h-60 object-contain"
                        />
                    </div>

                    <p className="mt-8 text-lg">
                        You currently have <strong>{robotCount}</strong> robots in the system.
                    </p>

                    <Link
                        href="/robots"
                        className="mt-6 inline-block bg-blue-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition"
                    >
                        Manage Robots
                    </Link>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
