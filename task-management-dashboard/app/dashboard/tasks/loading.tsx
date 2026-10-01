export default function Loading() {
  return (
    <div aria-busy="true" aria-live="polite">
      <h1 className="mb-4 text-2xl font-bold">Loading tasks...</h1>
      <div className="space-y-3">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="h-20 animate-pulse rounded border bg-gray-100"
          />
        ))}
      </div>
    </div>
  );
}


