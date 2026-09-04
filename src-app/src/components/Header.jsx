import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinkStyle = (active) => ({
  fontSize: 14,
  fontWeight: 600,
  color: active ? "#855300" : "#534434",
  textDecoration: "none",
  paddingBottom: active ? 2 : 0,
  borderBottom: active ? "2px solid #855300" : "none",
});

export default function Header() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50, background: "#ffffff", borderBottom: "1px solid #e6e8ea" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 clamp(16px,4vw,56px)", height: 72, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
        <Link to="/" style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.01em", color: "#855300", textDecoration: "none", whiteSpace: "nowrap" }}>
          Get Your Purpose
        </Link>
        <nav className="hidden md:flex" style={{ alignItems: "center", gap: 28 }}>
          <Link to="/" style={navLinkStyle(pathname === "/")}>Home</Link>
          <Link to="/about" style={navLinkStyle(pathname === "/about")}>About Us</Link>
          <Link to="/contact" style={navLinkStyle(pathname === "/contact")}>Contact</Link>
          <Link
            to="/apply"
            style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", height: 44, padding: "0 20px", borderRadius: 8, background: "#f59e0b", color: "#2a1700", fontSize: 14, fontWeight: 600, textDecoration: "none", whiteSpace: "nowrap" }}
          >
            Apply Now
          </Link>
        </nav>
        <div className="flex md:hidden" style={{ alignItems: "center", gap: 8 }}>
          <Link
            to="/apply"
            style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", height: 44, padding: "0 16px", borderRadius: 8, background: "#f59e0b", color: "#2a1700", fontSize: 14, fontWeight: 600, textDecoration: "none" }}
          >
            Apply
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 44, height: 44, padding: 0, borderRadius: 8, background: "transparent", border: "1px solid #e6e8ea", color: "#534434", cursor: "pointer" }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: 24 }}>{open ? "close" : "menu"}</span>
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" className="flex flex-col md:hidden" style={{ borderTop: "1px solid #e6e8ea", background: "#ffffff", padding: "12px clamp(16px,4vw,56px) 20px", gap: 4 }}>
          <Link to="/" onClick={() => setOpen(false)} style={{ ...navLinkStyle(pathname === "/"), borderBottom: "none", padding: "12px 4px" }}>Home</Link>
          <Link to="/about" onClick={() => setOpen(false)} style={{ ...navLinkStyle(pathname === "/about"), borderBottom: "none", padding: "12px 4px" }}>About Us</Link>
          <Link to="/contact" onClick={() => setOpen(false)} style={{ ...navLinkStyle(pathname === "/contact"), borderBottom: "none", padding: "12px 4px" }}>Contact</Link>
          <Link
            to="/apply"
            onClick={() => setOpen(false)}
            style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", height: 44, marginTop: 8, borderRadius: 8, background: "#f59e0b", color: "#2a1700", fontSize: 14, fontWeight: 600, textDecoration: "none" }}
          >
            Apply Now
          </Link>
        </nav>
      )}
    </header>
  );
}
