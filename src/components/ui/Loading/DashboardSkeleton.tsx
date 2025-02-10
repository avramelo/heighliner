export const DashboardSkeleton = () => {
  return (
    <div className="py-6 px-2 sm:py-12 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-4 sm:p-6 space-y-4 sm:space-y-6">
        <div className="space-y-3 sm:space-y-4">
          {/* First Token Input */}
          <div className="space-y-2">
            <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
            <div className="h-12 sm:h-14 bg-gray-50 rounded-lg p-2 sm:p-4 flex items-center">
              <div className="h-6 w-16 bg-gray-200 rounded animate-pulse" />
              <div className="flex-1" />
              <div className="h-6 w-20 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>

          {/* Second Token Input */}
          <div className="space-y-2">
            <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
            <div className="h-12 sm:h-14 bg-gray-50 rounded-lg p-2 sm:p-4 flex items-center">
              <div className="h-6 w-16 bg-gray-200 rounded animate-pulse" />
              <div className="flex-1" />
              <div className="h-6 w-20 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>

          {/* Expected LP tokens */}
          <div className="h-4 w-40 bg-gray-200 rounded animate-pulse" />
        </div>

        {/* Button */}
        <div className="h-10 sm:h-12 bg-blue-200 rounded-lg animate-pulse" />
      </div>
    </div>
  );
};
