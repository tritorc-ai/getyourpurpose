import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={{ background: "#f2f4f6", borderTop: "1px solid #e6e8ea" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "48px clamp(16px,4vw,56px)", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 40 }}>
        <div>
          <p style={{ margin: 0, fontSize: 20, fontWeight: 700, color: "#855300" }}>Get Your Purpose</p>
          <p style={{ margin: "10px 0 0", fontSize: 16, color: "#534434", display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
            An initiative by{" "}
            <a href="https://www.tritorc.com/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", textDecoration: "none" }}>
              <img alt="Tritorc" src="https://www.tritorc.com/images/logo.png" style={{ height: 24, width: "auto", objectFit: "contain" }} />
            </a>{" "}
            <span>— manufacturing in Mumbai since 1989.</span>
          </p>
          <p style={{ margin: "16px 0 0", fontSize: 14, color: "#534434" }}>© 2026 Get Your Purpose. All rights reserved.</p>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 48 }}>
          <div>
            <p style={{ margin: "0 0 12px", fontSize: 14, fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase", color: "#191c1e" }}>Programme</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <Link to="/about" style={{ fontSize: 16, color: "#534434", textDecoration: "none" }}>About us</Link>
              <Link to="/apply" style={{ fontSize: 16, color: "#534434", textDecoration: "none" }}>Apply</Link>
              <Link to="/#how-it-works" style={{ fontSize: 16, color: "#534434", textDecoration: "none" }}>How it works</Link>
            </div>
          </div>
          <div>
            <p style={{ margin: "0 0 12px", fontSize: 14, fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase", color: "#191c1e" }}>Talk to us</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <Link to="/contact" style={{ fontSize: 16, color: "#534434", textDecoration: "none" }}>Contact page</Link>
              <a href="mailto:omkar@tritorc.com" style={{ fontSize: 16, color: "#534434", textDecoration: "none" }}>omkar@tritorc.com</a>
              <span style={{ fontSize: 16, color: "#534434" }}>Thane, Maharashtra, India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
