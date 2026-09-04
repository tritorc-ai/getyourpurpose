import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

export default function About() {
  return (
    <>
      <Header />
      <main style={{ textAlign: "center" }}>
        {/* Intro */}
        <section style={{ background: "#ffffff", borderBottom: "1px solid #e6e8ea" }}>
          <div style={{ maxWidth: 1320, margin: "0 auto", padding: "64px clamp(16px,4vw,56px)" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16 }}>
              <span style={{ display: "inline-block", width: 40, height: 3, background: "#d81f26" }}></span>
              <a href="https://www.tritorc.com/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
                <img alt="Tritorc" src="https://www.tritorc.com/images/logo.png" style={{ height: 28, width: "auto", objectFit: "contain" }} />
                <span style={{ fontSize: 14, fontWeight: 600, color: "#534434" }}>tritorc.com</span>
              </a>
            </div>
            <h1 style={{ margin: "24px auto 0", maxWidth: "20em", fontSize: "clamp(32px, 3.4vw, 56px)", lineHeight: 1.15, letterSpacing: "-0.02em", fontWeight: 700, color: "#191c1e", textWrap: "pretty" }}>
              Two people built a manufacturing company. This is what they decided to do with it.
            </h1>
          </div>
        </section>

        {/* Founders */}
        <section style={{ background: "#ffffff", borderBottom: "1px solid #e6e8ea" }}>
          <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 clamp(16px,4vw,56px) 64px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(420px,1fr))", gap: 24, alignItems: "stretch" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16, padding: 24, border: "1px solid #e6e8ea", borderRadius: 16, background: "#fbfcfd" }}>
                <div style={{ flex: "0 0 auto", width: 150, minHeight: 190, borderRadius: 12, overflow: "hidden", background: "#eceef0", borderBottom: "3px solid #d81f26", position: "relative" }}>
                  <img alt="Naresh Purswani" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCINzBNXYXWSGNkeaZrn72mLJLJwuBcTc7iH7ikBLjR0jczHKGdONK55PpbYwU6zUzUrQLyzj5lEMWFNVeJZVwmI5ZQ7gMF-YamH47dAzWUDl7bUw0wb9NCNiA4Wcj4aediX-d_ulCMJsOKrbw5e0GlGutKYjAEZcjhCYbiF40A9OjopfWevs36fNTf6uncS6wcrtgG3sRi_Aw-54IFe0blSeUO6fxOVJ6XUcfa3SJSLMZSf7MTzX5QXDYCxkN2EfGeN8s" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <p style={{ margin: 0, fontSize: 22, lineHeight: "30px", fontWeight: 600, color: "#191c1e" }}>Naresh Purswani</p>
                  <p style={{ margin: "2px 0 0", fontSize: 14, fontWeight: 600, color: "#d81f26" }}>Founder &amp; Director</p>
                  <p style={{ margin: "10px 0 0", fontSize: 16, lineHeight: "24px", color: "#534434" }}>Started making impact sockets in Mumbai in 1989. Reviews every student the programme supports.</p>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16, padding: 24, border: "1px solid #e6e8ea", borderRadius: 16, background: "#fbfcfd" }}>
                <div style={{ flex: "0 0 auto", width: 150, minHeight: 190, borderRadius: 12, overflow: "hidden", background: "#eceef0", borderBottom: "3px solid #d81f26", position: "relative" }}>
                  <img alt="Jaya Purswani" src="https://lh3.googleusercontent.com/aida-public/AB6AXuACXsw_2Hshx3VPMNLFcUncsDbzUoYMbGbkyLRjuuGSfhd6I4wxDxBQw5fPi4HFN5bPZx_klQoWdEQmCyj3DJykS1wJGGeVK-9zUzFxHMGiW_atj-Dr24Ne-16SuPiso9ggqOsm_wsrExUZavLXgk4d03l8yKEH-dIbEnLb9EcayCJVC-1HSN9kPUm8VRn3atqMuf25lQd1TCTU5kfAAVOquNMHFFltOfPlViyt_iOH-lWj3mCx7gMZyJVS9KqLbjnSbO8" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <p style={{ margin: 0, fontSize: 22, lineHeight: "30px", fontWeight: 600, color: "#191c1e" }}>Jaya Purswani</p>
                  <p style={{ margin: "2px 0 0", fontSize: 14, fontWeight: 600, color: "#d81f26" }}>Co-Founder &amp; Director</p>
                  <p style={{ margin: "10px 0 0", fontSize: 16, lineHeight: "24px", color: "#534434" }}>Built the business alongside him, and pushed for the programme to fund students directly.</p>
                </div>
              </div>
              <blockquote style={{ gridColumn: "1/-1", margin: "24px auto 0", padding: "24px 0 0", borderTop: "4px solid #d81f26", maxWidth: "30em", textAlign: "center" }}>
                <p style={{ margin: 0, fontSize: 26, lineHeight: "36px", letterSpacing: "-0.01em", fontWeight: 700, color: "#191c1e", textWrap: "pretty" }}>
                  &ldquo;Ability is everywhere. Opportunity isn't. We're just closing that gap.&rdquo;
                </p>
                <footer style={{ marginTop: 12, fontSize: 14, fontWeight: 600, color: "#534434" }}>Naresh Purswani</footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Tritorc */}
        <section style={{ background: "#f7f9fb" }}>
          <div style={{ maxWidth: 1320, margin: "0 auto", padding: "64px clamp(16px,4vw,56px)" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
              <div style={{ minWidth: 0 }}>
                <h2 style={{ margin: 0, fontSize: "clamp(26px, 2.2vw, 36px)", lineHeight: 1.25, letterSpacing: "-0.01em", fontWeight: 700, color: "#191c1e" }}>About Tritorc</h2>
                <p style={{ margin: "12px auto 0", maxWidth: "44em", fontSize: 18, lineHeight: "28px", color: "#534434", textWrap: "pretty" }}>
                  One product line in 1989 became an on-site engineering business. Where a bolted joint has to hold — a refinery, a turbine, a sea bridge — Tritorc crews are the ones tightening it and proving the number. Get Your Purpose is funded out of that business.
                </p>
              </div>
              <a href="https://www.tritorc.com/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 16, fontWeight: 600, color: "#d81f26", textDecoration: "none", whiteSpace: "nowrap" }}>
                tritorc.com <span className="material-symbols-outlined" style={{ fontSize: 20 }}>north_east</span>
              </a>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 24, marginTop: 40 }}>
              {[
                ["Oil & gas", "https://images.unsplash.com/photo-1726731782158-fcf6822b6ca4?fm=jpg&q=80&w=700&auto=format&fit=crop", "Refinery flanges, pipelines, offshore platforms"],
                ["Power generation", "https://images.unsplash.com/photo-1516937941344-00b4e0337589?fm=jpg&q=80&w=700&auto=format&fit=crop", "Turbines, generators, plant shutdowns"],
                ["Manufacturing", "https://images.unsplash.com/photo-1578776349090-de61da00ff1a?fm=jpg&q=80&w=700&auto=format&fit=crop", "Plants, heavy machinery and equipment assembly"],
                ["On-site services", "https://images.unsplash.com/photo-1721554146444-379243d27942?fm=jpg&q=80&w=700&auto=format&fit=crop", "Crews working inside live plants: torquing, tensioning, cold cutting"],
              ].map(([title, img, desc]) => (
                <div key={title}>
                  <div style={{ borderRadius: 12, overflow: "hidden", background: "#eceef0", aspectRatio: "4/3", position: "relative" }}>
                    <img alt={title} src={img} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <p style={{ margin: "12px 0 0", fontSize: 18, fontWeight: 600, color: "#191c1e" }}>{title}</p>
                  <p style={{ margin: "4px 0 0", fontSize: 14, lineHeight: "20px", color: "#534434" }}>{desc}</p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 48, padding: 32, borderRadius: 16, background: "#ffffff", border: "1px solid #e6e8ea", borderLeft: "4px solid #d81f26" }}>
              <h3 style={{ margin: 0, fontSize: 20, lineHeight: "28px", fontWeight: 600, color: "#191c1e" }}>What that means if you join the programme</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 32, marginTop: 24 }}>
                <div>
                  <p style={{ margin: 0, fontSize: 16, fontWeight: 600, color: "#d81f26" }}>Mentors who do the work</p>
                  <p style={{ margin: "6px 0 0", fontSize: 16, lineHeight: "24px", color: "#534434" }}>Your counselling sessions include engineers who spend their weeks on plant sites, not just a careers advisor.</p>
                </div>
                <div>
                  <p style={{ margin: 0, fontSize: 16, fontWeight: 600, color: "#d81f26" }}>Internships on real jobs</p>
                  <p style={{ margin: "6px 0 0", fontSize: 16, lineHeight: "24px", color: "#534434" }}>Interns sit with the manufacturing and service teams above, with a stipend and a named mentor.</p>
                </div>
                <div>
                  <p style={{ margin: 0, fontSize: 16, fontWeight: 600, color: "#d81f26" }}>A view of the industry you are entering</p>
                  <p style={{ margin: "6px 0 0", fontSize: 16, lineHeight: "24px", color: "#534434" }}>Four verticals, customers across India, the Gulf, West Africa and the USA — you see where the branches actually lead.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Proof / 2017 */}
        <section style={{ background: "#00164e", color: "#ffffff" }}>
          <div style={{ maxWidth: 1320, margin: "0 auto", padding: "64px clamp(16px,4vw,56px)" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 32 }}>
              <div style={{ minWidth: 0 }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 999, border: "1px solid rgba(255,221,184,.35)", color: "#ffddb8", fontSize: 14, fontWeight: 600, whiteSpace: "nowrap" }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 18 }}>water_damage</span> August 2017
                </span>
                <h2 style={{ margin: "20px auto 0", maxWidth: "22em", fontSize: "clamp(26px, 2.2vw, 36px)", lineHeight: 1.25, letterSpacing: "-0.01em", fontWeight: 700, textWrap: "pretty" }}>
                  The habit we are trying to pass on: showing up.
                </h2>
                <p style={{ margin: "16px auto 0", maxWidth: "34em", fontSize: 18, lineHeight: "28px", color: "#dce1ff", textWrap: "pretty" }}>
                  In the Mumbai floods of August 2017, with trains down and the city at a standstill, our team got equipment to IOCL Mathura and mobilised on site within forty-eight hours.
                </p>
                <p style={{ margin: "16px auto 0", maxWidth: "34em", fontSize: 18, lineHeight: "28px", color: "#ffddb8", textWrap: "pretty" }}>
                  That is what we owe a customer — and a student who trusts us with four years of their life.
                </p>
              </div>
              <div style={{ width: "100%", maxWidth: 480, padding: 28, borderRadius: 16, background: "rgba(255,255,255,.07)", borderTop: "4px solid #d81f26" }}>
                <p style={{ margin: 0, fontSize: 20, lineHeight: "30px", fontWeight: 600, color: "#ffffff" }}>&ldquo;We see them not only as a service provider, but as a solution provider.&rdquo;</p>
                <p style={{ margin: "16px 0 0", fontSize: 14, lineHeight: "20px", color: "#dce1ff" }}>An L&amp;T project engineer, on the Mumbai Trans Harbour Link.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why the programme */}
        <section style={{ background: "#f7f9fb", borderTop: "1px solid #e6e8ea" }}>
          <div style={{ maxWidth: 1320, margin: "0 auto", padding: "64px clamp(16px,4vw,56px)" }}>
            <h2 style={{ margin: "0 auto", maxWidth: "24em", fontSize: "clamp(26px, 2.2vw, 36px)", lineHeight: 1.25, letterSpacing: "-0.01em", fontWeight: 700, color: "#191c1e", textWrap: "pretty" }}>Why a tools manufacturer runs a scholarship</h2>
            <blockquote style={{ margin: "24px auto 0", padding: "24px 0 0", borderTop: "4px solid #d81f26", maxWidth: "34em" }}>
              <p style={{ margin: 0, fontSize: "clamp(20px, 1.8vw, 26px)", lineHeight: 1.4, letterSpacing: "-0.01em", fontWeight: 700, color: "#191c1e", textWrap: "pretty" }}>
                &ldquo;I didn't have help when I started. That's exactly why I'm giving it now.&rdquo;
              </p>
              <footer style={{ marginTop: 12, fontSize: 14, fontWeight: 600, color: "#534434" }}>Naresh Purswani</footer>
            </blockquote>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 24, marginTop: 40 }}>
              <div style={{ padding: 28, borderRadius: 16, background: "#ffffff", border: "1px solid #e6e8ea" }}>
                <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 48, height: 48, borderRadius: 10, background: "#ffddb8", color: "#653e00" }}><span className="material-symbols-outlined">engineering</span></span>
                <h3 style={{ margin: "20px 0 0", fontSize: 20, lineHeight: "28px", fontWeight: 600, color: "#191c1e" }}>We hire engineers</h3>
                <p style={{ margin: "8px 0 0", fontSize: 16, lineHeight: "24px", color: "#534434" }}>So the counselling comes from people who do the work, not from a brochure.</p>
              </div>
              <div style={{ padding: 28, borderRadius: 16, background: "#ffffff", border: "1px solid #e6e8ea" }}>
                <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 48, height: 48, borderRadius: 10, background: "#dce1ff", color: "#264191" }}><span className="material-symbols-outlined">payments</span></span>
                <h3 style={{ margin: "20px 0 0", fontSize: 20, lineHeight: "28px", fontWeight: 600, color: "#191c1e" }}>Fees stop most students</h3>
                <p style={{ margin: "8px 0 0", fontSize: 16, lineHeight: "24px", color: "#534434" }}>Not ability. A specific amount of money at a specific time — that is solvable.</p>
              </div>
              <div style={{ padding: 28, borderRadius: 16, background: "#ffffff", border: "1px solid #e6e8ea" }}>
                <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 48, height: 48, borderRadius: 10, background: "#c5e7ff", color: "#004c6a" }}><span className="material-symbols-outlined">handshake</span></span>
                <h3 style={{ margin: "20px 0 0", fontSize: 20, lineHeight: "28px", fontWeight: 600, color: "#191c1e" }}>Few students, done properly</h3>
                <p style={{ margin: "8px 0 0", fontSize: 16, lineHeight: "24px", color: "#534434" }}>Our first received ₹14 lakh toward a degree at Thadomal Shahani Engineering College, Mumbai.</p>
              </div>
            </div>
          </div>
        </section>

        {/* People */}
        <section style={{ background: "#ffffff", borderTop: "1px solid #e6e8ea" }}>
          <div style={{ maxWidth: 1320, margin: "0 auto", padding: "64px clamp(16px,4vw,56px)" }}>
            <h2 style={{ margin: 0, fontSize: "clamp(26px, 2.2vw, 36px)", lineHeight: 1.25, letterSpacing: "-0.01em", fontWeight: 700, color: "#191c1e" }}>The person you will deal with</h2>
            <p style={{ margin: "8px auto 0", maxWidth: "42em", fontSize: 16, color: "#534434" }}>A small team inside Tritorc runs the programme. He reads the applications and takes the calls.</p>
            <div style={{ display: "flex", justifyContent: "center", marginTop: 40 }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16, padding: "32px 36px", borderRadius: 20, background: "#f7f9fb", border: "1px solid #e6e8ea", width: "100%", maxWidth: 480 }}>
                <div style={{ flex: "0 0 auto", width: 112, height: 112, borderRadius: 999, overflow: "hidden", background: "#f2f4f6", border: "1px solid #e6e8ea" }}>
                  <img alt="Omkar Mungekar" src="https://tritorc.com/blog/add/2025/03/Omkar-Mungekar.webp" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <h3 style={{ margin: 0, fontSize: 20, lineHeight: "28px", fontWeight: 600, color: "#191c1e" }}>Omkar Mungekar</h3>
                  <p style={{ margin: "2px 0 0", fontSize: 14, fontWeight: 600, color: "#855300" }}>Mechanical Engineer &amp; Marketer, Tritorc</p>
                  <p style={{ margin: "10px 0 0", fontSize: 16, lineHeight: "24px", color: "#534434" }}>Helping industries and people connect with technical solutions, Omkar handles Tritorc's global marketing. He's also the founder of Project ALFA, a tech non-profit. All programme communication goes through him.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "#f7f9fb", borderTop: "1px solid #e6e8ea" }}>
          <div style={{ maxWidth: 1320, margin: "0 auto", padding: "64px clamp(16px,4vw,56px)" }}>
            <div style={{ padding: 48, borderRadius: 20, background: "#ffddb8", display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
              <div>
                <h2 style={{ margin: "0 auto", maxWidth: "22em", fontSize: "clamp(26px, 2.2vw, 36px)", lineHeight: 1.25, letterSpacing: "-0.01em", fontWeight: 700, color: "#2a1700", textWrap: "pretty" }}>If this is the kind of help you need, start with two eligibility questions.</h2>
                <p style={{ margin: "12px auto 0", maxWidth: "34em", fontSize: 18, lineHeight: "28px", color: "#653e00" }}>No documents needed to begin. You will need your marksheets, an income certificate and a short cover letter later on.</p>
              </div>
              <Link to="/apply" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", height: 52, padding: "0 32px", borderRadius: 8, background: "#00164e", color: "#ffffff", fontSize: 16, fontWeight: 600, textDecoration: "none", whiteSpace: "nowrap" }}>Apply now</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
