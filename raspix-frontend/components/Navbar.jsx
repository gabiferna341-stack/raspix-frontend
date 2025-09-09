export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", background: "#222", color: "#fff" }}>
      <h2>🚀 Raspix</h2>
      <ul style={{ display: "flex", gap: "1rem", listStyle: "none" }}>
        <li><a href="/" style={{ color: "#fff" }}>Home</a></li>
        <li><a href="/about" style={{ color: "#fff" }}>Sobre</a></li>
        <li><a href="/contact" style={{ color: "#fff" }}>Contato</a></li>
      </ul>
    </nav>
  );
}
