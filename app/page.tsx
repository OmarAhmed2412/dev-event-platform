import Link from "next/link";

export default function Home() {
  return (
    <>
    <h1>Welcome to the Home</h1>
      <main className="mt-10">
        <ul>
          <li><Link href="/dashboard/analytics">Dashboard analytics</Link></li>
          <li><Link href="/dashboard/users">Dashboard users</Link></li>
          <li><Link href="/dashboard/books">Dashboard books</Link></li>
        </ul>
      </main>
    </>
  );
}
