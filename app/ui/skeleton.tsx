'use client';

import './loaders.css';

export default function DashboardSkeleton() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 p-10">
      <div className="card">
        <div className="loader">
          <p>loading</p>
          <div className="words">
            <span className="word">buttons</span>
            <span className="word">forms</span>
            <span className="word">switches</span>
            <span className="word">cards</span>
            <span className="word">buttons</span>
          </div>
        </div>
      </div>

      <div className="w-full max-w-4xl space-y-4">
        <div className="h-6 bg-white-800 rounded animate-pulse"></div>
        <div className="h-6 bg-white-700 w-3/4 rounded animate-pulse"></div>
        <div className="h-40 bg-white-900 rounded animate-pulse"></div>
        <div className="h-6 bg-white-700 w-1/2 rounded animate-pulse"></div>
        <div className="h-20 bg-white-800 rounded animate-pulse"></div>
      </div>
    </div>
  );
}
