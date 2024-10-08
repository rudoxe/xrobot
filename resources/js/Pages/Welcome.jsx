import { Link, Head } from '@inertiajs/react';
import { TypeAnimation } from 'react-type-animation'; // Import TypeAnimation

const ExampleComponent = () => {
    return (
        <TypeAnimation
            sequence={[
                'We build robots for Exploration',
                1000, // wait 1s before replacing "Exploration" with "Automation"
                'We build robots for Automation',
                1000,
                'We build robots for Entertainment',
                1000,
                'We build robots for Assistance',
                1000,
            ]}
            wrapper="span"
            speed={50}
            style={{
                fontSize: '3em',           // Larger font size
                display: 'inline-block',
                color: 'white',            // Text color
                fontWeight: 'bold',        // Bold text
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Add text shadow for depth
                letterSpacing: '2px',      // Space between letters
                animation: 'pulse 2s infinite', // Custom animation (you'll define it in CSS)
            }}
            repeat={Infinity}
        />
    );
};

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className="overlay"></div> {/* Overlay div */}
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-end">
                    {auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className="font-semibold text-white hover:text-gray-300 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="font-semibold text-white hover:text-gray-300 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route('register')}
                                className="ms-4 font-semibold text-white hover:text-gray-300 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>

                <div className="text-center mt-20"> {/* Centered text section */}
                    <ExampleComponent /> {/* Insert the ExampleComponent here */}
                </div>
            </div>

            <style>{`
                .bg-dots-darker {
                    background-image: url('/images/pngtree-black-ai-robot-in-monochromatic-3d-rendering-against-a-black-background-image_3638702.jpg'); /* New background image */
                    background-size: cover;
                    background-repeat: no-repeat;
                }
                .overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: rgba(0, 0, 0, 0.5); /* Change the alpha value to adjust darkness */
                    z-index: 1; /* Make sure it stays on top */
                    pointer-events: none; /* Allow interactions to pass through */
                }
                .font-semibold {
                    color: white; /* Make all buttons' text white */
                }
                .hover\\:text-gray-300:hover {
                    color: #D1D5DB; /* Change button color on hover */
                }
                @media (prefers-color-scheme: dark) {
                    .dark\\:bg-dots-lighter {
                        background-image: url('/images/pngtree-black-ai-robot-in-monochromatic-3d-rendering-against-a-black-background-image_3638702.jpg'); /* New background image for dark mode */
                        background-size: cover;
                        background-repeat: no-repeat;
                    }
                }

                /* Define custom animation for pulsing effect */
                @keyframes pulse {
                    0% {
                        transform: scale(1);
                    }
                    50% {
                        transform: scale(1.05);
                    }
                    100% {
                        transform: scale(1);
                    }
                }
            `}</style>
        </>
    );
}
