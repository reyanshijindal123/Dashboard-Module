// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Fetch Caching Demo</h1>
      <p>Click each link to see how different fetch cache strategies work:</p>
      <ul>
        <li><Link href="/default-fetch">Case 1: Default Fetch (cached)</Link></li>
        <li><Link href="/no-store">Case 2: No Store (always fresh)</Link></li>
        <li><Link href="/force-cache">Case 3: Force Cache (always cached)</Link></li>
        <li><Link href="/isr-revalidate">Case 4: ISR Revalidation (revalidate: 10)</Link></li>
      </ul>
    </main>
  );
}