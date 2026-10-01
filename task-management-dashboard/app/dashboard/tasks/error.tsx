"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="rounded border border-red-300 bg-red-50 p-4">
      <h2 className="font-semibold text-red-700">Something went wrong</h2>
      <p className="mb-3 text-sm">{error.message}</p>
      <button onClick={reset} className="rounded bg-red-600 px-3 py-1 text-white">
        Try again
      </button>
    </div>
  );
}
