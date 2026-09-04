import React, { useState } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const inputStyle = {
  height: 48,
  padding: "0 14px",
  border: "1px solid #d8c3ad",
  borderRadius: 8,
  background: "#f7f9fb",
  fontFamily: "inherit",
  fontSize: 16,
  color: "#191c1e",
};

const faqs = [
  ["Is it really free?", "Yes. Counselling, admission guidance and the grant are funded by Tritorc. A student never pays us anything."],
  ["Who is eligible?", "Students based in India who have completed Class 12 or equivalent and are heading into engineering."],
  ["What documents do I need?", "Marksheets and an income certificate at the verification stage. Nothing is needed to start the application."],
  ["How much support is given?", "It is decided per student. Our first supported student received ₹14 lakh toward an engineering degree at Thadomal Shahani Engineering College, Mumbai."],
  ["Is the grant renewable?", "Some grants are one-time and some continue year to year, contingent on maintaining a CGPA of 7. Tritorc decides per student."],
  ["Can my parents contact you?", "Please do. Most of our conversations about fees happen with the family present."],
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sent

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: wire this up to a real form backend (Formspree / Netlify Forms / API endpoint).
    console.log("Contact form submitted:", form);
    setStatus("sent");
  }

  return (
    <>
      <Header />
      <main>
        <section style={{ background: "#ffffff", borderBottom: "1px solid #e6e8ea" }}>
          <div style={{ maxWidth: 1320, margin: "0 auto", padding: "56px clamp(16px,4vw,56px)" }}>
            <h1 style={{ margin: 0, maxWidth: "22em", fontSize: "clamp(32px, 3.4vw, 56px)", lineHeight: 1.15, letterSpacing: "-0.02em", fontWeight: 700, color: "#191c1e", textWrap: "pretty" }}>
              Talk to a person, not a form.
            </h1>
            <p style={{ margin: "16px 0 0", maxWidth: "38em", fontSize: 18, lineHeight: "28px", color: "#534434", textWrap: "pretty" }}>
              Omkar reads every message himself and usually replies within 24–48 hours. Parents are welcome to write in instead of the student.
            </p>
          </div>
        </section>

        <section>
          <div style={{ maxWidth: 1320, margin: "0 auto", padding: "56px clamp(16px,4vw,56px)" }}>
            <div className="flex flex-col md:flex-row" style={{ gap: 32, alignItems: "flex-start" }}>
              {/* Channels */}
              <div style={{ flex: "0 0 auto", width: "min(100%,380px)", display: "grid", gap: 16 }}>
                <a href="mailto:omkar@tritorc.com" style={{ display: "flex", gap: 16, padding: 24, borderRadius: 16, background: "#ffffff", border: "1px solid #e6e8ea", textDecoration: "none" }}>
                  <span style={{ flex: "0 0 auto", display: "inline-flex", alignItems: "center", justifyContent: "center", width: 44, height: 44, borderRadius: 10, background: "#c5e7ff", color: "#004c6a" }}><span className="material-symbols-outlined">mail</span></span>
                  <span style={{ minWidth: 0 }}>
                    <span style={{ display: "block", fontSize: 20, lineHeight: "28px", fontWeight: 600, color: "#191c1e" }}>Email</span>
                    <span style={{ display: "block", marginTop: 4, fontSize: 16, color: "#534434" }}>Best for documents and long questions.</span>
                    <span style={{ display: "block", marginTop: 8, fontSize: 14, fontWeight: 600, color: "#855300", wordBreak: "break-all" }}>omkar@tritorc.com</span>
                  </span>
                </a>
                <div style={{ display: "flex", gap: 16, padding: 24, borderRadius: 16, background: "#f2f4f6", border: "1px solid #e6e8ea" }}>
                  <span style={{ flex: "0 0 auto", display: "inline-flex", alignItems: "center", justifyContent: "center", width: 44, height: 44, borderRadius: 10, background: "#ffffff", color: "#534434" }}><span className="material-symbols-outlined">location_on</span></span>
                  <div style={{ minWidth: 0 }}>
                    <p style={{ margin: 0, fontSize: 20, lineHeight: "28px", fontWeight: 600, color: "#191c1e" }}>Head office</p>
                    <p style={{ margin: "4px 0 0", fontSize: 16, color: "#534434" }}>Tritorc, Thane, Maharashtra, India</p>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div style={{ flex: "1 1 0%", minWidth: 0, padding: 32, borderRadius: 16, background: "#ffffff", border: "1px solid #e6e8ea" }}>
                <h2 style={{ margin: 0, fontSize: "clamp(26px, 2.2vw, 36px)", lineHeight: 1.25, letterSpacing: "-0.01em", fontWeight: 700, color: "#191c1e" }}>Send a message</h2>
                <p style={{ margin: "8px 0 32px", fontSize: 16, color: "#534434" }}>Tell us where you are in the process — Class 12 in progress, results out, or already admitted somewhere.</p>
                {status === "sent" ? (
                  <div style={{ padding: 20, borderRadius: 12, background: "#eaf7ee", border: "1px solid #bfe6cb", color: "#1e5b31", fontSize: 16 }}>
                    Thanks, {form.name || "there"} — your message is in. We'll get back to you within 24–48 hours.
                  </div>
                ) : (
                  <form style={{ display: "grid", gap: 20 }} onSubmit={handleSubmit}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 20 }}>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <label htmlFor="name" style={{ fontSize: 14, fontWeight: 600, color: "#534434" }}>Full name</label>
                        <input id="name" name="name" type="text" placeholder="Your name" required value={form.name} onChange={handleChange} style={inputStyle} />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <label htmlFor="phone" style={{ fontSize: 14, fontWeight: 600, color: "#534434" }}>Phone / WhatsApp</label>
                        <input id="phone" name="phone" type="tel" placeholder="+91" value={form.phone} onChange={handleChange} style={inputStyle} />
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                      <label htmlFor="email" style={{ fontSize: 14, fontWeight: 600, color: "#534434" }}>Email</label>
                      <input id="email" name="email" type="email" placeholder="you@example.com" required value={form.email} onChange={handleChange} style={inputStyle} />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                      <label htmlFor="message" style={{ fontSize: 14, fontWeight: 600, color: "#534434" }}>How can we help?</label>
                      <textarea id="message" name="message" rows={5} placeholder="Where you are studying, what you want to study, and what is standing in the way." required value={form.message} onChange={handleChange} style={{ padding: 14, border: "1px solid #d8c3ad", borderRadius: 8, background: "#f7f9fb", fontFamily: "inherit", fontSize: 16, lineHeight: "24px", color: "#191c1e", resize: "vertical" }}></textarea>
                      <span style={{ fontSize: 14, color: "#534434" }}>Your details stay with the programme team. We do not share them.</span>
                    </div>
                    <button type="submit" style={{ justifySelf: "start", display: "inline-flex", alignItems: "center", gap: 8, height: 52, padding: "0 32px", border: "none", borderRadius: 8, background: "#f59e0b", color: "#2a1700", fontFamily: "inherit", fontSize: 16, fontWeight: 600, cursor: "pointer" }}>
                      Send message <span className="material-symbols-outlined" style={{ fontSize: 20 }}>send</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ background: "#ffffff", borderTop: "1px solid #e6e8ea" }}>
          <div style={{ maxWidth: 1320, margin: "0 auto", padding: "64px clamp(16px,4vw,56px)" }}>
            <h2 style={{ margin: 0, fontSize: "clamp(26px, 2.2vw, 36px)", lineHeight: 1.25, letterSpacing: "-0.01em", fontWeight: 700, color: "#191c1e" }}>Common questions</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 24, marginTop: 40 }}>
              {faqs.map(([q, a]) => (
                <div key={q}>
                  <h3 style={{ margin: 0, fontSize: 20, lineHeight: "28px", fontWeight: 600, color: "#191c1e" }}>{q}</h3>
                  <p style={{ margin: "8px 0 0", fontSize: 16, lineHeight: "24px", color: "#534434" }}>{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
