import Link from "next/link";

export default function Sidebar() {
  return (
    <aside
      style={{
        width: 220,
        background: "#071b26",
        color: "#fff",
        padding: "2rem 1rem",
        height: "100vh",
      }}
    >
      <h2 style={{ marginBottom: "2rem" }}>obvio</h2>

      <nav style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Link href="/" style={{ color: "#fff", textDecoration: "none" }}>
          Dashboard
        </Link>

        <Link href="/performance" style={{ color: "#fff", textDecoration: "none" }}>
          Performance
        </Link>

        <Link href="/allocation" style={{ color: "#fff", textDecoration: "none" }}>
          Allocation
        </Link>

        <Link href="/geography" style={{ color: "#fff", textDecoration: "none" }}>
          Geography
        </Link>
      </nav>
    </aside>
  );
}
