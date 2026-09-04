import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Fold */}
        <section style={{ background: "#ffffff", borderBottom: "1px solid #e6e8ea" }}>
          <div style={{ maxWidth: 1320, margin: "0 auto", padding: "56px clamp(16px,4vw,56px) 0" }}>
            <div className="flex flex-col md:flex-row" style={{ alignItems: "flex-start", gap: 48 }}>
              <div style={{ flex: "1 1 0%", minWidth: 0, paddingBottom: 56 }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 999, background: "#ffddb8", color: "#653e00", fontSize: 14, fontWeight: 600, whiteSpace: "nowrap" }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 18 }}>verified</span> Funded by Tritorc · for students in India
                </span>
                <h1 style={{ margin: "20px 0 0", fontSize: "clamp(32px, 3.4vw, 56px)", lineHeight: 1.15, letterSpacing: "-0.02em", fontWeight: 700, color: "#191c1e", textWrap: "pretty" }}>
                  For Class 12 students who know what they want to build.
                </h1>
                <p style={{ margin: "20px 0 0", maxWidth: "34em", fontSize: 18, lineHeight: "28px", color: "#534434", textWrap: "pretty" }}>
                  Free career counselling, help getting into an engineering college, and direct financial support — paid from Tritorc's own money. There is no fee to the student, ever.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 16, marginTop: 32 }}>
                  <Link to="/apply" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", height: 52, padding: "0 32px", borderRadius: 8, background: "#f59e0b", color: "#2a1700", fontSize: 16, fontWeight: 600, textDecoration: "none", whiteSpace: "nowrap" }}>
                    Apply now
                  </Link>
                  <a href="#how-it-works" style={{ display: "inline-flex", alignItems: "center", gap: 6, height: 52, color: "#855300", fontSize: 16, fontWeight: 600, textDecoration: "none" }}>
                    See how it works <span className="material-symbols-outlined" style={{ fontSize: 20 }}>arrow_forward</span>
                  </a>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: 24, marginTop: 44, paddingTop: 28, borderTop: "1px solid #e6e8ea" }}>
                  <div>
                    <p style={{ margin: 0, fontSize: 24, fontWeight: 700, color: "#855300" }}>100+ Students</p>
                    <p style={{ margin: "4px 0 0", fontSize: 14, lineHeight: "20px", color: "#534434" }}>Have received financial aid</p>
                  </div>
                  <div>
                    <p style={{ margin: 0, fontSize: 24, fontWeight: 700, color: "#855300" }}>Internship</p>
                    <p style={{ margin: "4px 0 0", fontSize: 14, lineHeight: "20px", color: "#534434" }}>Tritorc's engineering heritage, from Mumbai</p>
                  </div>
                </div>
              </div>
              <div style={{ flex: "0 0 auto", width: "min(100%,460px)", alignSelf: "center", paddingBottom: 56, position: "relative" }}>
                <div style={{ position: "relative", aspectRatio: "1/1", borderRadius: 16, overflow: "hidden", background: "#eceef0" }}>
                  <img alt="Engineering students working through a problem together" src="https://images.unsplash.com/photo-1686624386665-4cd01b96d0f6?fm=jpg&q=80&w=1000&auto=format&fit=crop" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The founder */}
        <section style={{ background: "#ffffff", borderBottom: "1px solid #e6e8ea" }}>
          <div style={{ maxWidth: 1320, margin: "0 auto", padding: "64px clamp(16px,4vw,56px)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <span style={{ display: "inline-block", width: 40, height: 3, background: "#d81f26" }}></span>
              <a href="https://www.tritorc.com/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
                <img alt="Tritorc" src="https://www.tritorc.com/images/logo.png" style={{ height: 28, width: "auto", objectFit: "contain" }} />
                <span style={{ fontSize: 14, fontWeight: 600, color: "#534434" }}>tritorc.com</span>
              </a>
            </div>
            <div className="flex flex-col md:flex-row" style={{ gap: 48, alignItems: "center", marginTop: 32 }}>
              <div style={{ flex: "0 0 auto", width: "min(100%,280px)" }}>
                <div style={{ borderRadius: 16, overflow: "hidden", background: "#eceef0", aspectRatio: "4/5", position: "relative", borderBottom: "4px solid #d81f26" }}>
                  <img alt="Naresh Purswani, Founder of Tritorc" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCINzBNXYXWSGNkeaZrn72mLJLJwuBcTc7iH7ikBLjR0jczHKGdONK55PpbYwU6zUzUrQLyzj5lEMWFNVeJZVwmI5ZQ7gMF-YamH47dAzWUDl7bUw0wb9NCNiA4Wcj4aediX-d_ulCMJsOKrbw5e0GlGutKYjAEZcjhCYbiF40A9OjopfWevs36fNTf6uncS6wcrtgG3sRi_Aw-54IFe0blSeUO6fxOVJ6XUcfa3SJSLMZSf7MTzX5QXDYCxkN2EfGeN8s" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
                </div>
              </div>
              <div style={{ flex: "1 1 0%", minWidth: 0 }}>
                <blockquote style={{ margin: 0, padding: 0 }}>
                  <p style={{ margin: 0, maxWidth: "24em", fontSize: "clamp(26px, 2.2vw, 34px)", lineHeight: 1.35, letterSpacing: "-0.01em", fontWeight: 700, color: "#191c1e", textWrap: "pretty" }}>
                    &ldquo;Ability is everywhere. Opportunity isn't. We're just closing that gap.&rdquo;
                  </p>
                  <footer style={{ marginTop: 20, fontSize: 16, lineHeight: "24px", color: "#534434" }}>
                    <span style={{ display: "block", fontSize: 20, fontWeight: 600, color: "#191c1e" }}>Naresh Purswani</span>
                    <span style={{ display: "block", marginTop: 2, fontSize: 14, fontWeight: 600, color: "#d81f26" }}>Founder &amp; Director, Tritorc</span>
                  </footer>
                </blockquote>
                <p style={{ margin: "24px 0 0", maxWidth: "36em", fontSize: 18, lineHeight: "28px", color: "#534434", textWrap: "pretty" }}>
                  He began making impact sockets in Mumbai in 1989 and built them into a global engineering company. This programme is funded from that business — and he reviews the students it supports himself.
                </p>
                <Link to="/about" style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 20, fontSize: 16, fontWeight: 600, color: "#855300", textDecoration: "none" }}>
                  Read his story <span className="material-symbols-outlined" style={{ fontSize: 20 }}>arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* AMIE alternate pathway */}
        <section style={{ background: "#f7f9fb", borderTop: "1px solid #e6e8ea" }}>
          <div style={{ maxWidth: 1320, margin: "0 auto", padding: "64px clamp(16px,4vw,56px)" }}>
            <div className="flex flex-col md:flex-row" style={{ gap: 48, alignItems: "center" }}>
              <div style={{ flex: "1 1 0%", minWidth: 0 }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 999, background: "#c5e7ff", color: "#004c6a", fontSize: 14, fontWeight: 600, whiteSpace: "nowrap" }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 18 }}>workspace_premium</span> Didn't get into an engineering college?
                </span>
                <h2 style={{ margin: "20px 0 0", maxWidth: "22em", fontSize: "clamp(26px, 2.2vw, 36px)", lineHeight: 1.25, letterSpacing: "-0.01em", fontWeight: 700, color: "#191c1e", textWrap: "pretty" }}>
                  AMIE gets you a degree equivalent to BE/B.Tech — without a seat.
                </h2>
                <p style={{ margin: "16px 0 0", maxWidth: "38em", fontSize: 16, lineHeight: "26px", color: "#534434", textWrap: "pretty" }}>
                  AMIE (Associate Member of the Institution of Engineers, India) is a recognised path to an engineering-equivalent degree, run by the Institution of Engineers (India). You can study while working, sit exams section by section, and it's accepted across India as equivalent to a BE/B.Tech.
                </p>
                <ul style={{ margin: "24px 0 0", padding: 0, listStyle: "none", display: "grid", gap: 10 }}>
                  <li style={{ display: "flex", gap: 10, fontSize: 16, lineHeight: "24px", color: "#534434" }}><span className="material-symbols-outlined" style={{ fontSize: 20, color: "#004c6a" }}>check_circle</span>No entrance exam or college seat needed to start</li>
                  <li style={{ display: "flex", gap: 10, fontSize: 16, lineHeight: "24px", color: "#534434" }}><span className="material-symbols-outlined" style={{ fontSize: 20, color: "#004c6a" }}>check_circle</span>Evening and Sunday classes — study alongside a job</li>
                  <li style={{ display: "flex", gap: 10, fontSize: 16, lineHeight: "24px", color: "#534434" }}><span className="material-symbols-outlined" style={{ fontSize: 20, color: "#004c6a" }}>check_circle</span>Degree recognised as equivalent to BE/B.Tech by AICTE and the Indian government</li>
                </ul>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 28 }}>
                  <a href="https://ieipune.org/Section_A_B/AMIE_Classes.html" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 6, height: 48, padding: "0 24px", borderRadius: 8, background: "#00164e", color: "#ffffff", fontSize: 15, fontWeight: 600, textDecoration: "none", whiteSpace: "nowrap" }}>
                    See AMIE classes at IEI Pune <span className="material-symbols-outlined" style={{ fontSize: 18 }}>open_in_new</span>
                  </a>
                  <Link to="/contact" style={{ display: "inline-flex", alignItems: "center", height: 48, padding: "0 20px", color: "#855300", fontSize: 15, fontWeight: 600, textDecoration: "none" }}>Ask us about it</Link>
                </div>
              </div>
              <div style={{ flex: "0 0 auto", width: "min(100%,360px)", borderRadius: 16, background: "#ffffff", border: "1px solid #e6e8ea", overflow: "hidden" }}>
                <div style={{ width: "100%", aspectRatio: "16/10", background: "#eceef0", position: "relative" }}>
                  <img alt="Evening classroom session, students studying together" src="https://images.unsplash.com/photo-1598981457915-aea220950616?fm=jpg&q=80&w=800&auto=format&fit=crop" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ padding: 28 }}>
                  <p style={{ margin: 0, fontSize: 14, fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase", color: "#534434" }}>Run by</p>
                  <p style={{ margin: "8px 0 0", fontSize: 18, lineHeight: "26px", fontWeight: 600, color: "#191c1e" }}>The Institution of Engineers (India), Pune Local Centre</p>
                  <p style={{ margin: "16px 0 0", fontSize: 15, lineHeight: "22px", color: "#534434" }}>Section A and Section B refresher classes, evening and Sunday batches. Fees are paid directly to IEI, not to us — we're just pointing you to a real option.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who gets selected */}
        <section style={{ background: "#00164e", color: "#ffffff" }}>
          <div style={{ maxWidth: 1400, margin: "0 auto", padding: "72px clamp(16px,4vw,56px)" }}>
            <div style={{ textAlign: "center" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 999, border: "1px solid rgba(255,221,184,.35)", color: "#ffddb8", fontSize: 14, fontWeight: 600 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>school</span> Selection
              </span>
              <h2 style={{ margin: "20px 0 0", fontSize: "clamp(28px, 2.8vw, 40px)", lineHeight: 1.2, letterSpacing: "-0.01em", fontWeight: 700, textWrap: "pretty" }}>
                Right students. Real need, real impact.
              </h2>
              <p style={{ margin: "14px auto 0", maxWidth: "34em", fontSize: 16, lineHeight: "24px", color: "#b9c2ea" }}>
                A fair, transparent process, built to reach students who genuinely need the support.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: 20, marginTop: 48 }}>
              <div style={{ padding: "32px 28px", background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.12)", borderRadius: 20 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <span style={{ width: 34, height: 34, borderRadius: 999, background: "#d81f26", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, flex: "0 0 auto" }}>01</span>
                  <p style={{ margin: 0, fontSize: 15, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: "#ffffff" }}>Eligibility</p>
                </div>
                <div style={{ marginTop: 24 }}>
                  {[
                    "Based in India, finished Class 12 or equivalent",
                    "Heading into an engineering diploma or degree",
                    "From a family under genuine financial pressure — verified, not assumed",
                    "Able to hold a CGPA of 7 once you start, if the grant is to renew",
                  ].map((text, i) => (
                    <div key={text} style={{ display: "flex", alignItems: "baseline", gap: 16, padding: "16px 0", borderBottom: i < 3 ? "1px solid rgba(255,255,255,.1)" : "none" }}>
                      <span style={{ fontSize: 24, fontWeight: 800, color: "rgba(255,221,184,.4)", flex: "0 0 auto" }}>{String(i + 1).padStart(2, "0")}</span>
                      <p style={{ margin: 0, fontSize: 15, lineHeight: "22px", color: "#dce1ff" }}>{text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ position: "relative", padding: "32px 28px", background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.12)", borderRadius: 20 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <span style={{ width: 34, height: 34, borderRadius: 999, background: "#d81f26", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, flex: "0 0 auto" }}>02</span>
                  <p style={{ margin: 0, fontSize: 15, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: "#ffffff" }}>What to send</p>
                </div>
                <div style={{ marginTop: 24, display: "grid", gap: 12 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 16px", background: "rgba(255,255,255,.05)", borderRadius: 12, border: "1px solid rgba(255,255,255,.08)" }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 19, color: "#ffddb8" }}>check_circle</span>
                    <p style={{ margin: 0, fontSize: 15, color: "#dce1ff" }}>Class 10 and 12 marksheets</p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 16px", background: "rgba(216,31,38,.14)", borderRadius: 12, border: "1px solid rgba(216,31,38,.4)" }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 19, color: "#ff9b9e" }}>priority_high</span>
                    <p style={{ margin: 0, fontSize: 15, color: "#dce1ff" }}><strong style={{ color: "#ffffff" }}>Income certificate</strong> — mandatory</p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 16px", background: "rgba(216,31,38,.14)", borderRadius: 12, border: "1px solid rgba(216,31,38,.4)" }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 19, color: "#ff9b9e" }}>priority_high</span>
                    <p style={{ margin: 0, fontSize: 15, color: "#dce1ff" }}><strong style={{ color: "#ffffff" }}>Cover letter</strong> — why engineering</p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 16px", background: "rgba(255,255,255,.05)", borderRadius: 12, border: "1px solid rgba(255,255,255,.08)" }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 19, color: "#ffddb8" }}>check_circle</span>
                    <p style={{ margin: 0, fontSize: 15, color: "#dce1ff" }}>Photo ID / admission letter, if you have one</p>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 24, padding: "32px 28px", background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.12)", borderRadius: 20 }}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <span style={{ width: 34, height: 34, borderRadius: 999, background: "#d81f26", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, flex: "0 0 auto" }}>03</span>
                  <p style={{ margin: 0, fontSize: 15, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: "#ffffff" }}>How it runs</p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 16px", background: "rgba(255,221,184,.12)", borderRadius: 999 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 18, color: "#ffddb8" }}>favorite</span>
                  <p style={{ margin: 0, fontSize: 14, color: "#dce1ff" }}>Few students, funded properly.</p>
                </div>
              </div>
              <div style={{ marginTop: 32 }}>
                <div className="flex flex-col md:flex-row md:min-w-[820px]" style={{ position: "relative", paddingTop: 6, gap: 16 }}>
                  <div className="hidden md:block" style={{ position: "absolute", top: 15, left: 0, right: 0, height: 2, background: "rgba(255,221,184,.25)" }}></div>
                  {[
                    ["Application", "Fill the form with basic details", "#ffddb8"],
                    ["Screening", "We check eligibility and documents", "#ffddb8"],
                    ["Document check", "Our team verifies the documents", "#ffddb8"],
                    ["Shortlist", "Shortlisted students move forward", "#ffddb8"],
                    ["Interview", "A short conversation with our team", "#ffddb8"],
                    ["Decision", "Final decision and grant confirmation", "#ffddb8"],
                  ].map(([title, desc, dot]) => (
                    <div key={title} style={{ flex: 1, position: "relative" }}>
                      <span style={{ display: "block", width: 12, height: 12, borderRadius: 999, background: dot, position: "relative", zIndex: 1, marginBottom: 16 }}></span>
                      <p style={{ margin: 0, fontSize: 15, fontWeight: 700, color: "#ffffff" }}>{title}</p>
                      <p style={{ margin: "4px 0 0", fontSize: 13, lineHeight: "18px", color: "#b9c2ea" }}>{desc}</p>
                    </div>
                  ))}
                  <div style={{ flex: 1, position: "relative" }}>
                    <span style={{ display: "block", width: 12, height: 12, borderRadius: 999, background: "#d81f26", position: "relative", zIndex: 1, marginBottom: 16 }}></span>
                    <p style={{ margin: 0, fontSize: 15, fontWeight: 700, color: "#ffddb8" }}>Disbursement</p>
                    <p style={{ margin: "4px 0 0", fontSize: 13, lineHeight: "18px", color: "#b9c2ea" }}>Support is disbursed directly</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" style={{ background: "#ffffff" }}>
          <div style={{ maxWidth: 1320, margin: "0 auto", padding: "72px clamp(16px,4vw,56px)" }}>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-around", gap: 16 }}>
              <div>
                <h2 style={{ margin: 0, fontSize: "clamp(26px, 2.2vw, 36px)", lineHeight: 1.25, letterSpacing: "-0.01em", fontWeight: 700, color: "#191c1e" }}>How it works</h2>
                <p style={{ margin: "8px 0 0", fontSize: 16, color: "#534434" }}>Three steps, all of them free.</p>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 0, marginTop: 48, border: "1px solid #e6e8ea", borderRadius: 20, overflow: "hidden" }}>
              <div style={{ padding: "36px 32px", borderRight: "1px solid #e6e8ea", position: "relative", backgroundColor: "#8553000F" }}>
                <span style={{ fontSize: 56, fontWeight: 800, letterSpacing: "-0.03em", color: "#E9AC69" }}>01</span>
                <h3 style={{ margin: "20px 0 0", fontSize: 21, lineHeight: "28px", fontWeight: 700, color: "#191c1e" }}>Apply</h3>
                <p style={{ margin: "10px 0 0", fontSize: 16, lineHeight: "24px", color: "#534434" }}>A short form: your marks, your family's income bracket, and what you want to study. We are looking for intent, not polish.</p>
                <span style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 4, background: "#855300" }}></span>
              </div>
              <div style={{ padding: "36px 32px", borderRight: "1px solid #e6e8ea", position: "relative", backgroundColor: "#D81F260F" }}>
                <span style={{ fontSize: 56, fontWeight: 800, letterSpacing: "-0.03em", color: "#E9AC69" }}>02</span>
                <h3 style={{ margin: "20px 0 0", fontSize: 21, lineHeight: "28px", fontWeight: 700, color: "#191c1e" }}>Free career counselling</h3>
                <p style={{ margin: "10px 0 0", fontSize: 16, lineHeight: "24px", color: "#534434" }}>You speak with our programme team and with engineers at Tritorc. Together you narrow down a branch, a college list, and a realistic plan.</p>
                <span style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 4, background: "#d81f26" }}></span>
              </div>
              <div style={{ padding: "36px 32px", position: "relative", backgroundColor: "#CCCCCC0F" }}>
                <span style={{ fontSize: 56, fontWeight: 800, letterSpacing: "-0.03em", color: "#E9AC69" }}>03</span>
                <h3 style={{ margin: "20px 0 0", fontSize: 21, lineHeight: "28px", fontWeight: 700, color: "#191c1e" }}>Admission and financial support</h3>
                <p style={{ margin: "10px 0 0", fontSize: 16, lineHeight: "24px", color: "#534434" }}>We help you through the admission process, and selected students receive a grant paid toward their fees.</p>
                <span style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 4, background: "#00164e" }}></span>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars */}
        <section style={{ background: "#f7f9fb", borderTop: "1px solid #e6e8ea" }}>
          <div style={{ maxWidth: 1320, margin: "0 auto", padding: "64px clamp(16px,4vw,56px)" }}>
            <h2 style={{ margin: 0, fontSize: "clamp(26px, 2.2vw, 36px)", lineHeight: 1.25, letterSpacing: "-0.01em", fontWeight: 700, color: "#191c1e", textAlign: "center" }}>What you actually get</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 24, marginTop: 40 }}>
              <div style={{ display: "flex", flexDirection: "column", padding: 28, borderRadius: 16, border: "1px solid #e6e8ea", backgroundColor: "#00000012" }}>
                <h3 style={{ margin: "20px 0 0", fontSize: 20, lineHeight: "28px", fontWeight: 600, color: "#191c1e" }}>Career counselling</h3>
                <p style={{ margin: "8px 0 24px", flex: "1 1 auto", fontSize: 16, lineHeight: "24px", color: "#534434" }}>One-to-one sessions to find what you are actually good at, what the work looks like day to day, and which branch is worth four years of your life.</p>
                <Link to="/about" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 14, fontWeight: 600, color: "#855300", textDecoration: "none" }}>
                  Meet your counsellor <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
                </Link>
              </div>
              <div style={{ display: "flex", flexDirection: "column", padding: 28, borderRadius: 16, border: "1px solid #e6e8ea", backgroundColor: "#07070712" }}>
                <h3 style={{ margin: "20px 0 0", fontSize: 20, lineHeight: "28px", fontWeight: 600, color: "#191c1e" }}>Admission and fees</h3>
                <p style={{ margin: "8px 0 24px", flex: "1 1 auto", fontSize: 16, lineHeight: "24px", color: "#534434" }}>Guidance through engineering college admissions, plus a direct grant toward fees for selected students. Terms are agreed with your family in writing.</p>
                <Link to="/apply" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 14, fontWeight: 600, color: "#855300", textDecoration: "none" }}>
                  Check eligibility <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
                </Link>
              </div>
              <div style={{ display: "flex", flexDirection: "column", padding: 28, borderRadius: 16, border: "1px solid #e6e8ea", backgroundColor: "#05050512" }}>
                <h3 style={{ margin: "20px 0 0", fontSize: 20, lineHeight: "28px", fontWeight: 600, color: "#191c1e" }}>Internships at Tritorc</h3>
                <p style={{ margin: "8px 0 24px", flex: "1 1 auto", fontSize: 16, lineHeight: "24px", color: "#534434" }}>Time on the floor of a working engineering company, framed around mentorship and teaching rather than errands. Interns are paid a stipend.</p>
                <Link to="/apply" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 14, fontWeight: 600, color: "#855300", textDecoration: "none" }}>
                  Explore internships <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* The people you'll work with */}
        <section style={{ background: "#f7f9fb", borderTop: "1px solid #e6e8ea" }}>
          <div style={{ maxWidth: 1320, margin: "0 auto", padding: "64px clamp(16px,4vw,56px)" }}>
            <div style={{ boxSizing: "border-box", position: "relative", textAlign: "center" }}>
              <h2 style={{ margin: 0, fontSize: "clamp(26px, 2.2vw, 36px)", lineHeight: 1.25, letterSpacing: "-0.01em", fontWeight: 700, color: "#191c1e" }}>The person you will actually talk to</h2>
              <p style={{ margin: "8px auto 0", maxWidth: "40em", fontSize: 16, color: "#534434" }}>Get Your Purpose is run by a small team inside Tritorc. There is no call centre.</p>
            </div>
            <div style={{ display: "flex", justifyContent: "center", marginTop: 40 }}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 28, padding: "32px 36px", borderRadius: 20, background: "#ffffff", border: "1px solid #e6e8ea", width: "100%", maxWidth: 640 }}>
                <div style={{ flex: "0 0 auto", width: 112, height: 112, borderRadius: 999, overflow: "hidden", background: "#f2f4f6", border: "1px solid #e6e8ea" }}>
                  <img alt="Omkar Mungekar" src="https://tritorc.com/blog/add/2025/03/Omkar-Mungekar.webp" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ flex: "1 1 260px", minWidth: 0 }}>
                  <h3 style={{ margin: 0, fontSize: 20, lineHeight: "28px", fontWeight: 600, color: "#191c1e" }}>Omkar Mungekar</h3>
                  <p style={{ margin: "2px 0 0", fontSize: 14, fontWeight: 600, color: "#855300" }}>Marketing lead, Tritorc</p>
                  <p style={{ margin: "10px 0 0", fontSize: 16, lineHeight: "24px", color: "#534434" }}>Omkar produces Tritorc's technical documentation, product manuals and equipment catalogues alongside its marketing and social content, and manages the company's presence at international industry exhibitions.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section style={{ background: "#ffffff", borderTop: "1px solid #e6e8ea" }}>
          <div style={{ maxWidth: 1320, margin: "0 auto", padding: "64px clamp(16px,4vw,56px)" }}>
            <div style={{ padding: 48, borderRadius: 20, background: "#ffddb8", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 32 }}>
              <div style={{ minWidth: 0 }}>
                <h2 style={{ margin: 0, fontSize: "clamp(26px, 2.2vw, 36px)", lineHeight: 1.25, letterSpacing: "-0.01em", fontWeight: 700, color: "#2a1700", textWrap: "pretty" }}>Finished Class 12? Start with the eligibility questions.</h2>
                <p style={{ margin: "12px 0 0", maxWidth: "36em", fontSize: 18, lineHeight: "28px", color: "#653e00" }}>Two questions, no documents needed yet. If you are not eligible we will tell you straight away.</p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
                <Link to="/apply" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", height: 52, padding: "0 32px", borderRadius: 8, background: "#00164e", color: "#ffffff", fontSize: 16, fontWeight: 600, textDecoration: "none", whiteSpace: "nowrap" }}>Apply now</Link>
                <Link to="/contact" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", height: 52, padding: "0 28px", borderRadius: 8, background: "transparent", border: "1px solid #653e00", color: "#653e00", fontSize: 16, fontWeight: 600, textDecoration: "none", whiteSpace: "nowrap" }}>Ask a question</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
