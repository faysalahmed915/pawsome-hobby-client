import React from 'react';
import { Link, useRouteError } from 'react-router';

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-6">
            <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-md w-full text-center">
                <h1 className="text-7xl font-extrabold text-red-600 tracking-wide mb-4">
                    {error?.status || 404}
                </h1>
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    Page Not Found
                </h2>
                <p className="text-gray-500 mb-6">
                    Sorry, the page you're looking for doesn't exist or has been moved.
                </p>
                <Link to="/">
                    <button className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-300 font-medium shadow-md">
                        Return Home
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;