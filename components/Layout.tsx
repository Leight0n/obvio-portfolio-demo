import { ReactNode } from "react";
import Link from "next/link";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        fontFamily: "system-ui",
      }}
    >
      {/* Sidebar */}
      <aside
        style={{
          width: 220,
          background: "#0b1f2a",
          color: "#ffffff",
          padding: 20,
        }}
      >
        <h2 style={{ marginBottom: 30 }}>obvio</h2>

        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 14,
            fontSize: 15,
          }}
        >
          <Link href="/" style={linkStyle}>
            Dashboard
          </Link>
          <Link href="/performance" style={linkStyle}>
            Performance
          </Link>
          <span style={disabledStyle}>Allocation</span>
          <span style={disabledStyle}>Geography</span>
        </nav>
      </aside>

      {/* Page content */}
      <main
        style={{
          flex: 1,
          padding: 32,
          background: "#f5f7f9",
        }}
      >
        {children}
      </main>
    </div>
  );
}

const linkStyle: React.CSSProperties = {
  color: "#ffffff",
  textDecoration: "none",
  cursor: "pointer",
};

const disabledStyle: React.CSSProperties = {
  opacity: 0.5,
};
