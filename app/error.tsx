'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h2 className="text-3xl font-bold text-error mb-4">Something went wrong!</h2>
        <p className="text-secondary mb-6">{error.message}</p>
        <button
          onClick={reset}
          className="px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-opacity-90 transition-all"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
