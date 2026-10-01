import Link from "next/link";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <nav className="flex gap-6 border-b bg-gray-100 p-4">
        <Link href="/dashboard" className="font-semibold">Dashboard</Link>
        <Link href="/dashboard/tasks">Tasks</Link>
      </nav>
      <main className="mx-auto max-w-3xl p-6">{children}</main>
    </div>
  );
}


