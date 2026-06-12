// app/isr-revalidate/page.tsx

async function getProducts() {
  console.log("🔄 ISR FETCH: Calling API...");
  console.log("⏰ Fetched at:", new Date().toISOString());

  const res = await fetch("https://fakestoreapi.com/products", {
    next: {
      revalidate: 10, 
    },
  });

  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export default async function ISRPage() {
  const products = await getProducts();

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1> ISR — Revalidation</h1>

      <div style={{
        background: "#e8f4fd",
        border: "1px solid #90caf9",
        borderRadius: "8px",
        padding: "1rem",
        marginBottom: "2rem"
      }}>
        <h2 style={{ margin: "0 0 0.5rem" }}>⏱ Page last built at:</h2>
        <p style={{ fontSize: "1.5rem", fontWeight: "bold", margin: 0 }}>
          {new Date().toISOString()}
        </p>
        <p style={{ color: "#555", marginTop: "0.5rem" }}>
          Refresh immediately → timestamp stays same (cached) <br />
          Wait 10 sec, then refresh → timestamp updates (revalidated) ✅
        </p>
      </div>

      <div style={{
        background: "#fff9c4",
        border: "1px solid #f9a825",
        borderRadius: "8px",
        padding: "1rem",
        marginBottom: "2rem"
      }}>
        <strong>How ISR works:</strong>
        <ol style={{ margin: "0.5rem 0 0", paddingLeft: "1.2rem" }}>
          <li>First visit → Next.js builds the page and caches it</li>
          <li>Refresh within 10s → served from cache (fast, same timestamp)</li>
          <li>Visit after 10s → Next.js serves old cache BUT triggers a background rebuild</li>
          <li>Next refresh → you see the newly built page with updated timestamp</li>
        </ol>
      </div>

      <h2>Products ({products.length} total)</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {products.slice(0, 6).map((p: any) => (
          <div key={p.id} style={{
            border: "1px solid #ddd",
            padding: "1rem",
            borderRadius: "8px",
            width: "180px"
          }}>
            <p style={{ fontSize: "0.8rem", margin: "0 0 0.5rem" }}>
              {p.title.substring(0, 40)}...
            </p>
            <p style={{ color: "green", fontWeight: "bold", margin: 0 }}>
              ${p.price}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}