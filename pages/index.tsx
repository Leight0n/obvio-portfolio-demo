export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#0b1f2a",
      color: "#ffffff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "system-ui, -apple-system, BlinkMacSystemFont"
    }}>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
          obvio Portfolio Demo
        </h1>
        <p style={{ opacity: 0.8 }}>
          Deployment successful. Interactive UI coming next.
        </p>
      </div>
    </main>
  );
}
