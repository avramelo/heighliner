"use client";

import { useRouter } from "next/router";

const ErrorPage = () => {
  const router = useRouter();
  const { error } = router.query;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
        <p className="text-gray-600 mb-6">{error || "An unexpected error occurred"}</p>
        <button
          onClick={() => router.push("/")}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Return Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
