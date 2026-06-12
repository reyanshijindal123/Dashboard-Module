// app/no-store/page.tsx

async function getProducts() {
  console.log("🔴 NO-STORE: Fetching from API (always fresh)...");
  console.log("⏰ Time:", new Date().toISOString());

  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",  // ← KEY: skip cache entirely, always hit the API
  });

  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
}

// This opt-in tells Next.js: always render this page dynamically (never static)
export const dynamic = "force-dynamic";

export default async function NoStorePage() {
  const products = await getProducts();

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Case 2: No Store</h1>
      <p><strong>Cache option:</strong> <code>cache: "no-store"</code></p>
      <p>
        <strong>Behavior:</strong> Every request hits the real API. 
        Refresh the page multiple times — you'll see a new log in your terminal each time.
        The timestamp below will update on every refresh.
      </p>
      <p><strong>Products loaded:</strong> {products.length}</p>
      <p><strong>Rendered at:</strong> {new Date().toISOString()}</p>
      <p style={{ background: "#fff3cd", padding: "0.5rem", borderRadius: "4px" }}>
        ⚡ This page is <strong>dynamically rendered</strong> — no caching at all.
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "1rem" }}>
        {products.slice(0, 6).map((p: any) => (
          <div key={p.id} style={{ border: "1px solid #ddd", padding: "1rem", borderRadius: "8px", width: "180px" }}>
            <p style={{ fontSize: "0.85rem" }}>{p.title.substring(0, 40)}...</p>
            <p style={{ color: "green" }}>${p.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}