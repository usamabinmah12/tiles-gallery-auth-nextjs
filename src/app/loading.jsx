import React from 'react';

const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 w-full">
            <span className="loading loading-infinity loading-xl text-primary scale-150"></span>
            <h2 className="text-2xl font-semibold text-slate-600 animate-pulse">
                Loading your gallery...
            </h2>
        </div>
    );
};

export default Loading;