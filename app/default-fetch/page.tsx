
async function getProducts() {
  console.log("🟡 DEFAULT FETCH: Fetching from API...");
  console.log("⏰ Time:", new Date().toISOString());

  const res = await fetch("https://fakestoreapi.com/products");
  

  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export default async function DefaultFetchPage() {
  const products = await getProducts();

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Case 1: Default Fetch</h1>
      <p><strong>Cache option:</strong> None (Next.js default)</p>
      <p>
        <strong>Behavior:</strong> Next 13/14 = cached (static). Next 15 = not cached (dynamic).
        Check your terminal for the console log — if you refresh and the log doesn't re-appear,
        it was served from cache.
      </p>
      <p><strong>Products loaded:</strong> {products.length}</p>
      <p><strong>Rendered at:</strong> {new Date().toISOString()}</p>
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