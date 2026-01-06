import type { AppProps } from "next/app";
import Sidebar from "../components/Sidebar";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        fontFamily: "system-ui",
      }}
    >
      <Sidebar />
      <div style={{ flex: 1, background: "#f5f7f9" }}>
        <Component {...pageProps} />
      </div>
    </div>
  );
}
