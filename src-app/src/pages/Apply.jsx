import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer.jsx";

const steps = ["Eligibility", "Personal", "Cover Letter", "Documents", "Review"];

function RadioCard({ name, value, checked, onChange, label, sub }) {
  return (
    <label className="radio-card relative flex cursor-pointer rounded-xl border-2 border-outline-variant bg-surface-container-lowest p-md focus:outline-none hover:border-outline transition-colors duration-200">
      <input className="sr-only" name={name} type="radio" value={value} checked={checked} onChange={onChange} />
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center">
          <div className="text-sm">
            <p className="font-label-sm text-label-sm text-on-surface mb-1">{label}</p>
            {sub && <div className="font-body-md text-body-md text-on-surface-variant text-sm">{sub}</div>}
          </div>
        </div>
        <div className={"shrink-0 text-primary-container " + (checked ? "" : "hidden")}>
          <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
        </div>
      </div>
    </label>
  );
}

export default function Apply() {
  const [education, setEducation] = useState("");
  const [income, setIncome] = useState("");

  return (
    <div className="bg-surface-bright text-on-surface font-body-md text-body-md antialiased min-h-screen flex flex-col relative overflow-x-hidden">
      <div className="fixed top-0 left-0 w-full h-96 bg-gradient-to-b from-surface-container-high/30 to-transparent -z-10 pointer-events-none"></div>

      <header style={{ background: "#ffffff", borderBottom: "1px solid #e6e8ea" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 clamp(16px,4vw,56px)", height: 72, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
          <Link to="/" style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.01em", color: "#855300", textDecoration: "none", whiteSpace: "nowrap" }}>Get Your Purpose</Link>
          <Link to="/" style={{ display: "inline-flex", alignItems: "center", height: 44, padding: "0 16px", borderRadius: 8, fontSize: 14, fontWeight: 600, color: "#534434", textDecoration: "none" }}>Cancel application</Link>
        </div>
      </header>

      <main className="flex-grow w-full max-w-max-width mx-auto px-margin-mobile md:px-gutter pb-xl z-10 grid grid-cols-1 lg:grid-cols-12 gap-lg items-start">
        <div className="lg:col-span-8">
          {/* Progress Stepper */}
          <nav aria-label="Progress" className="mb-lg mt-md">
            <ol className="flex items-center justify-between w-full overflow-hidden" role="list">
              {steps.map((step, i) => {
                const isFirst = i === 0;
                return (
                  <li key={step} className={"relative group " + (i === steps.length - 1 ? "" : "flex-1")}>
                    {i !== steps.length - 1 && (
                      <div aria-hidden="true" className="absolute inset-0 flex items-center">
                        <div className={"h-0.5 w-full " + (isFirst ? "bg-primary-container" : "bg-surface-dim")}></div>
                      </div>
                    )}
                    {isFirst ? (
                      <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-primary-container ring-4 ring-surface-bright">
                        <span className="material-symbols-outlined text-on-primary-container text-[16px] font-bold" style={{ fontVariationSettings: '"FILL" 1' }}>check</span>
                      </span>
                    ) : i === 1 ? (
                      <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-surface-container-lowest border-2 border-primary-container ring-4 ring-surface-bright">
                        <span className="text-primary-container font-label-sm text-label-sm">{i + 1}</span>
                      </span>
                    ) : (
                      <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-surface-container-lowest border-2 border-surface-dim ring-4 ring-surface-bright">
                        <span className="text-on-surface-variant font-label-sm text-label-sm">{i + 1}</span>
                      </span>
                    )}
                    <span className={
                      "absolute -bottom-6 text-xs font-label-sm hidden md:block " +
                      (isFirst ? "left-0 text-primary-container font-bold" : i === steps.length - 1 ? "right-0 text-on-surface-variant opacity-50" : "left-1/2 -translate-x-1/2 text-on-surface-variant " + (i === 1 ? "" : "opacity-50"))
                    }>{step}</span>
                  </li>
                );
              })}
            </ol>
          </nav>

          {/* Main Card Container */}
          <div className="bg-surface-container-lowest rounded-xl shadow-soft p-md md:p-lg border border-surface-container-high/50 mt-sm">
            <div className="space-y-lg">
              <div>
                <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-secondary mb-xs">
                  Let's start with the basics.
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[600px]">
                  We're so glad you're here. To make sure you're applying for the right program, we just need to confirm a couple of quick details. There are no wrong answers!
                </p>
              </div>
              <form className="space-y-xl" onSubmit={(e) => e.preventDefault()}>
                {/* Education Question */}
                <fieldset>
                  <legend className="font-title-md text-title-md text-on-surface mb-md">Have you completed your 12th grade (or equivalent) education?</legend>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-sm">
                    <RadioCard
                      name="education"
                      value="yes"
                      checked={education === "yes"}
                      onChange={() => setEducation("yes")}
                      label="Yes, I have"
                      sub="I have passed my 12th standard exams."
                    />
                    <RadioCard
                      name="education"
                      value="no"
                      checked={education === "no"}
                      onChange={() => setEducation("no")}
                      label="Not yet"
                      sub="I am currently studying or have other plans."
                    />
                  </div>
                </fieldset>

                {/* Income Question */}
                <fieldset>
                  <legend className="font-title-md text-title-md text-on-surface mb-md">What is your annual family income bracket?</legend>
                  <p className="text-sm font-body-md text-on-surface-variant mb-md -mt-2">This helps us determine eligibility for financial support scholarships.</p>
                  <div className="space-y-sm">
                    <RadioCard name="income" value="tier1" checked={income === "tier1"} onChange={() => setIncome("tier1")} label="Below ₹2,50,000" />
                    <RadioCard name="income" value="tier2" checked={income === "tier2"} onChange={() => setIncome("tier2")} label="₹2,50,001 - ₹5,00,000" />
                    <RadioCard name="income" value="tier3" checked={income === "tier3"} onChange={() => setIncome("tier3")} label="Above ₹5,00,000" />
                  </div>
                </fieldset>
              </form>
            </div>

            {/* Action Area */}
            <div className="mt-xl pt-lg border-t border-surface-container-high flex flex-col-reverse md:flex-row items-center justify-between gap-md">
              <button className="w-full md:w-auto px-6 py-3 font-label-sm text-label-sm font-semibold text-secondary hover:bg-surface-container rounded-lg transition-colors duration-200 flex items-center justify-center gap-2" type="button">
                <span className="material-symbols-outlined text-[20px]">arrow_back</span>
                Save for later
              </button>
              <button className="w-full md:w-auto px-8 py-3 bg-primary-container hover:bg-[#d98c0a] text-on-secondary-fixed font-label-sm text-label-sm font-semibold rounded-lg shadow-sm transition-all duration-200 flex items-center justify-center gap-2" type="button">
                Continue to Next Step
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Supportive Footer Note */}
          <div className="text-center mt-md opacity-70">
            <p className="font-label-sm text-label-sm flex items-center justify-center gap-1">
              <span className="material-symbols-outlined text-[16px]">lock</span>
              Your information is saved securely and kept strictly confidential.
            </p>
          </div>
        </div>

        {/* Supportive Context Sidebar */}
        <aside className="lg:col-span-4 space-y-md mt-md lg:mt-xl lg:pt-lg">
          <div className="bg-surface-container-lowest rounded-xl shadow-soft p-md border border-surface-container-high/50">
            <div className="flex items-center gap-2 mb-md text-secondary">
              <span className="material-symbols-outlined">route</span>
              <h3 className="font-title-md text-title-md">How Your Application is Processed</h3>
            </div>
            <ol className="list-decimal list-outside ml-4 font-body-md text-body-md text-on-surface-variant space-y-2">
              <li>Application</li>
              <li>Screening</li>
              <li>Document Verification</li>
              <li>Shortlisting</li>
              <li>Interview</li>
              <li>Final Decision</li>
              <li>Offer &amp; Agreement</li>
              <li>Admission Confirmation</li>
              <li>Disbursement</li>
            </ol>
          </div>
          <div className="bg-surface-container-lowest rounded-xl shadow-soft p-md border border-surface-container-high/50">
            <div className="flex items-center gap-2 mb-sm text-secondary">
              <span className="material-symbols-outlined">shield_lock</span>
              <h3 className="font-title-md text-title-md">Privacy &amp; Security</h3>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Your information is read only by Omkar Mungekar, who runs programme communication.
            </p>
          </div>
          <div className="bg-surface-container-lowest rounded-xl shadow-soft p-md border border-surface-container-high/50">
            <div className="flex items-center gap-2 mb-sm text-secondary">
              <span className="material-symbols-outlined">payments</span>
              <h3 className="font-title-md text-title-md">Financial Support</h3>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Financial support is arranged directly with selected students and paid from Tritorc's own funds. Tritorc decides, per student, whether the grant is a one-time award or renewable — renewal is contingent on maintaining a CGPA of 7. Our first supported student received ₹14 lakh toward an engineering degree.
            </p>
          </div>
        </aside>
      </main>

      <Footer />
    </div>
  );
}
