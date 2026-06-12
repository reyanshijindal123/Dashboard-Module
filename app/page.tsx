import Link from "next/link";

export default function Home() {
  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold mb-6">
        Authentication Demo
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <Link
          href="/signup"
          className="border p-6 rounded shadow"
        >
          <h2 className="font-bold">
            Signup
          </h2>
          <p>Create Account</p>
        </Link>

        <Link
          href="/login"
          className="border p-6 rounded shadow"
        >
          <h2 className="font-bold">
            Login
          </h2>
          <p>Access Account</p>
        </Link>

        <Link
          href="/dashboard"
          className="border p-6 rounded shadow"
        >
          <h2 className="font-bold">
            Dashboard
          </h2>
          <p>Protected Route</p>
        </Link>

      </div>
    </main>
  );
}