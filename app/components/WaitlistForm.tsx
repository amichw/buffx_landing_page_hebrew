"use client";

import { ArrowLeft, CheckCircle } from "lucide-react";
import { useState } from "react";

export function WaitlistForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    hasDivorceDoc: false,
    companyWebsite: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    const response = await fetch("/api/waitlist/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        hasDivorceDoc: formData.hasDivorceDoc,
        companyWebsite: formData.companyWebsite,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Waitlist submission error:", errorText);
      alert("אירעה תקלה בשליחה. נסי שוב בעוד רגע.");
      setIsSubmitting(false);
      return;
    }

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setIsSubmitting(false);
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        hasDivorceDoc: false,
        companyWebsite: "",
      });
    }, 3000);
  };

  return (
    <section
      id="waitlist-form"
      className="relative overflow-hidden py-24"
      style={{ background: "linear-gradient(180deg, #0F172A 0%, #1a2332 100%)" }}
    >
      <div
        className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #05FB90 0%, #B9FEE0 50%, transparent 100%)" }}
      />
      <div
        className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #B9FEE0 0%, #05FB90 50%, transparent 100%)" }}
      />

      <div className="relative mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-extrabold text-white md:text-5xl">רוצה להיות משתמשת מייסדת?</h2>
          <p className="text-lg text-[#B9FEE0] md:text-xl">
            גישה ראשונה למערכת, השפעה על הפיצ׳רים, ותנאים מיוחדים לתמיד.
          </p>
        </div>

        <div
          className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-[0_30px_80px_rgba(5,251,144,0.3)] md:p-10"
        >
          {submitted ? (
            <div className="py-8 text-center">
              <div
                className="mb-6 inline-flex rounded-full p-6"
                style={{
                  background: "linear-gradient(135deg, #B9FEE0 0%, #05FB90 100%)",
                  boxShadow: "0 20px 40px rgba(5, 251, 144, 0.4)",
                }}
              >
                <CheckCircle size={56} style={{ color: "#0F172A" }} />
              </div>
              <h3 className="mb-3 text-3xl font-bold text-[#0F172A]">תודה על ההרשמה!</h3>
              <p className="text-xl text-[#0F172A]/70">נשלח לך עדכון ברגע שהמערכת תהיה זמינה</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" id="waitlist-form-inner">
              <div className="text-right">
                <label htmlFor="fullName" className="mb-2 block font-bold text-[#0F172A]">
                  שם מלא
                </label>
                <input
                  type="text"
                  id="fullName"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full rounded-xl border-2 border-[#F0F0FA] bg-gradient-to-br from-[#F0F0FA] to-white px-5 py-4 text-right text-lg text-[#0F172A] outline-none transition-all focus:border-[#05FB90] focus:shadow-[0_0_20px_rgba(5,251,144,0.2)]"
                  placeholder="הזיני את שמך המלא"
                />
              </div>

              <div className="text-right">
                <label htmlFor="phone" className="mb-2 block font-bold text-[#0F172A]">
                  טלפון נייד
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full rounded-xl border-2 border-[#F0F0FA] bg-gradient-to-br from-[#F0F0FA] to-white px-5 py-4 text-right text-lg text-[#0F172A] outline-none transition-all focus:border-[#05FB90] focus:shadow-[0_0_20px_rgba(5,251,144,0.2)]"
                  placeholder="050-1234567"
                />
              </div>

              <div className="text-right">
                <label htmlFor="email" className="mb-2 block font-bold text-[#0F172A]">
                  כתובת אימייל
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-xl border-2 border-[#F0F0FA] bg-gradient-to-br from-[#F0F0FA] to-white px-5 py-4 text-right text-lg text-[#0F172A] outline-none transition-all focus:border-[#05FB90] focus:shadow-[0_0_20px_rgba(5,251,144,0.2)]"
                  placeholder="example@email.com"
                />
              </div>

              <div className="flex h-[70px] w-full items-center gap-[13.896px] rounded-[16.212px] bg-[#f0f0fa] pr-[30px]" dir="rtl">
                <div className="relative h-[30px] w-[30px] shrink-0">
                  <input
                    type="checkbox"
                    id="hasDivorceDoc"
                    checked={formData.hasDivorceDoc}
                    onChange={(e) => setFormData({ ...formData, hasDivorceDoc: e.target.checked })}
                    className="absolute right-0 top-0 h-[30px] w-[30px] cursor-pointer appearance-none rounded-[6px] border-0 bg-white"
                    style={{ boxShadow: "0px 4px 10.7px 0px rgba(0,0,0,0.25)" }}
                  />
                  {formData.hasDivorceDoc ? (
                    <svg
                      className="pointer-events-none absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M4 10L8 14L16 6"
                        stroke="#05FB90"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : null}
                </div>
                <div className="h-[28px] flex-1 shrink-0">
                  <label
                    htmlFor="hasDivorceDoc"
                    className="cursor-pointer text-right font-['Arial:Regular',sans-serif] text-[18.528px] leading-[27.793px] text-[#0f172a]"
                    dir="auto"
                  >
                    יש לי פסק דין/הסכם גירושין (לא חובה להעלות כרגע)
                  </label>
                </div>
              </div>

              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                value={formData.companyWebsite}
                onChange={(e) => setFormData({ ...formData, companyWebsite: e.target.value })}
                className="hidden"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-full py-5 text-lg font-bold transition-all hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
                style={{
                  background: "linear-gradient(135deg, #05FB90 0%, #B9FEE0 100%)",
                  color: "#0F172A",
                  boxShadow: "0 20px 60px rgba(5, 251, 144, 0.4), 0 0 40px rgba(5, 251, 144, 0.2)",
                }}
              >
                <span className="relative z-10">{isSubmitting ? "שולחת..." : "כן, שמרי לי מקום"}</span>
                <ArrowLeft size={24} className="relative z-10 transition-transform group-hover:-translate-x-1" />
                <div
                  className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
                  style={{ background: "linear-gradient(135deg, #B9FEE0 0%, #05FB90 100%)" }}
                />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}