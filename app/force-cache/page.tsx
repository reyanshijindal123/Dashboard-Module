// app/force-cache/page.tsx

async function getProducts() {
  console.log("🟢 FORCE-CACHE: Fetching from API (only once, then cached)...");
  console.log("⏰ Time:", new Date().toISOString());

  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "force-cache",  // ← KEY: cache the response indefinitely
  });

  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
}

export default async function ForceCachePage() {
  const products = await getProducts();

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Case 3: Force Cache</h1>
      <p><strong>Cache option:</strong> <code>cache: "force-cache"</code></p>
      <p>
        <strong>Behavior:</strong> First request fetches from the API and stores the result.
        All future requests use the cached version — no API calls.
        The timestamp below will <em>not</em> change on refresh (it's static HTML).
      </p>
      <p><strong>Products loaded:</strong> {products.length}</p>
      <p><strong>Rendered at:</strong> {new Date().toISOString()}</p>
      <p style={{ background: "#d4edda", padding: "0.5rem", borderRadius: "4px" }}>
        ✅ This page is <strong>statically rendered</strong> — API called once, result cached.
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