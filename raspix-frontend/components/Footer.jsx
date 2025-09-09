export default function Footer() {
  return (
    <footer style={{ padding: "1rem", background: "#111", color: "#aaa", marginTop: "2rem" }}>
      <p>© {new Date().getFullYear()} Raspix - Todos os direitos reservados.</p>
    </footer>
  );
}
