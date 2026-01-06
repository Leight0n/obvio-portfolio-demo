import Link from "next/link";

export default function Sidebar() {
  return (
    <aside
      style={{
        width: "220px",
        background: "#071b26",
        color: "#ffffff",
        padding: "2rem 1.5rem",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "2rem" }}>
        obvio
      </div>

      <nav style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
        <Link href="/" style={{ color: "#ffffff", textDecoration: "none" }}>
          Dashboard
        </Link>

        <Link
          href="/performance"
          style={{ color: "#ffffff", textDecoration: "none" }}
        >
          Performance
        </Link>

        <Link
          href="/allocation"
          style={{ color: "#ffffff", textDecoration: "none" }}
        >
          Allocation
        </Link>

        <Link
          href="/geography"
          style={{ color: "#ffffff", textDecoration: "none" }}
        >
          Geography
        </Link>
      </nav>
    </aside>
  );
}
